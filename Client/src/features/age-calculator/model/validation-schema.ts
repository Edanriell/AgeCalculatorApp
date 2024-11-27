import { z } from "zod";

const calculateMaxYear = (): number => new Date().getFullYear();

const calculateMinYear = (year: number): number => new Date().getFullYear() - year;

export const birthdateFormValidationSchema = z.object({
	day: z
		.number({ invalid_type_error: "This field is required" })
		.min(1, "Must be a valid day")
		.max(31, "Must be a valid day"),
	month: z
		.number({ invalid_type_error: "This field is required" })
		.min(1, "Must be a valid month")
		.max(12, "Must be a valid month"),
	year: z
		.number({ invalid_type_error: "This field is required" })
		.min(calculateMinYear(122), `Year must be no earlier than ${calculateMinYear(122)}`)
		.max(calculateMaxYear(), "Must be in the past")
});
