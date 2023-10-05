import Admin from "@/models/Admin";
import connect from "@/utils/data/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // Vérifiez si l'administrateur existe.
        await connect();

        try {
          const admin = await Admin.findOne({
            email: credentials.email,
          });

          if (admin) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              admin.password,
            );

            if (isPasswordCorrect) {
              return Promise.resolve(admin);
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("Admin not found!");
          }
        } catch (err) {
          const errorMessage = (err as string) || "An error occurred";
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account.provider === "google") {
  //       return profile.email_verified && profile.email.endsWith("@example.com")
  //     }
  //     return true // Do different verification for other providers that don't have `email_verified`
  //   },
  // }
};
