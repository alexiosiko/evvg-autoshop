import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Star from "@/assets/reviews/star.png"
import { ScrollArea } from "./ui/scroll-area"
import TextAnim from "./text-test"
import { motion, useAnimate } from 'framer-motion';

type ReviewType = {
	photo:			string,
	name: 			string,
	starCount: 		number,
	description: 	string,
	index: 			number,
}

export default function Review({photo, name, starCount, description, index}: ReviewType) {
	const [scope, animate] = useAnimate();
	return (
		<motion.div
			initial={{ y: 100, opacity: 0}}
			ref={scope}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100}, { delay: index / 7})}
		>

			<Card className="h-72">
				<CardHeader>
					<div className="flex gap-4 mb-[-12px]">
						<Image src={photo} alt="player-image" width={28} height={28} />
						<CardTitle className="text-lg">{name}</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex mb-4"> 
						{
							starCount == 0 
							? <></>
							: starCount == 1 
							? <><Image src={Star} width={25} height={25} alt="star"/></> 
							: starCount == 2 
							? <><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/></> 
							: starCount == 3
							? <><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/></> 
							: starCount == 4
							? <><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/></> 
							: <><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/><Image src={Star} width={25} height={25} alt="star"/></> 
						}
					</div>
					<ScrollArea className="h-40">{description}</ScrollArea>
				</CardContent>
			</Card>
		</motion.div>
	)
}