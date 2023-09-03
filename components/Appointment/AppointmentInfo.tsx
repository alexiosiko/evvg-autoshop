import { Form } from '@/components/ui/form'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FormDataProps, myFormType } from './Appointment'



export default function AppountmentInfo({ setFormData, formData }: FormDataProps) {
	const handleSubmit = (e: any) => {
		e.preventDefault();

		const newFormData = {
			firstname: e.target.firstname.value,
			lastname: e.target.lastname.value,
			email: e.target.email.value,
			phone: e.target.phone.value,
		}

		setFormData({
			...formData,
			...newFormData
		});

	}
	return (
		<div onSubmit={handleSubmit}>
			<p className='text-3xl mb-8 mt-8'>Contact Information</p>
			<div className='grid grid-cols-2 grid-rows-2 gap-4'>
				<div>
					<Label>First Name</Label>
					<Input required={true} name='firstname'/>
				</div>
				<div>
					<Label>Last Name</Label>
					<Input required={true} name='lastname'/>
				</div>
				<div>
					<Label>Email</Label>
					<Input required={true} name='email'/>
				</div>
				<div>
					<Label>Phone</Label>
					<Input required={true} name='phone' />
				</div>
			</div>
			<Button className='mt-4'>Update</Button>
		</div>
	)
}