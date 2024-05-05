import NextAuth , {DefaultSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;

}
interface Session {
  user: User , 
  status :boolean ,
}

const handler = NextAuth({
  callbacks: {
    async jwt({ token, user }){
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session ({ session, token }) {
      if(!session.user) {
        return session
      }
      if (token) {
         session.user.email  = token.email;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  }, 
   providers: [
    CredentialsProvider({
      name: "credentials",
      
      credentials: {},
      
      async authorize (credentials:User){
        
        try {
        
          const client = await clientPromise;
          const db = client.db("echodb");
          const users = db.collection("users");
          const user = await users.findOne({ email: credentials.email });
          if (!user) {
         
            throw new Error("user does not exist");
          }
          
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid ) {
            throw new Error("Invalid password");
          }
            
          return user;


        } catch (error: any) {
        Response.json({message :error.message});
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
