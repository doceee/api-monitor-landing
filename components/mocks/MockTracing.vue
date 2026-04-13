<template>
	<div>
		<p class="mb-4 font-mono text-[0.62rem] text-[#64748b]">
			TRACE / checkout.POST · 847ms total
		</p>
		<div class="flex flex-col gap-[7px] font-mono text-[0.72rem]">
			<div
				v-for="(span, i) in spans"
				:key="span.name"
				class="flex animate-fade-up items-center gap-3"
				:style="`animation-delay: ${i * 80}ms`"
			>
				<span
					class="min-w-[120px] truncate"
					:style="{
						color: span.color,
						paddingLeft: span.indent ? '1rem' : '0',
					}"
				>
					{{ span.name }}
				</span>
				<div
					class="h-[14px] flex-1 overflow-hidden rounded-[2px] bg-[rgba(255,255,255,0.04)]"
				>
					<div
						class="bar-grow h-full rounded-[2px]"
						:style="{
							width: span.width + '%',
							background: span.color,
							opacity: 0.75,
							animationDelay: `${i * 80 + 200}ms`,
						}"
					/>
				</div>
				<span
					class="min-w-[44px] text-right"
					:style="{
						color: span.isBottleneck ? '#f59e0b' : '#64748b',
					}"
				>
					{{ span.ms }}ms
				</span>
			</div>
		</div>
		<div
			class="mt-4 animate-scale-in rounded-md border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.06)] px-3 py-2 font-mono text-[0.7rem] text-[#f59e0b]"
			style="animation-delay: 600ms"
		>
			⚠ payment.charge exceeds p95 threshold (480ms)
		</div>
	</div>
</template>

<script setup lang="ts">
	import { spans } from '@/data/tracing';
</script>
