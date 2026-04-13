<template>
	<div>
		<p class="mb-3 font-mono text-[0.62rem] text-[#64748b]">
			LATENCY — /api/v1/users — LAST 24H
		</p>
		<div class="relative mb-4 h-44">
			<svg
				viewBox="0 0 400 160"
				preserveAspectRatio="none"
				class="h-full w-full"
			>
				<defs>
					<linearGradient id="lat-grad" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="0%"
							stop-color="#3b82f6"
							stop-opacity="0.25"
						/>
						<stop
							offset="100%"
							stop-color="#3b82f6"
							stop-opacity="0"
						/>
					</linearGradient>
				</defs>
				<!-- Grid lines -->
				<line
					v-for="y in [40, 80, 120]"
					:key="y"
					:x1="0"
					:y1="y"
					:x2="400"
					:y2="y"
					stroke="rgba(255,255,255,0.05)"
					stroke-width="1"
				/>
				<text
					x="4"
					y="38"
					fill="#3a4a5a"
					font-size="10"
					font-family="IBM Plex Mono"
				>
					p99
				</text>
				<text
					x="4"
					y="78"
					fill="#3a4a5a"
					font-size="10"
					font-family="IBM Plex Mono"
				>
					p95
				</text>
				<text
					x="4"
					y="118"
					fill="#3a4a5a"
					font-size="10"
					font-family="IBM Plex Mono"
				>
					p50
				</text>
				<path
					d="M0,120 C30,110 50,100 80,95 S120,90 150,88 S200,110 230,75 S270,50 300,60 S350,80 400,70 L400,160 L0,160Z"
					fill="url(#lat-grad)"
				/>
				<path
					ref="linePath"
					d="M0,120 C30,110 50,100 80,95 S120,90 150,88 S200,110 230,75 S270,50 300,60 S350,80 400,70"
					fill="none"
					stroke="#3b82f6"
					stroke-width="2"
					:stroke-dasharray="pathLength"
					:stroke-dashoffset="drawProgress"
					style="
						transition: stroke-dashoffset 1.2s
							cubic-bezier(0.16, 1, 0.3, 1);
					"
				/>
				<circle cx="230" cy="75" r="4" fill="#f59e0b" opacity="0.9">
					<animate
						attributeName="r"
						values="4;7;4"
						dur="2s"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="opacity"
						values="0.9;0.4;0.9"
						dur="2s"
						repeatCount="indefinite"
					/>
				</circle>
			</svg>
		</div>
		<div class="flex gap-6 font-mono text-[0.65rem]">
			<span
				v-for="(s, i) in stats"
				:key="s.label"
				class="animate-scale-in text-[#64748b]"
				:style="`animation-delay: ${i * 100}ms`"
			>
				{{ s.label }}:
				<strong class="font-medium" :style="{ color: s.color }">
					{{ s.value }}
				</strong>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	const linePath = ref<SVGPathElement | null>(null);
	const pathLength = ref(600);
	const drawProgress = ref(600);

	onMounted(async () => {
		if (linePath.value) pathLength.value = linePath.value.getTotalLength();
		drawProgress.value = pathLength.value;

		await nextTick();

		drawProgress.value = 0;
	});

	const stats = [
		{ label: 'p50', value: '42ms', color: '#22c55e' },
		{ label: 'p95', value: '210ms', color: '#f59e0b' },
		{ label: 'p99', value: '480ms', color: '#ef4444' },
	];
</script>
