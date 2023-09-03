import { Form } from '@/components/ui/form'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'


export default function AppountmentInfo() {
	const handleSubmit = (data: any) => {
		data.preventDefault();
		console.log(data.target.firstname.value);
		console.log(data.target.lastname.value);
		console.log(data.target.email.value);
		console.log(data.target.phone.value);
	}
	return (
		<form onSubmit={handleSubmit}>
			<p className='text-4pxl -ml-2'>Contact Information</p>
			<div className='grid grid-cols-2 grid-rows-2 gap-4'>
				<div>
					<Label>First Name</Label>
					<Input name='firstname'/>
				</div>
				<div>
					<Label>Last Name</Label>
					<Input name='lastname'/>
				</div>
				<div>
					<Label>Email</Label>
					<Input name='email'/>
				</div>
				<div>
					<Label>Phone</Label>
					<Input name='phone' />
				</div>
			</div>
			<Button className='mt-4'>Submit</Button>
		</form>
	)
}