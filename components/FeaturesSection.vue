<template>
	<section id="features" class="bg-[#080c14] px-6 py-24 md:px-10">
		<div class="mx-auto max-w-[1100px]">
			<p class="reveal sec-eyebrow">Platform</p>
			<h2 class="reveal reveal-d1 sec-title">
				Everything you need
				<br />
				to own your API health.
			</h2>
			<p class="reveal reveal-d2 sec-desc">
				From simple uptime checks to full distributed tracing —
				everything in one place.
			</p>

			<div class="mt-12 grid items-start gap-16 md:grid-cols-2">
				<div class="reveal-left flex flex-col gap-2">
					<div
						v-for="(feat, i) in features"
						:key="feat.id"
						class="shimmer-hover group relative cursor-pointer rounded-xl border px-5 py-4 transition-all duration-300"
						:class="
							active === i
								? 'border-[rgba(59,130,246,0.25)] bg-[rgba(59,130,246,0.06)] shadow-[0_0_20px_rgba(59,130,246,0.06)]'
								: 'border-transparent hover:border-[rgba(59,130,246,0.1)] hover:bg-[rgba(59,130,246,0.03)]'
						"
						@click="active = i"
					>
						<span
							class="absolute bottom-[20%] left-0 top-[20%] w-[2px] rounded-r transition-all duration-300"
							:class="
								active === i
									? 'bg-[#3b82f6] opacity-100'
									: 'opacity-0'
							"
						/>
						<p
							class="mb-1 font-mono text-[0.62rem] text-[#94a3b8] transition-colors duration-200 group-hover:text-[#3b82f6]"
						>
							{{ String(i + 1).padStart(2, '0') }}
						</p>
						<p
							class="mb-1 text-[0.95rem] font-medium transition-colors duration-200"
							:class="
								active === i
									? 'text-white'
									: 'text-[#94a3b8] group-hover:text-white'
							"
						>
							{{ feat.name }}
						</p>
						<p
							class="text-[0.8rem] font-light leading-relaxed text-[#94a3b8]"
						>
							{{ feat.description }}
						</p>
					</div>
				</div>

				<div
					class="reveal-right sticky top-20 overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0d1220] transition-shadow duration-500"
					:class="
						active !== null
							? 'shadow-[0_0_40px_rgba(59,130,246,0.08)]'
							: ''
					"
				>
					<div
						class="flex items-center gap-[6px] border-b border-[rgba(255,255,255,0.06)] px-5 py-3"
					>
						<span
							class="h-[9px] w-[9px] rounded-full bg-[#ff5f56]"
						/>
						<span
							class="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]"
						/>
						<span
							class="h-[9px] w-[9px] rounded-full bg-[#27c93f]"
						/>
						<transition name="path">
							<span
								:key="features[active].path"
								class="ml-auto font-mono text-[0.62rem] text-[#94a3b8]"
							>
								{{ features[active].path }}
							</span>
						</transition>
					</div>

					<div class="min-h-[340px] p-6">
						<transition name="mock" mode="out-in">
							<component
								:is="mockComponents[active]"
								:key="active"
							/>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import MockUptime from '@/components/mocks/MockUptime.vue';
	import MockAlerts from '@/components/mocks/MockAlerts.vue';
	import MockLatency from '@/components/mocks/MockLatency.vue';
	import MockTracing from '@/components/mocks/MockTracing.vue';
	import { features } from '@/data/features';

	const active = ref(0);

	const mockComponents = [MockUptime, MockAlerts, MockLatency, MockTracing];
</script>

<style scoped>
	.mock-enter-active,
	.mock-leave-active {
		transition:
			opacity 0.25s,
			transform 0.25s;
	}
	.mock-enter-from {
		opacity: 0;
		transform: translateY(10px);
	}
	.mock-leave-to {
		opacity: 0;
		transform: translateY(-10px);
	}

	.path-enter-active,
	.path-leave-active {
		transition: opacity 0.2s;
	}
	.path-enter-from,
	.path-leave-to {
		opacity: 0;
	}
</style>
