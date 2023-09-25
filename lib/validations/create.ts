import * as z from 'zod';

export const CreateValidation = z.object({
	firstname: z.string(),
	lastname: z.string(),
	date: z.date(),
	email: z.string(),
	phone: z.string(),
	make: z.string(),
	model: z.string(),
	year: z.string(),
	vin: z.string(),

})
