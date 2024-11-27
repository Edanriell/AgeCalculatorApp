<script lang="ts" setup>
	import { onMounted, onUnmounted, reactive, ref } from "vue";
	import { useField, useForm } from "vee-validate";
	import { toTypedSchema } from "@vee-validate/zod";
	import { animate } from "motion";

	import { Input } from "@shared/ui/input/ui";
	import { Icon } from "@shared/ui/icon/ui";

	import { birthdateFormValidationSchema } from "../model";

	const age = reactive({ years: null, months: null, days: null });

	const buttonIconSize = ref<"small" | "large">("small");

	const updateButtonIconSize = () => {
		buttonIconSize.value = window.matchMedia("(min-width: 1440px)").matches ? "large" : "small";
	};

	const calculateAge = () => {
		if (day.value && month.value && year.value) {
			const today = new Date();
			// Month is 0-indexed, that's why we subtract 1 from it.
			const birthDate = new Date(year.value, month.value - 1, day.value);

			let ageYears = today.getFullYear() - birthDate.getFullYear();
			let ageMonths = today.getMonth() - birthDate.getMonth();
			let ageDays = today.getDate() - birthDate.getDate();

			// Adjust for negative days
			if (ageDays < 0) {
				ageMonths -= 1;
				// Previous month's last day
				const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
				ageDays += prevMonth.getDate();
			}

			// Adjust for negative months
			if (ageMonths < 0) {
				ageYears -= 1;
				ageMonths += 12;
			}

			age.years = ageYears;
			age.months = ageMonths;
			age.days = ageDays;
		}
	};

	const { handleSubmit } = useForm({
		validationSchema: toTypedSchema(birthdateFormValidationSchema),
		initialValues: {
			day: null,
			month: null,
			year: null
		}
	});

	const { value: day, errorMessage: dayError } = useField("day");
	const { value: month, errorMessage: monthError } = useField("month");
	const { value: year, errorMessage: yearError } = useField("year");

	const onBirthdateFormSubmit = handleSubmit(() => {
		calculateAge();
	});

	onMounted(() => {
		window.addEventListener("resize", updateButtonIconSize);
		updateButtonIconSize();
	});

	onUnmounted(() => {
		window.removeEventListener("resize", updateButtonIconSize);
	});
</script>

<template>
	<article class="age-calculator">
		<form
			class="age-calculator__birthdate-form birthdate-form"
			@submit.prevent="onBirthdateFormSubmit"
		>
			<h2 class="visually-hidden">Age Calculator</h2>
			<fieldset class="birthdate-form__fieldset">
				<legend class="birthdate-form__legend">Enter your birthdate</legend>
				<div class="birthdate-form__input-group">
					<div
						class="birthdate-form__input-field-wrapper birthdate-form__input-field-wrapper--type--column"
					>
						<Input
							id="day"
							:isInputValid="!dayError"
							:modelValue="day"
							labelFor="day"
							labelText="Day"
							name="day"
							placeholder="DD"
							type="number"
							@update:modelValue="($event) => (day = $event)"
						/>
						<Transition
							:css="false"
							@enter="
								(element, done) =>
									animate(
										element,
										{ opacity: [0, 1], y: [-5, 0] },
										{ duration: 0.2 }
									).then(() => done())
							"
							@leave="
								(element, done) =>
									animate(element, { opacity: 0, y: -5 }, { duration: 0.2 }).then(
										() => done()
									)
							"
						>
							<p v-if="dayError" class="birthdate-form__input-error-message">
								{{ dayError }}
							</p>
						</Transition>
					</div>
					<div
						class="birthdate-form__input-field-wrapper birthdate-form__input-field-wrapper--type--column"
					>
						<Input
							id="month"
							:isInputValid="!monthError"
							:modelValue="month"
							labelFor="month"
							labelText="Month"
							name="month"
							placeholder="MM"
							type="number"
							@update:modelValue="($event) => (month = $event)"
						/>
						<Transition
							:css="false"
							@enter="
								(element, done) =>
									animate(
										element,
										{ opacity: [0, 1], y: [-5, 0] },
										{ duration: 0.2 }
									).then(() => done())
							"
							@leave="
								(element, done) =>
									animate(element, { opacity: 0, y: -5 }, { duration: 0.2 }).then(
										() => done()
									)
							"
						>
							<p v-if="monthError" class="birthdate-form__input-error-message">
								{{ monthError }}
							</p>
						</Transition>
					</div>
					<div
						class="birthdate-form__input-field-wrapper birthdate-form__input-field-wrapper--type--column"
					>
						<Input
							id="year"
							:isInputValid="!yearError"
							:modelValue="year"
							labelFor="year"
							labelText="Year"
							name="year"
							placeholder="YYYY"
							type="number"
							@update:modelValue="($event) => (year = $event)"
						/>
						<Transition
							:css="false"
							@enter="
								(element, done) =>
									animate(
										element,
										{ opacity: [0, 1], y: [-5, 0] },
										{ duration: 0.2 }
									).then(() => done())
							"
							@leave="
								(element, done) =>
									animate(element, { opacity: 0, y: -5 }, { duration: 0.2 }).then(
										() => done()
									)
							"
						>
							<p v-if="yearError" class="birthdate-form__input-error-message">
								{{ yearError }}
							</p>
						</Transition>
					</div>
				</div>
			</fieldset>
			<fieldset class="birthdate-form__fieldset">
				<legend class="birthdate-form__legend">Calculate your age</legend>
				<div class="birthdate-form__button-wrapper">
					<button
						aria-label="Calculate your age"
						class="button button--shape-type--circle"
						type="submit"
					>
						<Icon :size="buttonIconSize" type="arrow" />
						<span class="visually-hidden">Calculate age</span>
					</button>
					<div class="birthdate-form__decorative-line"></div>
				</div>
			</fieldset>
		</form>
		<div class="age-calculator__results">
			<p class="age-calculator__result-text">
				<strong>
					<output name="years">{{ age.years ?? "- -" }}</output>
				</strong>
				<span>years</span>
			</p>
			<p class="age-calculator__result-text">
				<strong>
					<output name="months">{{ age.months ?? "- -" }}</output>
				</strong>
				<span>months</span>
			</p>
			<p class="age-calculator__result-text">
				<strong>
					<output name="days">{{ age.days ?? "- -" }}</output>
				</strong>
				<span>days</span>
			</p>
		</div>
	</article>
