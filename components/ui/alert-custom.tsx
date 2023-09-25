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
	destructive?: boolean,
} | null;

export default function Alert({ info }: { info: infoType }) {
	const buttonRef = useRef<any>(null);
	useEffect(() => {
		buttonRef.current?.click();
	}, [info])

	async function handleContinue() {
		// await info?.callbackFunction;
		location.reload();
	}

	
	if (!info) return;
  return (
    <AlertDialog>
			<AlertDialogTrigger>
				<input ref={buttonRef} />
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
						info.destructive == true ?
						<Button variant="destructive" onClick={handleContinue}>
							Delete
						</Button>
						: 
						<Button onClick={handleContinue}>
							Continue
						</Button>
					}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}