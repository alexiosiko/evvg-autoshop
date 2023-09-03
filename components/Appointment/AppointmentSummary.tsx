import { myFormType } from "./Appointment";

interface AppointmentSummaryProps {
	formData: myFormType;
 }
 
 export default function AppointmentSummary({formData} : AppointmentSummaryProps) {
	return (
		<div className="shadow-lg rounded-xl w-1/3 p-4">
			<h1 className="text-2xl font-bold">Summary</h1>
			<hr className="mt-2 mb-2" />
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Info</h1>
				<p className="text-xs mr-2">{formData.firstname}</p>
				<p className="text-xs mr-2">{formData.lastname}</p>
				<p className="text-xs mr-2">{formData.email}</p>
				<p className="text-xs mr-2">{formData.phone}</p>
			</section>
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Services</h1>
					<div className="mt-2">
					{formData.services.map((service, index) => 
							<p key={index} className="text-xs mr-2">{service}</p>
					)}
					</div>
			</section>
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Car</h1>
				<p className="text-xs mr-2">{formData.vehicletype}</p>
				<p className="text-xs mr-2">{formData.year}</p>
				<p className="text-xs mr-2">{formData.brand}</p>
				<p className="text-xs mr-2">{formData.model}</p>
			</section>
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Date</h1>
				<p className="text-xs mr-2">{formData.date.toString()}</p>
			</section>
		</div>
	)
}