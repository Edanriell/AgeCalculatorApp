<script lang="ts" setup>
	import { AgeCalculator } from "@features/age-calculator/ui";
	import { MainLayout } from "@widgets/layouts/main/ui";
</script>

<template>
	<MainLayout>
		<h1 class="visually-hidden">Home Page</h1>
		<section class="home-page">
			<AgeCalculator />
		</section>
	</MainLayout>
</template>

<style scoped>
	.home-page {
		@media (width >= 1440px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			min-height: 100vh;
		}
	}
</style>
