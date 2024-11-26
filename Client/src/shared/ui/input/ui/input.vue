<script lang="ts" setup>
	import { defineProps } from "vue";

	defineProps<{
		modelValue: number | string;
		type: "number";
		labelFor?: string;
		labelText?: string;
		id: string;
		name: string;
		placeholder?: string;
	}>();

	const emit = defineEmits(["update:modelValue"]);
</script>

<template>
	<div v-if="type === 'number'" class="input-field">
		<label v-if="labelFor && labelText" :for="labelFor" class="input-label">{{
			labelText
		}}</label>
		<input
			:id="id"
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
