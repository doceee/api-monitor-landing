<template>
	<div>
		<div class="mb-3 flex justify-between">
			<span class="font-mono text-[0.62rem] text-[#64748b]">
				ENDPOINT
			</span>
			<span class="font-mono text-[0.62rem] text-[#64748b]">
				LAST 90 DAYS
			</span>
		</div>
		<div class="flex flex-col gap-3">
			<div
				v-for="(ep, ei) in endpoints"
				:key="ep.name"
				class="flex animate-count-up items-center gap-3 text-[0.75rem]"
				:style="`animation-delay: ${ei * 60}ms`"
			>
				<span
					class="min-w-[120px] truncate font-mono text-[0.68rem] text-[#64748b]"
				>
					{{ ep.name }}
				</span>
				<div
					class="flex flex-1 gap-[2px] overflow-hidden rounded-[2px]"
				>
					<div
						v-for="(bar, i) in ep.bars"
						:key="i"
						class="bar-grow h-5 flex-1 rounded-[1px]"
						:style="{
							background: bar.ok ? ep.color : '#ef4444',
							opacity: bar.ok ? bar.opacity : 1,
							animationDelay: `${ei * 60 + i * 3}ms`,
						}"
					/>
				</div>
				<span
					class="min-w-[48px] text-right font-mono text-[0.7rem]"
					:style="{ color: ep.pct > 99 ? '#22c55e' : '#f59e0b' }"
				>
					{{ ep.pct }}%
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { SEEDS } from '@/data/uptime';

	function buildEndpoints() {
		return SEEDS.map((ep) => ({
			...ep,
			bars: Array.from({ length: 90 }, () => ({
				ok: Math.random() > (1 - ep.pct / 100) * 3,
				opacity: 0.7 + Math.random() * 0.3,
			})),
		}));
	}

	const endpoints = ref(
		SEEDS.map((ep) => ({
			...ep,
			bars: Array.from({ length: 90 }, () => ({
				ok: true,
				opacity: 0.85,
			})),
		}))
	);

	onMounted(() => {
		endpoints.value = buildEndpoints();
	});
</script>
