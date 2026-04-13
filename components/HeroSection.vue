<template>
	<section
		id="hero"
		class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
	>
		<div
			class="hero-grid-bg pointer-events-none absolute inset-0 animate-grid-drift"
		/>

		<div class="scan-line" />

		<div
			class="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2 animate-glow-breathe"
			style="
				background: radial-gradient(
					ellipse,
					rgba(59, 130, 246, 0.15) 0%,
					transparent 65%
				);
			"
		/>

		<div
			class="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] opacity-30"
			style="
				background: radial-gradient(
					circle,
					rgba(129, 140, 248, 0.2) 0%,
					transparent 70%
				);
				animation: glowBreathe 7s ease-in-out infinite 2s;
			"
		/>

		<div
			class="stagger-1 mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.06)] px-4 py-[6px] font-mono text-[0.72rem] text-[#22c55e]"
		>
			<span
				class="h-[6px] w-[6px] animate-status-dot rounded-full bg-[#22c55e]"
			/>
			All systems operational · 99.98% uptime
		</div>

		<h1
			class="stagger-2 mx-auto mb-6 max-w-[800px] animate-fade-up font-sans font-semibold leading-[1.05] tracking-[-0.03em] text-white"
			style="font-size: clamp(2.5rem, 6vw, 5rem)"
		>
			Monitor every API.
			<br />
			Fix issues
			<span class="text-gradient-blue">before</span>
			they hit users.
		</h1>

		<p
			class="stagger-3 mx-auto mb-10 max-w-[52ch] animate-fade-up text-[1.05rem] font-light leading-[1.7] text-[#94a3b8]"
		>
			Real-time alerting, distributed tracing and uptime monitoring for
			developer teams. Zero configuration — ready in 3 minutes.
		</p>

		<div
			class="stagger-4 flex animate-fade-up flex-wrap justify-center gap-4"
		>
			<a
				href="#pricing"
				class="shimmer-hover relative rounded-lg bg-[#3b82f6] px-7 py-3 text-[0.875rem] font-medium text-white no-underline transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#2563eb] hover:shadow-[0_8px_25px_rgba(59,130,246,0.35)]"
			>
				Start for free
			</a>
			<a
				href="#features"
				class="rounded-lg border border-[rgba(255,255,255,0.1)] bg-transparent px-7 py-3 text-[0.875rem] font-medium text-[#e2e8f0] no-underline transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)]"
			>
				See how it works →
			</a>
		</div>

		<div
			class="stagger-5 mt-16 w-full max-w-[900px] animate-fade-up overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0d1220]"
		>
			<div
				class="h-[2px] w-full"
				style="
					background: linear-gradient(
						90deg,
						#3b82f6,
						#818cf8,
						#22c55e,
						#3b82f6
					);
					background-size: 200%;
					animation: borderFlow 3s linear infinite;
				"
			/>

			<div
				class="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] px-5 py-3"
			>
				<span
					class="font-mono text-[0.7rem] tracking-[0.08em] text-[#94a3b8]"
				>
					LIVE / DEMO ENVIRONMENT
				</span>
				<span
					class="flex items-center gap-[6px] font-mono text-[0.68rem] text-[#22c55e]"
				>
					<span
						class="h-[5px] w-[5px] animate-status-dot rounded-full bg-[#22c55e]"
					/>
					Streaming live data
				</span>
			</div>

			<div
				class="grid grid-cols-2 divide-x divide-[rgba(255,255,255,0.06)] md:grid-cols-5"
			>
				<div
					v-for="(tick, i) in ticks"
					:key="tick.label"
					class="translate-y-3 animate-count-up px-5 py-4 opacity-0"
					:style="`animation-delay: ${i * 80}ms`"
				>
					<div
						class="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.06em] text-[#94a3b8]"
					>
						{{ tick.label }}
					</div>
					<div
						:key="tick.value"
						class="font-mono text-[1.2rem] font-medium transition-all duration-500"
						:class="tick.colorClass"
					>
						{{ tick.value }}
					</div>
					<div
						class="mt-[3px] font-mono text-[0.62rem] text-[#94a3b8]"
					>
						{{ tick.sub }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const { metrics } = useLiveTicker();

	const ticks = computed(() => [
		{
			label: 'Requests / min',
			value: metrics.value.requests.toLocaleString(),
			colorClass: 'text-white',
			sub: '↑ +12% vs avg',
		},
		{
			label: 'Avg latency',
			value: `${metrics.value.latency}ms`,
			colorClass:
				metrics.value.latency < 100
					? 'text-[#22c55e]'
					: metrics.value.latency < 200
						? 'text-[#f59e0b]'
						: 'text-[#ef4444]',
			sub: 'p95: 210ms',
		},
		{
			label: 'Error rate',
			value: `${metrics.value.errorRate}%`,
			colorClass:
				metrics.value.errorRate < 0.5
					? 'text-[#22c55e]'
					: 'text-[#f59e0b]',
			sub: '↓ vs 0.31% yesterday',
		},
		{
			label: 'Endpoints up',
			value: `${metrics.value.endpointsUp} / ${metrics.value.endpointsTotal}`,
			colorClass: 'text-white',
			sub: 'Last check: 12s ago',
		},
		{
			label: 'Active alerts',
			value: String(metrics.value.activeAlerts),
			colorClass:
				metrics.value.activeAlerts === 0
					? 'text-[#22c55e]'
					: metrics.value.activeAlerts < 3
						? 'text-[#f59e0b]'
						: 'text-[#ef4444]',
			sub:
				metrics.value.activeAlerts === 0
					? 'all clear'
					: 'degraded · non-critical',
		},
	]);
</script>
