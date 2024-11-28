import { z } from "zod";

const calculateMaxYear = (): number => new Date().getFullYear();

const calculateMinYear = (year: number): number => new Date().getFullYear() - year;

const isLeapYear = (year: number): boolean =>
	(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const getDaysInMonth = (month: number, year: number): number => {
	const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return daysInMonth[month - 1];
};

export const birthdateFormValidationSchema = z
	.object({
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
	})
	.refine(
		(data) => data.day <= getDaysInMonth(data.month, data.year),
		() => ({
			message: `Must be a valid day`,
			path: ["day"]
		})
	);