</template>

<style scoped>
	.age-calculator {
		border-radius: 24rem 24rem 100rem 24rem;
		padding: 48rem 24rem;
		background: var(--white);
		display: flex;
		flex-direction: column;
		row-gap: 32rem;
		margin: 88rem 16rem 238rem 16rem;

		@media (width >= 768px) {
			margin: 88rem 132rem 238rem 132rem;
		}

		@media (width >= 1440px) {
			width: 100%;
			border-radius: 24rem 24rem 200rem 24rem;
			padding: 56rem;
			max-width: 840rem;
			row-gap: unset;
			margin: unset;
		}
	}

	.age-calculator__birthdate-form {
		position: relative;
	}

	.birthdate-form {
		display: flex;
		flex-direction: column;
		row-gap: 32rem;

		@media (width >= 1440px) {
			row-gap: unset;
		}
	}

	.birthdate-form__fieldset {
		border: none;
		margin: unset;
		padding: unset;
	}

	.birthdate-form__legend {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(100%);
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	.birthdate-form__input-group {
		display: flex;
		flex-direction: row;
		column-gap: 16rem;

		@media (width >= 1440px) {
			column-gap: 32rem;
		}
	}

	.birthdate-form__input-field-wrapper {
		display: flex;
	}

	.birthdate-form__input-field-wrapper--type--column {
		flex-direction: column;
		row-gap: 4rem;

		@media (width >= 1440px) {
			row-gap: 8rem;
		}
	}

	.birthdate-form__button-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (width >= 1440px) {
			justify-content: flex-end;
		}
	}

	.button {
		padding: 20rem;
		background: var(--purple);
		border-radius: 216rem;
		cursor: pointer;
		position: relative;
		z-index: 2;

		@media (width >= 1440px) {
			padding: 26rem;
		}
	}

	.button--shape-type--circle {
		max-width: 64rem;
		max-height: 64rem;

		@media (width >= 1440px) {
			max-width: 96rem;
			max-height: 96rem;
		}
	}

	.birthdate-form__decorative-line {
		width: 100%;
		height: 1rem;
		background: var(--line);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(50%);
	}

	.birthdate-form__input-error-message {
		font-family: var(--font-family), sans-serif;
		font-style: italic;
		font-weight: 400;
		font-size: 12rem;
		color: var(--red);

		@media (width >= 1440px) {
			font-size: 14rem;
		}
	}

	.age-calculator__results {
		display: flex;
		flex-direction: column;
	}

	.age-calculator__result-text {
		font-family: var(--font-family), sans-serif;
		font-style: italic;
		font-weight: 800;
		font-size: 56rem;
		line-height: 110%;
		letter-spacing: -0.02em;
		color: var(--black);

		@media (width >= 1440px) {
			font-size: 104rem;
		}

		> strong {
			font-family: var(--font-family), sans-serif;
			font-style: italic;
			font-weight: 800;
			font-size: 56rem;
			line-height: 110%;
			letter-spacing: -0.02em;
			color: var(--purple);

			@media (width >= 1440px) {
				font-size: 104rem;
			}
		}

		> span {
			margin-left: 8rem;
		}
	}
</style>
