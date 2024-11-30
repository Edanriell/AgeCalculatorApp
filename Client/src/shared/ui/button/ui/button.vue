<script lang="ts" setup>
	import { ref } from "vue";
	import { animate } from "motion";

	type ButtonProps = {
		buttonType: "button" | "submit" | "reset";
		shape: "circle" | "pill";
	};

	const { buttonType } = defineProps<ButtonProps>();

	const buttonElement = ref<HTMLButtonElement>();

	const handleMouseEnter = () => {
		animate(
			buttonElement.value,
			{ backgroundColor: "#151515", scale: 1.2 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseLeave = () => {
		animate(
			buttonElement.value,
			{ backgroundColor: "#854dff", scale: 1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseDown = () => {
		animate(buttonElement.value, { scale: 0.9 }, { type: "spring", duration: 0.25, bounce: 0 });
	};

	const handleMouseUp = () => {
		animate(buttonElement.value, { scale: 1.2 }, { type: "spring", duration: 0.25, bounce: 0 });
	};

	const handleTouchStart = () => {
		animate(
			buttonElement.value,
			{ backgroundColor: "#151515", scale: 0.9 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleTouchEnd = () => {
		animate(
			buttonElement.value,
			{ backgroundColor: "#854dff", scale: 1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};
</script>

<template>
	<button
		ref="buttonElement"
		:class="{
			button: true,
			'button--shape-type--circle': shape === 'circle',
			'button--shape-type--pill': shape === 'pill'
		}"
		:type="buttonType"
		aria-label="Calculate your age"
		@mousedown="handleMouseDown"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@mouseup="handleMouseUp"
		@touchend="handleTouchStart"
		@touchstart="handleTouchEnd"
	>
		<slot></slot>
	</button>
</template>

<style scoped>
	.button {
		//padding: 20rem;
		background: var(--purple);
		border-radius: 216rem;
		cursor: pointer;
		position: relative;
		z-index: 2;
		overflow: hidden;
		width: 100%;
		height: 64rem;

		@media (width >= 1440px) {
			//padding: 26rem;
			height: 96rem;
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

	.button--shape-type--pill {
		width: unset;
		height: unset;
		padding: 12rem 32rem;

		@media (width >= 1440px) {
			padding: 18rem 48rem;
		}
	}
</style>
