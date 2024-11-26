<script lang="ts" setup>
	import { defineProps, ref, watch } from "vue";
	import { animate } from "motion";

	type InputProps = {
		modelValue: number | string | null;
		type: "number";
		labelFor?: string;
		labelText?: string;
		id: string;
		name: string;
		placeholder?: string;
		isInputValid?: boolean;
	};

	const { modelValue, type, labelFor, labelText, id, name, placeholder, isInputValid } =
		defineProps<InputProps>();

	const emit = defineEmits(["update:modelValue"]);

	const labelElement = ref<HTMLLabelElement | null>(null);
	const inputElement = ref<HTMLInputElement | null>(null);

	watch(
		() => isInputValid,
		(value) => {
			if (value) {
				animate(labelElement.value, { color: "#716f6f" }, { duration: 0.2 });
				animate(inputElement.value, { borderColor: "#dcdcdc" }, { duration: 0.2 });
			} else {
				animate(labelElement.value, { color: "#ff5959" }, { duration: 0.2 });
				animate(inputElement.value, { borderColor: "#ff5959" }, { duration: 0.2 });
			}
		}
	);
</script>

<template>
	<div v-if="type === 'number'" class="input-field">
		<label
			v-if="labelFor && labelText"
			ref="labelElement"
			:for="labelFor"
			class="input-label"
			>{{ labelText }}</label
		>
		<input
			v-if="type === 'number'"
			:id="id"
			ref="inputElement"
			:name="name"
			:placeholder="placeholder"
			:value="modelValue"
			class="input input--type--number"
			type="number"
			@input="emit('update:modelValue', +$event.target.value)"
		/>
	</div>
</template>

<style scoped>
	.input-field {
		display: flex;
		flex-direction: column;
		row-gap: 4rem;

		@media (width >= 1440px) {
			row-gap: 8rem;
		}
	}

	.input-label {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 12rem;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		color: var(--grey);

		@media (width >= 1440px) {
			font-size: 14rem;
		}
	}

	.input {
		border: 1rem solid var(--line);
		border-radius: 8rem;
		padding: 12rem 16rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 20rem;
		letter-spacing: 0.01em;
		color: var(--black);

		@media (width >= 1440px) {
			padding: 12rem 24rem;
			font-size: 32rem;
		}

		&::placeholder {
			font-family: var(--font-family), sans-serif;
			font-weight: 700;
			font-size: 20rem;
			letter-spacing: 0.01em;
			color: var(--black);
			opacity: 0.5;

			@media (width >= 1440px) {
				font-size: 32rem;
			}
		}
	}

	.input--type--number {
		width: 100%;
		-moz-appearance: textfield;

		@media (width >= 1440px) {
			max-width: 160rem;
		}

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}
</style>
