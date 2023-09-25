"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { isAdmin } from "@/lib/actions/backend";
import { useRouter } from 'next/navigation'

import { useRef } from "react";

export default function page() {
	const router = useRouter();
	
	const codeRef = useRef<any>(null);
	async function handleOnLogin() {
		if (await isAdmin(codeRef.current.value))
			router.push('/admin/georgeaccount')
		else
			toast({
				title: "Invalid code",
				description: "Please try again..."
			})

	}
	return (
		<>
			<Card className="max-w-3xl m-auto">
				<CardHeader>
					<CardTitle>Admin login</CardTitle>
					<CardDescription>Please enter admin code</CardDescription>
				</CardHeader>
				<CardContent className="flex gap-4">
					<Input ref={codeRef} name="admin-password" placeholder="code" />
					<Button variant={'special'} onClick={() => handleOnLogin()}>Login</Button>
				</CardContent>
			</Card>
		</>
	)
}