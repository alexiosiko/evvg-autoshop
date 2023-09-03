import Image from "next/image";
import Dot from "@/assets/icons/dot-circle.png";

export default function AppointmentTime() {
	// const data = getAppointments();
	return (
		<section className="grid outline outline-gray-200 outline-1 p-8 rounded-xl text-center gap-y-12 grid-cols-4 items-center justify-center">
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>9:00 AM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>10:00 AM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>11:00 AM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>12:00 PM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>1:00 PM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>2:00 PM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
				<div className="hover:bg-gray-200 p-4 rounded-lg">
					<p>3:00 PM</p>
					<Image src={Dot} width={7} height={7} alt="dot" />
				</div>
			</section>
	)
}