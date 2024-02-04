import Wallpaper from "./wallpaper";
import IMG from "@/images/wallpaper1.jpg"

export default function Map() {
	return (
		<iframe className=" left-0  m-auto rounded-lg sm:h-[500px] sm:w-[500px]
		max-sm:w-full aspect-square"
		loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz2EIWj_PhVQRjtubsPeVkec&key=AIzaSyBf_mYymOcQTwDZhq_KqIu77lxMOZBPB3M" />
	)
}