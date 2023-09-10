import { Label } from '../pending-appointments/ui/label'
import { Input } from '../pending-appointments/ui/input'
import { FormDataProps } from '@/contants/types/AppointmentTypes';

export default function AppointmentInfo({ setFormData, formData }: FormDataProps) {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<form>
			<p className='text-4xl font-bold mb-8 mt-8'>Contact Information</p>
			<div className='grid grid-cols-2 grid-rows-2 gap-4'>
			<div>
				<Label>First Name</Label>
				<Input
					required={true}
					name='firstname'
					value={formData.firstname}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<Label>Last Name</Label>
				<Input
					required={true}
					name='lastname'
					value={formData.lastname}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<Label>Email</Label>
				<Input
					required={true}
					type='email'
					name='email'
					value={formData.email}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<Label>Phone</Label>
				<Input
					required={true}
					type='phone'
					name='phone'
					value={formData.phone}
					onChange={handleInputChange}
				/>
			</div>
			</div>
		</form>
	);
}
