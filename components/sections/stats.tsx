import Image from "next/image";
import { stats } from "@/data/stats";

export default function Stats() {
	return (
		<div style={{
			// backgroundImage: `url(${wallpaperSVG.src})`,
		}} className="bg-[var(--foregound)] bg-cover p-12 absolute w-full left-0">
			<div className="max-w-7xl m-auto">
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