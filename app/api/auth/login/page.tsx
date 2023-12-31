"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRef } from "react";

export default function Login() {
	const passwordRef = useRef<any>(null);
	async function handleOnLogin() {
		signIn("credentials", { 
			password: passwordRef.current.value,
			redirect: false,
		}).then(res => {
			if (res?.error)
				toast({
					title: "Invalid password",
					description: "Please try again..."
				})
			else {
				window.location.reload();
			}
		})
	}
	return (
		<Card className="max-w-xl m-auto">
			<CardHeader>
				<CardTitle>Admin login</CardTitle>
				<CardDescription>Please enter admin password</CardDescription>
			</CardHeader>
			<CardContent className="flex gap-4">
				<Input ref={passwordRef} name="admin-password" placeholder="code" />
				<Button variant={'special'} onClick={() => handleOnLogin()}>Login</Button>
			</CardContent>
		</Card>
	)
}