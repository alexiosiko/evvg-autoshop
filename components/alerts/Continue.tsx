import { useEffect, useRef } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";
type ContinueAlertType = {
	alertInfo: {
		title: string,
		description: string,
		active: boolean
	} | undefined,
	setAlertInfo: (alertInfo: {
		title: string;
		description: string;
		active: boolean;
	 }) => void;
}
export function AlertContinue({ alertInfo, setAlertInfo } : ContinueAlertType) {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		// When the alertBox becomes true, trigger a click event on the button
		if (alertInfo?.active && buttonRef.current) {
		  buttonRef.current.click();
		}
	 }, [alertInfo?.active]);
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
				<AlertDialogAction onClick={() => setAlertInfo({
					title: "",
					description: "",
					active: false,
					})}>
				Continue
				</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}