import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;

}

const handler = NextAuth({
  callbacks: {
    async jwt({ token, user }){
      if (user) {
        token.email = user.email;
      }
      console.log("this is token", token);
      return token;
    },
    async session({ session, token }) {
      if (token) {
         session.user.email  = token.email;
      }
      console.log("this is session", session);
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
      
      async authorize(credentials:User) {
      
        try {
          const client = await clientPromise;
          const db = client.db("echodb");
          const users = db.collection("users");
          const user = await users.findOne({ email: credentials.email });
          if (!user) {
            Response.json( "user does not exist" );
            throw new Error("Invalid email or password");
          }
          
          const res = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!res ) {
            Response.json({ message: "Invalid email or password" });
            throw new Error("Invalid email or password");
          }
            
          return user;


        } catch (error:any) {
        Response.json({ message: "server error" });
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
