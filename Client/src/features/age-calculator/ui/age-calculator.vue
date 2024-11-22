<script lang="ts" setup></script>

<template>
	<article>
		<form>
			<h2 class="visually-hidden">Age Calculator</h2>
			<fieldset>
				<legend>Enter your birthdate</legend>
				<div>
					<div>
						<label for="day">Day</label>
						<input id="day" name="day" placeholder="DD" type="number" />
					</div>
					<div>
						<label for="month">Month</label>
						<input id="month" name="month" placeholder="MM" type="number" />
					</div>
					<div>
						<label for="year">Year</label>
						<input id="year" name="year" placeholder="YYYY" type="number" />
					</div>
				</div>
			</fieldset>
			<fieldset>
				<legend>Calculate your age</legend>
				<button aria-label="Calculate your age" type="button">
					<svg
						fill="none"
						height="24"
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
			</fieldset>
		</form>
		<div>
			<p>
				<strong>
					<output name="years">38</output>
				</strong>
				years
			</p>
			<p>
				<strong>
					<output name="months">3</output>
				</strong>
				months
			</p>
			<p>
				<strong>
					<output name="days">26</output>
				</strong>
				days
			</p>
		</div>
	</article>
</template>

<style scoped></style>
