import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";
import { AuthOptions } from "@/types/interfaces";
import { User } from "@/types/interfaces";

interface Session {
  user: User;
  status: boolean;
}

export const authOptions: AuthOptions = {
  callbacks: {
    async jwt({ token, user }: { token: User; user: User }) {
      if (user) {
        token.userId = user.userId;
        token.userName = user.userName;
        token.email = user.email;
        token.image = user.image;
        token.src = user.src;
      }
      return token;
    },
    async session({
      session,
      token,
      trigger,
    }: {
      session: Session;
      token: User;
      trigger: string;
    }) {
      if (!session.user) {
        return session;
      }
      if (trigger === "update" && session?.user) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        session.user.src = "";
      }
      if (token) {
        session.user.userId = token.userId;
        session.user.userName = token.userName;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.src = token.src;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 days
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: User) {
        try {
          const client = await clientPromise;
          const db = client.db("echodb");
          const users = db.collection("users");
          const user = await users.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("User does not exist");
          }
          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (!isValid) {
            throw new Error("Invalid password");
          }
          return user;
        } catch (error: any) {
          Response.json({ message: error.message });
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };
