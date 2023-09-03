import { myFormData } from "./Appointment";

interface AppointmentSummaryProps {
	formData: myFormData;
 }
 
 export default function AppointmentSummary({formData} : AppointmentSummaryProps) {
	return (
		<div className="shadow-lg rounded-xl w-1/3 p-4">
			<h1 className="text-2xl font-bold">Summary</h1>
			<hr className="mt-2 mb-2" />
			<section>
				<h1 className="font-bold mt-6 mb-2">Info</h1>
				<p className="text-xs mr-2">{formData.firstname},</p>
				<p className="text-xs mr-2">{formData.lastname},</p>
			</section>
			<section>
				<h1 className="font-bold mt-6 mb-2">Services</h1>
					<div className="mt-2">
					{formData.services.map((service, index) => 
							<p key={index} className="text-xs mr-2">{service.header},</p>
					)}
					</div>
			</section>
			<section>
				<h1 className="font-bold mt-6 mb-2">Date</h1>
			</section>
		</div>
	)
}