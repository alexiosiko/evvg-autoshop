import Image from "next/image";
import LeftRight from "../leftright";
import { stats } from "@/data/stats";
import SubHeader from "../subheader";
import Header from "../header";
import Wallpaper from "../wallpaper";
import wallpaperSVG from "@/images/wallpaper1.jpg";

export default function Stats() {
	return (
		<div style={{
			// backgroundImage: `url(${wallpaperSVG.src})`,
		}} className="bg-[var(--foregound)] bg-cover p-12 absolute w-full left-0">
			<div className="max-w-7xl m-auto">
				{/* <LeftRight className="h-[100px]">
					<div>
						<SubHeader>Sucessesesse</SubHeader>
						<Header className="text-[var(--text-accent)]">Our Success</Header>
					</div> */}
					{/* <Image 
					className="relative bottom-36 scale-130"
				src={IMG} alt="image" height={500} width={1000}/> */}
				{/* </LeftRight> */}
				<br />
				<div className="flex justify-around">
					{stats.map((stat, index) => 
						<div key={index} className="w-[250px] flex gap-4 justify-center">
							<Image className="object-contain -translate-y-4" src={stat.img} alt="icon" width={50} height={50} />
							<div>
								<p className="text-5xl text-[var(--acent)] mb-2">{stat.header}</p>
								<p className="text-[var(--text-acent)]">{stat.description}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}