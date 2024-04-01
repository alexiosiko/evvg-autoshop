"use client"

import Image from "next/image";
import LeftRight from "../leftright";
import Title from "../title";
import { socialMedias } from "@/data/socialmedia";
import Map from "../Map";
import SubHeader from "../subheader";
import Description from "../description";
import Header from "../header";

export default function Contact() {
	return (
		<section id="contact" className="pt-24 pb-[300px] w-full bg-slate-900 ">
			<div className="max-w-7xl m-auto">
				<Title className="text-center mb-24 text-white">Let's Get Started!</Title>
				<div className="xl:flex gap-24">
					<div className="flex flex-col justify-around text-center ">
						<div className="flex flex-col gap-8">
							<Title className="text-white">Hours</Title>
							<Description className="mt-4 text-slate-200">Monday — Friday <br /> 8am — 5pm</Description>
							<Description className="text-slate-200">Saturday<br />10am — 5pm</Description>
							<Description className="text-slate-200">Sunday<br/>Closed</Description>
						</div>
						<div className="flex flex-col gap-8 mt-12">
							<Title className="text-white">Contact</Title>
							<Description className="mt-4 text-slate-200"><a href="mailto:evvauto@gmail.com">evvgauto@gmail.com</a></Description>
							<Description className="text-slate-200"><a href="https://www.facebook.com/evvgautoservices">facebook.com/evvgautoservices</a></Description>
							<Description className="text-slate-200"><a href="tel:+16045140152">(604) - 514 - 0152</a></Description>
						</div>

					</div>
					<Map />
				</div>
			</div>
		</section>
	)
}
