import Wallpaper from "./wallpaper";
import IMG from "@/images/wallpaper1.jpg"

export default function Map() {
	return (
		<iframe className=" left-0  m-auto rounded-lg"
			height="500"  width={500} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz2EIWj_PhVQRjtubsPeVkec&key=AIzaSyBf_mYymOcQTwDZhq_KqIu77lxMOZBPB3M" />
	)
}