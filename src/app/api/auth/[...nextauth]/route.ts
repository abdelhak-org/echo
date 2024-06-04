import NextAuth  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import { AuthOptions} from "@/types/interfaces";
import { User } from "@/types/interfaces";
interface Session {
  user: User , 
  status :boolean ,
}

export const authOptions:AuthOptions = {

  callbacks: {
    async jwt({ token, user  } : { token: User; user: User  }){
      if (user) {
        token.email = user.email;
        token.userId = user.userId;
        token.userName = user.userName;
        token.src = user.src;
      
      
      }
    
      console.log("token ...nextauth ",token);
      return token;
    },
    async session ({ session, token , trigger }:{session:Session, token:User ,trigger:string}) {
      if(!session.user) {
        return session
      }
      if (trigger === "update" && session?.user ) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        session.user.src = "";
      }
      if (token) {
            session.user.email  = token.email;
            session.user.userId = token.userId;
            session.user.userName = token.userName;
            session.user.src = token.src;
            
      } 
      console.log( "session ...nextauth ",session);
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
};

const handler = NextAuth(authOptions); 
export { handler as GET, handler as POST };