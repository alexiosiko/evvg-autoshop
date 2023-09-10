import { Label } from "@/components/pending-appointments/ui/label";
import { Input } from "@/components/pending-appointments/ui/input";
import { FormDataProps } from "@/contants/types/AppointmentTypes";

export default function AppointmentCar({ formData, setFormData }: FormDataProps) {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<form>
			<p className='text-4xl font-bold mb-8 mt-8'>Car</p>
			<div className='grid grid-cols-2 grid-rows-2 gap-4'>
			<div>
				<Label>Vehicle Type</Label>
				<Input
					name="vehicletype"
					required={true}
					value={formData.vehicletype}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<Label>Year</Label>
				<Input
					name="year"
					maxLength={4}
					required={true}
					value={formData.year}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<Label>Brand</Label>
				<Input
					name="brand"
					required={true}
					value={formData.brand}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<Label>Model</Label>
				<Input
					name="model"
					required={true}
					value={formData.model}
					onChange={handleInputChange}
				/>
			</div>
			</div>
		</form>
	);
}
