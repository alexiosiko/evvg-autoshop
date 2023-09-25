import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
			password: {
				label: "Enter admin code:",
				type: "text",
				placeholder: "Enter password",
			},
			},
			async authorize(credentials) {
				const user = { id: "george" };
				console.log(credentials?.password);
				if (credentials?.password == process.env.ADMIN_PASSWORD) 
					return user;
				
				return null;
			},
		}),
	],
};
