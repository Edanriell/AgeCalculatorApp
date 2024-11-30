<script lang="ts" setup>
	import { ref } from "vue";
	import { animate } from "motion";

	type LinkProps = {
		href: string;
		target?: "_blank" | "_parent" | "_self" | "_top";
	};

	const { href, target = "_self" } = defineProps<LinkProps>();

	const linkElement = ref<HTMLLinkElement>();

	const handleMouseEnter = () => {
		animate(
			linkElement.value,
			{ backgroundColor: "#151515", scale: 1.2 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseLeave = () => {
		animate(
			linkElement.value,
			{ backgroundColor: "#854dff", scale: 1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleMouseDown = () => {
		animate(linkElement.value, { scale: 0.9 }, { type: "spring", duration: 0.25, bounce: 0 });
	};

	const handleMouseUp = () => {
		animate(linkElement.value, { scale: 1.2 }, { type: "spring", duration: 0.25, bounce: 0 });
	};

	const handleTouchStart = () => {
		animate(
			linkElement.value,
			{ backgroundColor: "#151515", scale: 0.9 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};

	const handleTouchEnd = () => {
		animate(
			linkElement.value,
			{ backgroundColor: "#854dff", scale: 1 },
			{ type: "spring", duration: 0.25, bounce: 0 }
		);
	};
</script>

<template>
	<a
		ref="linkElement"
		:href="href"
		:target="target"
		class="link link--shape-type--pill"
		@mousedown="handleMouseDown"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@mouseup="handleMouseUp"
		@touchend="handleTouchStart"
		@touchstart="handleTouchEnd"
	>
		<slot></slot>
	</a>
</template>

<style scoped>
	.link {
		background: var(--purple);
		border-radius: 216rem;
		cursor: pointer;
		position: relative;
		z-index: 2;
		overflow: hidden;
		width: 100%;
		height: 64rem;

		@media (width >= 1440px) {
			height: 96rem;
		}
	}

	.link--shape-type--pill {
		width: unset;
		height: unset;
		padding: 12rem 32rem;

		@media (width >= 1440px) {
			padding: 18rem 48rem;
		}
	}
</style>
