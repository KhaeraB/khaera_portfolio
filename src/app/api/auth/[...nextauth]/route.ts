import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "api/auth/signin",
    signOut: "api/auth/signout",
    error: "api/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "api/auth/verify-request", // (used for check email message)
    newUser: "api/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

export { handler as GET, handler as POST };
