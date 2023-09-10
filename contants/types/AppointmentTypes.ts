export type myFormType = {
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: string[],
	vehicletype: string,
	details: string,
	year: string,
	brand: string,
	model: string,
	date: Date | null,
	time: string,
	id: string
}
export type FormDataProps = {
	setFormData: (newFormData: myFormType) => void,
	formData: myFormType,
}
