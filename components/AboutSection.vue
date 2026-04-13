<template>
	<section
		id="about"
		class="border-t border-[rgba(255,255,255,0.06)] bg-[#0d1220] px-6 py-24 md:px-10"
	>
		<div class="mx-auto max-w-[1100px]">
			<p class="reveal sec-eyebrow">Company</p>
			<h2 class="reveal reveal-d1 sec-title">
				Built by developers,
				<br />
				for developers.
			</h2>

			<div class="mt-12 grid items-start gap-20 md:grid-cols-2">
				<div class="reveal-left">
					<p
						class="mb-5 text-base font-light leading-[1.8] text-[#64748b]"
					>
						Traceway was born out of frustration — we spent more
						time debugging API issues than building the product. We
						wanted a tool that
						<strong class="font-medium text-[#e2e8f0]">
							tells you about a problem before your users do
						</strong>
						.
					</p>
					<p
						class="text-base font-light leading-[1.8] text-[#64748b]"
					>
						We're bootstrapped, profitable, and focused on one
						thing: giving you full visibility into the health of
						your APIs — no noise, no bloatware, no vendor lock-in.
					</p>

					<div
						class="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.06)]"
					>
						<div
							v-for="(stat, i) in stats"
							:key="stat.label"
							class="reveal-scale group bg-[#111827] px-6 py-5 transition-colors duration-300 hover:bg-[#161f2e]"
							:class="`reveal-d${i + 1}`"
						>
							<div
								class="flex items-baseline gap-[2px] font-mono font-medium tracking-[-0.04em] text-white"
								style="font-size: 2rem"
							>
								<span
									:data-counter="stat.raw"
									:data-suffix="stat.suffix"
								>
									{{ stat.value }}{{ stat.suffix }}
								</span>
							</div>
							<div
								class="mt-1 text-[0.72rem] leading-relaxed text-[#64748b]"
							>
								{{ stat.label }}
							</div>
						</div>
					</div>
				</div>

				<div class="reveal-right">
					<p
						class="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[#64748b]"
					>
						Team
					</p>
					<div class="grid grid-cols-3 gap-3">
						<div
							v-for="(member, i) in team"
							:key="member.initials"
							class="reveal-scale cursor-default rounded-xl border border-[rgba(255,255,255,0.06)] bg-[#111827] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.08)]"
							:class="`reveal-d${i + 1}`"
						>
							<div
								class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full text-[0.9rem] font-semibold transition-transform duration-300 hover:scale-105"
								:style="{
									background: member.bg,
									color: member.color,
								}"
							>
								{{ member.initials }}
							</div>
							<p class="text-[0.8rem] font-medium text-white">
								{{ member.name }}
							</p>
							<p
								class="mt-[2px] font-mono text-[0.64rem] text-[#64748b]"
							>
								{{ member.role }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import { stats, team } from '@/data/about';
</script>
