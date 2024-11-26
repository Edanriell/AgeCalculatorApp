<script lang="ts" setup>
	defineProps<{
		type?: "arrow";
		size?: "small" | "large";
	}>();
</script>

<template>
	<svg
		v-if="type === 'arrow' && size === 'small'"
		fill="none"
		height="24"
		shape-rendering="geometricPrecision"
		viewBox="0 0 25 24"
		width="25"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M0.5 12.0103C4.5 11.8287 12.5 13.9723 12.5 24" stroke="white" stroke-width="2" />
		<path d="M12.5 24V0" stroke="white" stroke-width="2" />
		<path d="M24.5 12.0103C20.5 11.8287 12.5 13.9723 12.5 24" stroke="white" stroke-width="2" />
	</svg>
	<svg
		v-else-if="type === 'arrow' && size === 'large'"
		fill="none"
		height="44"
		shape-rendering="geometricPrecision"
		viewBox="0 0 46 44"
		width="46"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M1 22.0189C8.33333 21.6859 23 25.6158 23 44" stroke="white" stroke-width="2" />
		<path d="M23 44V0" stroke="white" stroke-width="2" />
		<path d="M45 22.0189C37.6667 21.6859 23 25.6158 23 44" stroke="white" stroke-width="2" />
	</svg>
</template>

<style scoped></style>
