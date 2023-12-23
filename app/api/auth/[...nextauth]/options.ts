import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
			password: {
				label: "Enter admin password:",
				type: "text",
				placeholder: "Enter password",
			}, 
			},
			async authorize(credentials) {
				console.log(process.env.ADMIN_PASSWORD)
				const user = { id: "george" };
				if (credentials?.password == process.env.ADMIN_PASSWORD) 
					return user;
				
				return null;
			},
		}),
	],
};
