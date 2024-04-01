import Image from "next/image";
import Description from "../description";
import Title from "../title";
import LeftRight from "../leftright";
import SubHeader from "../subheader";
import IMG from "@/images/evvg-background.png";

export default function About() {
	return (
		<LeftRight	>
			<div className="flex flex-col justify-center bg-slate-900 h-full  max-md:pt-6 pb-6">
				<div className="max-w-xl m-auto p-4">

					<SubHeader>Who Are We</SubHeader>
					<Title className="!text-white">About EVVG Auto Services</Title>
					<br />
					<Description className="!text-[var(--text-accent-other)]">Our commitment to you is to provide honest, friendly, and on-time service. Visit a locally owned and operated business that has been serving the community since 1992. We are always keen to prove to our customers that we are different!</Description>
				</div>
			</div>
			<div className="bg-green-400">

			<Image className="w-full"  src={IMG}  alt="image" />
			</div>
		</LeftRight>
	)
}