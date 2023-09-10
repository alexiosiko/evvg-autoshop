import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ServicesGridData } from "@/contants/ServicesGridData";

export default function Page() {
	return (
		<div>
			<section className="text-center mt-24 mb-6">
				<h1 className='text-6xl font-extrabold mb-6 gradient-text'>EVVG's story</h1>
				<div className='m-auto text-xl leading-8 text-secondary-foreground'>EVVG Auto Services is a family owned business that has been operating for over 20 years. When George, the owner, was starting the business he thought of various names for the shop. He eventually decided on the name EVVG, which was inspired by the names of his four children: Elleni, Vassili, Vangeli, and Georgia.
				<br /> <br />
				We welcome you all to the shop with open arms. Come say hello, we would love to meet you and welcome you to the EVVG Auto family!</div>
			</section>
			<section>
				<h1 className="text-6xl mt-24 mb-24 font-extrabold text-center gradient-text">Our Services</h1>
				<div className="grid grid-cols-4 gap-6">
					{ServicesGridData.map((service, index: number) => 
						<div className="h-52 text-center shadow-md shadow-slate-800  p-4 rounded-2xl" key={index}>
							<Image className="m-auto mt-6 mb-4" width={50} height={50} src={service.img} alt="any" />
							<h2 className="text-2xl pb-4 font-extrabold gradient-text ">{service.title}</h2>
							<p className="description text-xs max-w-md m-auto max-h-16 h-full">
								{service.description}
							</p>
						</div>
					)}
				</div>
			</section>
			
		</div>
	)
}