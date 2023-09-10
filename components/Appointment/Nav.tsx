import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

type Props = {
	setNavPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function AppountmentNavBar({ setNavPage }: Props) {
	return (
		<div className="flex flex-row justify-around m-auto">
			<div>
			<Button onClick={() => setNavPage('info')} className="m-3 w-20">Info</Button>
			<Button onClick={() => setNavPage('car')} className="m-3 w-20">Car</Button>
			<Button onClick={() => setNavPage('services')} className="m-3 w-20">Services</Button>
			<Button onClick={() => setNavPage('date')} className="m-3 w-20">Date</Button>
			</div>
			<div className="items-center flex">
				<UserButton />
			</div>
		</div>
	)
}