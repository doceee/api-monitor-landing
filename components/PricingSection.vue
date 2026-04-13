<template>
	<section
		id="pricing"
		class="border-t border-[rgba(255,255,255,0.06)] bg-[#080c14] px-6 py-24 md:px-10"
	>
		<div class="mx-auto max-w-[1000px]">
			<div class="text-center">
				<p class="reveal sec-eyebrow justify-center">Pricing</p>
				<h2 class="reveal reveal-d1 sec-title">
					Simple, transparent pricing.
				</h2>
				<p class="reveal reveal-d2 sec-desc mx-auto">
					Start for free. Upgrade when you're ready. No hidden costs.
				</p>

				<div
					class="reveal reveal-d3 mt-8 inline-flex items-center gap-[6px] rounded-full border border-[rgba(255,255,255,0.06)] bg-[#0d1220] p-1"
				>
					<button
						v-for="opt in billingOpts"
						:key="opt.key"
						class="cursor-pointer rounded-full border-none px-5 py-[7px] text-[0.78rem] font-medium transition-all duration-300"
						:class="
							cycle === opt.key
								? 'bg-[#3b82f6] text-white shadow-[0_2px_12px_rgba(59,130,246,0.35)]'
								: 'bg-transparent text-[#94a3b8] hover:text-[#e2e8f0]'
						"
						@click="toggle(opt.key as 'monthly' | 'yearly')"
					>
						{{ opt.label }}
						<span
							v-if="opt.badge"
							class="ml-1 rounded-full border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.15)] px-2 py-[1px] font-mono text-[0.62rem] text-[#22c55e]"
						>
							{{ opt.badge }}
						</span>
					</button>
				</div>
			</div>

			<div class="mt-10 grid gap-4 md:grid-cols-3">
				<div
					v-for="(plan, i) in plans"
					:key="plan.id"
					class="reveal-scale shimmer-hover relative cursor-default rounded-2xl p-8 transition-all duration-300"
					:class="[
						plan.featured
							? 'border-2 border-[rgba(59,130,246,0.4)] bg-[rgba(59,130,246,0.04)] hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]'
							: 'border border-[rgba(255,255,255,0.06)] bg-[#0d1220] hover:border-[rgba(59,130,246,0.25)] hover:shadow-[0_0_20px_rgba(59,130,246,0.06)]',
						`reveal-d${i + 1}`,
					]"
				>
					<div
						v-if="plan.featured"
						class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#3b82f6] px-3 py-[3px] font-mono text-[0.62rem] tracking-[0.08em] text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
					>
						Most popular
					</div>

					<p
						class="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[#94a3b8]"
					>
						{{ plan.name }}
					</p>

					<Transition name="price" mode="out-in">
						<div
							:key="cycle"
							class="mb-1 flex items-baseline gap-1"
						>
							<span
								class="text-[2.5rem] font-semibold tracking-[-0.04em] text-white"
							>
								${{
									cycle === 'yearly'
										? plan.priceYearly
										: plan.priceMonthly
								}}
							</span>
							<span class="text-[0.85rem] text-[#94a3b8]">
								/mo
							</span>
						</div>
					</Transition>

					<p class="mb-6 h-4 font-mono text-[0.72rem] text-[#94a3b8]">
						{{
							cycle === 'yearly'
								? plan.periodYearly
								: 'billed monthly'
						}}
					</p>

					<div class="mb-6 h-px bg-[rgba(255,255,255,0.06)]" />

					<ul class="mb-8 flex flex-col gap-[10px]">
						<li
							v-for="feat in plan.features"
							:key="feat.text"
							class="flex items-start gap-2 text-[0.8rem] font-light leading-relaxed"
							:class="
								feat.included
									? 'text-[#94a3b8]'
									: 'text-[#6b7f95]'
							"
						>
							<span
								class="mt-[1px] flex-shrink-0"
								:class="
									feat.included
										? 'text-[#22c55e]'
										: 'text-[#6b7f95]'
								"
							>
								{{ feat.included ? '✓' : '–' }}
							</span>
							{{ feat.text }}
						</li>
					</ul>

					<a
						:href="plan.cta.href"
						class="block w-full rounded-lg py-3 text-center text-[0.875rem] font-medium no-underline transition-all duration-300"
						:class="
							plan.featured
								? 'border border-[#3b82f6] bg-[#3b82f6] text-white hover:-translate-y-px hover:bg-[#2563eb] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)]'
								: 'border border-[rgba(255,255,255,0.1)] bg-transparent text-[#e2e8f0] hover:-translate-y-px hover:border-[rgba(255,255,255,0.25)]'
						"
					>
						{{ plan.cta.label }}
					</a>
				</div>
			</div>

			<div class="mt-16 grid gap-4 md:grid-cols-2">
				<div
					v-for="(item, i) in faq"
					:key="item.q"
					class="reveal rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#0d1220] p-5 transition-colors duration-200 hover:border-[rgba(255,255,255,0.1)]"
					:class="`reveal-d${i + 1}`"
				>
					<p class="mb-2 text-[0.875rem] font-medium text-white">
						{{ item.q }}
					</p>
					<p
						class="text-[0.8rem] font-light leading-relaxed text-[#94a3b8]"
					>
						{{ item.a }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { billingOpts, plans, faq } from '@/data/billing';
	const { cycle, toggle } = usePricing();
</script>

<style scoped>
	.price-enter-active,
	.price-leave-active {
		transition:
			opacity 0.18s,
			transform 0.18s;
	}
	.price-enter-from {
		opacity: 0;
		transform: translateY(-8px);
	}
	.price-leave-to {
		opacity: 0;
		transform: translateY(8px);
	}
</style>
