import { stats } from "@/data/stats";
import Stat from "../stat";

export default function Stats() {
	return (
		<div style={{
		}} className="bg-[var(--foregound)] bg-cover p-12 absolute w-full left-0">
			<div className="max-w-7xl m-auto">
				<div className="flex justify-around">
					{stats.map((stat, index) => 
						<Stat key={index} stat={stat} />
					)}
				</div>
			</div>
		</div>
	)
}