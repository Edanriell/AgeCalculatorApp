<script lang="ts" setup></script>

<template>
	<article class="age-calculator">
		<form class="age-calculator__form">
			<h2 class="visually-hidden">Age Calculator</h2>
			<fieldset class="age-calculator__fieldset">
				<legend class="age-calculator__legend">Enter your birthdate</legend>
				<div class="age-calculator__input-group">
					<div class="age-calculator__input-field">
						<label class="age-calculator__input-label" for="day">Day</label>
						<input
							id="day"
							class="age-calculator__input--type--number"
							name="day"
							placeholder="DD"
							type="number"
						/>
					</div>
					<div class="age-calculator__input-field">
						<label class="age-calculator__input-label" for="month">Month</label>
						<input
							id="month"
							class="age-calculator__input--type--number"
							name="month"
							placeholder="MM"
							type="number"
						/>
					</div>
					<div class="age-calculator__input-field">
						<label class="age-calculator__input-label" for="year">Year</label>
						<input
							id="year"
							class="age-calculator__input--type--number"
							name="year"
							placeholder="YYYY"
							type="number"
						/>
					</div>
				</div>
			</fieldset>
			<fieldset class="age-calculator__fieldset">
				<legend class="age-calculator__legend">Calculate your age</legend>
				<div class="button__wrapper">
					<button aria-label="Calculate your age" class="button" type="button">
						<svg
							fill="none"
							height="24"
							shapeRendering="geometricPrecision"
							viewBox="0 0 25 24"
							width="25"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.5 12.0103C4.5 11.8287 12.5 13.9723 12.5 24"
								stroke="white"
								stroke-width="2"
							/>
							<path d="M12.5 24V0" stroke="white" stroke-width="2" />
							<path
								d="M24.5 12.0103C20.5 11.8287 12.5 13.9723 12.5 24"
								stroke="white"
								stroke-width="2"
							/>
						</svg>
						<span class="visually-hidden">Calculate age</span>
					</button>
					<div class="line"></div>
				</div>
			</fieldset>
		</form>
		<div class="age-calculator__results">
			<p class="age-calculator__results-text">
				<strong>
					<output name="years">38</output>
				</strong>
				years
			</p>
			<p class="age-calculator__results-text">
				<strong>
					<output name="months">3</output>
				</strong>
				months
			</p>
			<p class="age-calculator__results-text">
				<strong>
					<output name="days">26</output>
				</strong>
				days
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
	}

	.age-calculator__form {
		position: relative;
		display: flex;
		flex-direction: column;
		row-gap: 32rem;
	}

	.age-calculator__fieldset {
		border: none;
		margin: unset;
		padding: unset;
	}

	.age-calculator__legend {
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

	.age-calculator__input-group {
		display: flex;
		flex-direction: row;
		column-gap: 16rem;
	}

	.age-calculator__input-field {
		display: flex;
		flex-direction: column;
		row-gap: 4rem;
	}

	.age-calculator__input-label {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 12rem;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		color: var(--grey);
	}

	.age-calculator__input--type--number {
		border: 1rem solid var(--line);
		border-radius: 8rem;
		padding: 12rem 16rem;
		width: 100%;
		max-width: 87rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 20rem;
		letter-spacing: 0.01em;
		color: var(--black);
		-moz-appearance: textfield;

		&::placeholder {
			font-family: var(--font-family), sans-serif;
			font-weight: 700;
			font-size: 20rem;
			letter-spacing: 0.01em;
			color: var(--black);
			opacity: 0.5;
		}

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}

	.button__wrapper {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button {
		padding: 20rem;
		background: var(--purple);
		border-radius: 216rem;
		cursor: pointer;
		position: relative;
		z-index: 2;
	}

	.line {
		width: 100%;
		height: 1rem;
		background: var(--line);
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(50%);
	}

	.age-calculator__results {
		display: flex;
		flex-direction: column;
	}

	.age-calculator__results-text {
		font-family: var(--font-family), sans-serif;
		font-style: italic;
		font-weight: 800;
		font-size: 56rem;
		line-height: 110%;
		letter-spacing: -0.02em;
		color: var(--black);

		> strong {
			font-family: var(--font-family), sans-serif;
			font-style: italic;
			font-weight: 800;
			font-size: 56rem;
			line-height: 110%;
			letter-spacing: -0.02em;
			color: var(--purple);
		}
	}
</style>
