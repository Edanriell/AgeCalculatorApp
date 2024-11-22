<script lang="ts" setup>
	import { MainLayout } from "@widgets/layouts/main/ui";
</script>

<template>
	<MainLayout>
		<h1>Home Page</h1>
		<section class="home-page"></section>
	</MainLayout>
</template>

<style scoped>
	.home-page {
		@media (width >= 768px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
