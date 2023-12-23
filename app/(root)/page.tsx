"use client"

import Image from "next/image";
import Link from "next/link";
import { ServicesGridData } from "@/constants/ServicesData";
import { ReviewsData } from "@/constants/ReviewsData";
import { Button } from "@/components/ui/button";
import MechanicPhoto1 from "@/assets/photos/mechanic-photo1.png";
import MechanicPhoto2 from "@/assets/photos/mechanic-photo2.png";
import MechanicPhoto3 from "@/assets/photos/mechanic-photo3.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Review from "@/components/Review";
import { motion } from 'framer-motion';
import backgroundImage from '@/assets/photos/evvg-background.png'
import Vertical from "@/components/framer/vertical";
import LeftRight from "@/components/framer/leftRight";
import Service from "@/components/Service";
import TextAnim from "@/components/text-test";

export default function Page() {
	return (
		<div className="p-2" >
			<div style={{ height: 1, width: 1}} />
			<motion.div 
			initial={{ opacity: 0 }}
			animate={{ y: -200, opacity: 100 }}
			
				style={{
					translateY: 200,
				marginTop: 30,
				backgroundImage: `url(${backgroundImage.src})`,
				aspectRatio: 16/12,
				margin: 'auto',
				maxHeight: 800,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				borderRadius: 15,
			}} />
			<hr className="mt-12 mb-24"/>
			<section className="text-center mb-6 m-auto text-xl leading-8 text-primary">
					<Vertical className='text-5xl font-extrabold mb-12 text-primary'>EVVG's story</Vertical>
				<LeftRight>
					<Image className="m-auto mt-0 rounded-md" src={MechanicPhoto3} width={300} alt="mechanic photo" />
					<div>
						EVVG Auto Services is a family owned business that has been operating for over 20 years. When George, the owner, was starting the business he thought of various names for the shop. He eventually decided on the name EVVG, which was inspired by the names of his four children: Elleni, Vassili, Vangeli, and Georgia.
						<br /> <br />
						We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!
					</div>
				</LeftRight>
				<br /><br /><br /> <br /><br />
				<Vertical className='text-5xl font-extrabold mb-12 text-primary'>We Have You Covered</Vertical>
				<LeftRight >
					<div className="m-8">
						Whether you're coming in for a routine inspection or a repair service, we promise that you will be completely satisfied with our work. 
						<br /><br />
						We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!
					</div>
					<Image className="m-auto rounded-md"  src={MechanicPhoto2} width={450} alt="mechanic photo" />
				</LeftRight>
				<br /><br /><br /> <br /><br />
				<Vertical className='text-5xl font-extrabold mb-12 text-primary'>Our Quality Promise</Vertical>
				<LeftRight>
					<Image className="m-auto rounded-md w-full h-full"  src={MechanicPhoto1} width={350} alt="mechanic photo" />
					<div className="mt-8">
						We're committed to providing a stress-free experience to both new and returning customers. Our shop only uses parts from reputable brands to ensure that your vehicle is always ready to drive.
						<br /><br />
					</div>
				</LeftRight>
			</section>
			<hr  className="mt-24"/>
			<section id="services">				
				<Vertical className="text-5xl mt-24 mb-24 font-extrabold text-center text-primary">Our Services</Vertical>
				<div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
					{ServicesGridData.map((service, index: number) => 
						<Service index={index} service={service} key={index} />
					)}
				</div>
				<hr  className="mt-24 mb-32"/>
			</section>
				<Vertical className="text-5xl mt-24 mb-24 font-extrabold text-center text-primary">What others think!</Vertical>
				<div className="grid lg:grid-cols-3 gap-4 mb-24">
					{ReviewsData.map((review, index: number) => 
							<Review
								key={index}
								index={index}
								photo={review.photo}
								name={review.name} 
								starCount={review.starCount} 
								description={review.description} 
								/>
					)}
				</div>
			{/* <section className="text-center">
				<h1 className="text-primary text-5xl mb-12">Book with us Now!</h1>
				<p className="text-primary">Send us a message letting us know what is going on with your vehicle, and we will get back to you soon with a quote. </p>
				<Link href="/book" >
					<Button variant={'default'} className="m-12 mb-24">Book Online</Button>
				</Link>
			</section> */}
			<hr  className="mb-24"/>
			<section id="contact">
				<Vertical>
					<div className="text-primary text-5xl font-bold text-center mb-8">Find us on the map!</div>
					<TextAnim className= "ml-[320px] text-primary">5658 Production Way, V3A 4N4 - Langley BC</TextAnim>
					<div>
						<Link 
							href={"https://www.google.com/maps/place/EVVG+Auto/@49.1049958,-122.6875521,14.75z/data=!4m6!3m5!1s0x5485cf3f5a0861cf:0xe79195f7b09bdb8e!8m2!3d49.1052476!4d-122.6762051!16s%2Fg%2F11m_n7wgrw?entry=ttu"}
							target="_blank"
							className="flex justify-center mt-8"
							>
							<Button variant={'special'}>
								Open Map
							</Button>
						</Link>			
					</div>
				</Vertical>
			</section>
			<br /><br /><br />
			<section className="text-center">
				<Card className="w-[400px] m-auto">
					<CardHeader>
						<CardTitle className='text-5xl font-extrabold text-primary'>Contact</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col gap-6">
						<a className="text-primary" href="mailto:evvgauto@gmail.com">evvgauto@gmail.com</a>
						<a className="text-primary" href={`tel:6045130152`}>(604) 514 - 0152</a>
						
						<CardTitle className="text-primary">Hours</CardTitle>
						<p className="text-primary">Monday - Friday: 8am - 6pm</p>
						<p className="text-primary">Saturday: 10am - 5pm</p>
						<p className="text-primary">Sunday: Closed</p>
					</CardContent>
				</Card>
			</section>
			<footer className="text-primary mt-48 text-center">
				<p>Copyright © 2023 EVVG Automotive - All Rights Reserved.</p>
			</footer>
		</div>
	)
}