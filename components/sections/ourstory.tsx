import Image from "next/image";
import LeftRight from "../leftright";
import img from "@/images/george.png"
import SubHeader from "../subheader";
import Title from "../title";
import Description from "../description";

export default function HowItStarted() {
	return (
		<LeftRight className="">
			<div className="max-md:hidden flex flex-row justify-end xl:translate-x-24">
				<Image className="rounded-lg h-[600px] object-contain" src={img} alt="mechanic-image" />
			</div>
			<div className=" max-sm:mt-12 max-w-4xl pt-24 xl:-translate-x-16 p-4">
				<SubHeader>Our Story</SubHeader>
				<Title>How It Started</Title>
				<br />
				<Description>EVVG Auto Services is a family owned business that has been operating for over 20 years. When George, the owner, was starting the business he thought of various names for the shop. He eventually decided on the name EVVG, which was inspired by the names of his four children: Elleni, Vassili, Vangeli, and Georgia.
				<br />
				<br />
				<Description>
					We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!</Description>
				</Description>
			</div>
		</LeftRight>
	)
}