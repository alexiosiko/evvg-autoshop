import * as z from 'zod';

export const UserValidation = z.object({
	firstname: z.string()
	.refine(value => value != '', {
		message: "Please enter your first name",
	}),
	lastname: z.string()
	.refine(value => value != '', {
		message: "Please enter your last name"
	}),
	email: z.string()
	.refine(value => value != '', {
		message: "Email is required"
	}),
	phone: z.string()
	.refine(value => value != '', {
		message: "Phone number is required"
	}),
	make: z.string()
	.refine(value => value != '', {
		message: "Make is required"
	}),
	model: z.string()
	.refine(value => value != '', {
		message: "Model is required"
	}),
	year: z.string()
	.refine(value => value != '', {
		message: "Year is required"
	}),
	plate: z.string().optional(),
	urgency: z.enum(["ASAP", "Soon", "No rush"]),
	notes: z.string(),
	details: z.string().
	refine(value => value != '', {
		message: "A brief description about what you are looking for is required"
	})
})
