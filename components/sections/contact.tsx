"use client"

import Image from "next/image";
import LeftRight from "../leftright";
import Header from "../header";
import { socialMedias } from "@/data/socialmedia";
import Map from "../Map";
import SubHeader from "../subheader";

export default function Contact() {
	return (
		<section id="contact">
			<LeftRight>
				<div className="m-auto ml-0 text-[var(--text-accent)]">
					<SubHeader>Let's Get Started</SubHeader>
					<Header className="text-[var(--text-accent)]">Contact Us</Header>
					<br />
					<div className="flex flex-col gap-4">
						{socialMedias.map((socialMedia, index) => 
							<a href={socialMedia.href} key={index} className="flex gap-4 items-center">
								<Image src={socialMedia.icon} height={35} width={35} alt="icon" />
								<p>{socialMedia.description}</p>
							</a>
							)}
					</div>
					<br />
					
					<Header className="text-[var(--text-accent)]">Hours</Header>
					<br />
					<div className="flex flex-col gap-1">
						<p>Monday - Friday: 8am - 6pm</p>
						<p>Saturday: 10am - 5pm</p>
						<p>Sunday: Closed</p>
					</div>
				</div>
				<Map />
			</LeftRight>
		</section>
	)
}
