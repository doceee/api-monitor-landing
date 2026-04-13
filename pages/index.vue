<template>
	<div>
		<app-nav />

		<main>
			<hero-section />
			<lazy-features-section />
			<lazy-about-section />
			<lazy-pricing-section />
			<lazy-cta-section />
		</main>

		<app-footer />
	</div>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: 'Traceway — API Monitoring Platform',
		description:
			'Real-time alerting, distributed tracing and uptime monitoring for developer teams. Zero configuration — ready in 3 minutes.',
		ogTitle: 'Traceway — Monitor every API.',
		ogDescription: 'Fix issues before they hit users.',
	});

	useReveal();
</script>
