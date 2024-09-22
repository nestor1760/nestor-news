import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from "./db";
import { compare } from "bcrypt";

// import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email }
        });
        if (!existingUser) {
          return null
        }

        const passwordMatch = await compare(credentials.password, existingUser.password)
        if (!passwordMatch) {
          return null
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email,
        }
      }
    })
  ]
}


// providers: [
//   GithubProvider({
//     clientId: process.env.GITHUB_ID as string,
//     clientSecret: process.env.GITHUB_SECRET as string,
//   }),
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID as string,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//   }),
// ]