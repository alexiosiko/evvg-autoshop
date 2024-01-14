import Image from "next/image";
import LeftRight from "../leftright";
import img from "@/images/evvg-background.png"
import SubHeader from "../subheader";
import Header from "../header";
import Description from "../description";

export default function OurStory() {
	return (
		<LeftRight>
			<Image className="rounded-lg" src={img} alt="mechanic-image" />
			<div className="w-[80%]">
				<SubHeader>Who Are We</SubHeader>
				<Header>Our Story</Header>
				<br />
				<Description>EVVG Auto Services is a family owned business that has been operating for over 20 years. When George, the owner, was starting the business he thought of various names for the shop. He eventually decided on the name EVVG, which was inspired by the names of his four children: Elleni, Vassili, Vangeli, and Georgia.
<br />
We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!</Description>
			</div>
		</LeftRight>
	)
}