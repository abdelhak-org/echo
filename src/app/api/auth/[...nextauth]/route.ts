import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
 import clientPromise from "@/lib/mongodb"
const handler = NextAuth({
  callbacks: {
   async jwt( {token , user}){
      if(user){
        token.email = user.email
      }
      console.log("this is token" , token)
      return token
   } ,
   async session( {session , token}){
     if(token){
       session.user.email = token.email
     }
     console.log("this is session" , session)
     return session
   }   
  },



  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
   },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: { },
      
      async authorize(credentials: { email: string, password: string }){
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional 
  
       try {
        const client = await clientPromise;
        const db = client.db();
        const users = db.collection("users");
        const user = await users.findOne({ email: credentials.email });
        if (!user || user.password !== credentials.password) {
          throw new Error("Invalid email or password");
        }
        return user;
       } catch (error) {
        throw new Error("Error in login");
       }
      }
    })
  ],
  pages: {
    signIn: "/auth/login",  
  }
})
export { handler as GET, handler as POST }


