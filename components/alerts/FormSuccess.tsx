import { useEffect, useRef } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";
type ContinueAlertType = {
	alertBox: boolean,
	setAlertBox: (value: boolean) => void,
	alertInfo: {
		title: string,
		description: string,
	} | undefined
}
function FormSuccess({alertBox, setAlertBox, alertInfo} : ContinueAlertType) {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		// When the alertBox becomes true, trigger a click event on the button
		if (alertBox && buttonRef.current) {
		  buttonRef.current.click();
		}
	 }, [alertBox]);
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild className='hidden'>
			<Button ref={buttonRef} variant="outline"></Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>{alertInfo?.title}</AlertDialogTitle>
				<AlertDialogDescription>
					{alertInfo?.description}
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogAction onClick={() => setAlertBox(false)}>Continue</AlertDialogAction>
			</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}