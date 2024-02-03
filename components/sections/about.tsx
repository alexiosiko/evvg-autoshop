import Image from "next/image";
import Description from "../description";
import Header from "../header";
import LeftRight from "../leftright";
import SubHeader from "../subheader";

import IMG from "@/images/image1.jpg";

export default function About() {
	return (
		<LeftRight>
			<div className="flex flex-col justify-center">
				<SubHeader>About Us</SubHeader>
				<Header>We are Qualified & Professional</Header>
				<br />
				<Description>Our commitment to you is to provide honest, friendly, and on-time service. Visit a locally owned and operated business that has been serving the community since 1992. We are always keen to prove to our customers that we are different!</Description>
			</div>
			<Image className="m-auto max-sm:mt-12"  src={IMG} height={500} width={350} alt="image" />
		</LeftRight>
	)
}