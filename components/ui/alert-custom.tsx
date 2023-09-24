import { useEffect, useRef } from "react";
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
	AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "./button";

export type infoType = {
  title: string;
  description: string;
  callbackFunction: any;
	back?: boolean,
	refresh?: boolean,
} | null;

export default function Alert({ info }: { info: infoType }) {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		buttonRef.current?.click();
	}, [info])

	async function handleContinue() {
		await info?.callbackFunction;
		location.reload();
	}
	
	if (info == undefined) return;
  return (
    <AlertDialog>
			<AlertDialogTrigger>
				<Button className="hidden" ref={buttonRef}></Button>
			</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{info?.title}</AlertDialogTitle>
          <AlertDialogDescription>{info?.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
					{
						info?.back && 
						<AlertDialogAction>Back</AlertDialogAction>
					}
          {
						info.callbackFunction &&
						<AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
					}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}