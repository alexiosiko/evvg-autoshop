"use client"

import { AlertContinue, alertInfoType } from "@/components/alerts/Continue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { isAdmin } from "@/lib/actions/backend";
import { useRouter } from 'next/navigation'

import { useRef, useState } from "react";

export default function page() {
	const router = useRouter();
	
	const [alertInfo, setAlertInfo] = useState<alertInfoType>();
	const codeRef = useRef<any>(null);
	async function handleOnLogin() {
		if (await isAdmin(codeRef.current.value))
			router.push('/admin/georgeaccount')
		else
			setAlertInfo({
				title: "Invalid code",
				description: "Please try again...",
				active: true,
				reload: false,
			})

	}
	return (
		<>
			<AlertContinue alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
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