import { useEffect, useRef } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";
export type alertInfoType = {
	title: string,
	description: string,
	active: boolean
	reload: boolean,
}
type ContinueAlertType = {
	alertInfo: alertInfoType| undefined,
	setAlertInfo: (alertInfo: alertInfoType) => void
}
export function AlertContinue({ alertInfo, setAlertInfo } : ContinueAlertType) {

	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		// When the alertBox becomes true, trigger a click event on the button
		if (alertInfo?.active && buttonRef.current) {
		  buttonRef.current.click();
		}
	 }, [alertInfo?.active]);

	function handleOnContinue() {
		const reload = alertInfo?.reload;
		setAlertInfo({
			title: "",
			description: "",
			active: false,
			reload: false,
		})
		if (reload)
			window.location.reload();
	}
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild className='hidden'>
			<Button ref={buttonRef} variant="outline"></Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle className="text-primary">{alertInfo?.title}</AlertDialogTitle>
				<AlertDialogDescription>
					{alertInfo?.description}
				</AlertDialogDescription>
			</AlertDialogHeader>
				<AlertDialogFooter>
				<AlertDialogAction onClick={() => handleOnContinue()}>
				Continue
				</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}