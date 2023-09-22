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

export default function Page() {
	return (
		<div>
			<hr className="mt-12 mb-24"/>
			<section className="text-center mb-6 m-auto text-xl leading-8 text-primary">
				<h1 className='text-5xl font-extrabold mb-12 text-primary'>EVVG's story</h1>
				<div className="grid grid-cols-2 items-center">
					<Image className="m-auto mt-0 rounded-md" src={MechanicPhoto3} width={300} alt="mechanic photo" />
					<div>
						EVVG Auto Services is a family owned business that has been operating for over 20 years. When George, the owner, was starting the business he thought of various names for the shop. He eventually decided on the name EVVG, which was inspired by the names of his four children: Elleni, Vassili, Vangeli, and Georgia.
						<br /> <br />
						We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!
					</div>
				</div>
				<br /><br /><br /> <br /><br />
				<h1 className='text-5xl font-extrabold mb-12 text-primary'>We Have You Covered</h1>
				<div className="grid grid-cols-2">
					<div className="m-8">
						Whether you're coming in for a routine inspection or a repair service, we promise that you will be completely satisfied with our work. 
						<br /><br />
						We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!
					</div>
					<Image className="m-auto rounded-md"  src={MechanicPhoto2} width={450} alt="mechanic photo" />
				</div>
				<br /><br /><br /> <br /><br />
				<h1 className='text-5xl font-extrabold mb-12 text-primary'>Our Quality Promise</h1>
				<div className="grid grid-cols-2">
					<Image className="m-auto rounded-md"  src={MechanicPhoto1} width={350} alt="mechanic photo" />
					<div className="mt-8">
						We're committed to providing a stress-free experience to both new and returning customers. Our shop only uses parts from reputable brands to ensure that your vehicle is always ready to drive.
						<br /><br />
					</div>
				</div>
			</section>
			<hr  className="mt-24"/>
			<section>				
				<h1 className="text-5xl mt-24 mb-24 font-extrabold text-center text-primary">Our Services</h1>
				<div className="grid grid-cols-4 gap-6">
					{ServicesGridData.map((service, index: number) => 
						<div className="h-52 text-center p-4 rounded-md outline outline-1 outline-primary bg-card" key={index}>
							<Image className="m-auto mt-6 mb-4" width={50} height={50} src={service.img} alt="any" />
							<h2 className="text-2xl pb-4 text-card-goreground font-extrabold ">{service.title}</h2>
							<p className="description text-secondary-foreground text-xs max-w-md m-auto max-h-16 h-full">
								{service.description}
							</p>
						</div>
					)}
				</div>
				<hr  className="mt-24 mb-32"/>
			</section>
			<div className="grid grid-cols-3 gap-4 mb-24">
				{ReviewsData.map((review) => 
					<Review
						photo={review.photo}
						name={review.name} 
						starCount={review.starCount} 
						description={review.description} 
						/>
				)}
			</div>
			<section className="text-center">
				<h1 className="text-primary text-5xl mb-12">Book with us Now!</h1>
				<p className="text-primary">Send us a message letting us know what is going on with your vehicle, and we will get back to you soon with a quote. </p>
				<Link href="/book" >
					<Button variant={'default'} className="m-12 mb-24">Book Online</Button>
				</Link>
			</section>
			<hr  className="mb-24"/>
			<section>
				<h1 className="text-primary text-5xl font-bold text-center mb-8">Find us on the map!</h1>
				<p className="text-center text-primary mb-8">5658 Production Way, V3A 4N4 - Langley BC</p>
				<Link 
					href={"https://www.google.com/maps/place/EVVG+Auto/@49.1049958,-122.6875521,14.75z/data=!4m6!3m5!1s0x5485cf3f5a0861cf:0xe79195f7b09bdb8e!8m2!3d49.1052476!4d-122.6762051!16s%2Fg%2F11m_n7wgrw?entry=ttu"}
					target="_blank"
					className="flex justify-center"
					>
					<Button variant={'special'}>
						Open Map
					</Button>
				</Link>			
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