<template>
	<div>
		<p class="mb-3 font-mono text-[0.62rem] text-[#64748b]">
			ALERT LOG — LAST 24H
		</p>
		<div class="flex flex-col gap-2">
			<div
				v-for="(alert, i) in alerts"
				:key="alert.id"
				class="flex animate-fade-up items-center gap-3 rounded-md border border-transparent bg-[rgba(255,255,255,0.03)] px-3 py-[9px] font-mono text-[0.68rem] transition-colors duration-200 hover:border-[rgba(255,255,255,0.06)]"
				:style="`animation-delay: ${i * 70}ms`"
			>
				<span
					class="h-[7px] w-[7px] flex-shrink-0 rounded-full"
					:style="{ background: alert.color }"
				/>
				<span class="flex-1 text-[#e2e8f0]">{{ alert.message }}</span>
				<span class="text-[0.62rem] text-[#64748b]">
					{{ alert.time }}
				</span>
				<span
					class="rounded px-[6px] py-[2px] font-mono text-[0.55rem]"
					:style="{
						background: alert.badgeBg,
						color: alert.badgeColor,
					}"
				>
					{{ alert.severity }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { alerts } from '@/data/alerts';
</script>
