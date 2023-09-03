import { Button } from "../ui/button";

type Props = {
	setNavPage: React.Dispatch<React.SetStateAction<string>>;

}

export default function AppountmentNavBar(setNavPage: Props) {
	return (
		<div className="flex flex-row justify-center m-auto">
			<Button className="bg-red-200 m-3">1</Button>
			<Button className="bg-red-200 m-3">2</Button>
			<Button className="bg-red-200 m-3">3</Button>
			<Button className="bg-red-200 m-3">4</Button>
		</div>
	)
}