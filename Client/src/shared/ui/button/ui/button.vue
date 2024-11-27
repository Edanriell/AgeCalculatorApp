<script lang="ts" setup>
	import { Icon } from "@shared/ui/icon/ui";

	type ButtonProps = {
		buttonType: "button" | "submit" | "reset";
	};

	const { buttonType } = defineProps<ButtonProps>();
</script>

<template>
	<button
		:type="buttonType"
		aria-label="Calculate your age"
		class="button button--shape-type--circle"
	>
		<Icon size="large" type="arrow" />
		<span class="visually-hidden">Calculate age</span>
	</button>
</template>

<style scoped>
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
</style>
