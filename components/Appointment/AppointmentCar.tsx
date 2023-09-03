import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormDataProps } from "./Appointment";

export default function AppointmentCar({ formData, setFormData }: FormDataProps) {
	function handleSubmit(e: any) {
		e.preventDefault();

		const newFormData = {
			vehicletype: e.target.vehicletype.value,
			year: e.target.year.value,
			brand: e.target.brand.value,
			model: e.target.model.value,
		}

		setFormData({
			...formData,
			...newFormData
		});
	}
	return (
		<form onSubmit={handleSubmit}>
			<p className='text-3xl mb-8 mt-8'>Car</p>
			<div className='grid grid-cols-2 grid-rows-2 gap-4'>
				<div>
					<Label>Vehicle Type</Label>
					<Input name="vehicletype" required={true} />
				</div>
				<div>
					<Label>Year</Label>
					<Input name="year"  maxLength={4} required={true} />
				</div>
				<div>
					<Label>Brand</Label>
					<Input name="brand" required={true} />
				</div>
				<div>
					<Label>Model</Label>
					<Input name="model" required={true} />
				</div>
			</div>
				<Button className="mt-4">Update</Button>
		</form>
	)
}