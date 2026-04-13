<template>
	<div
		class="overflow-hidden border-b border-t border-[rgba(255,255,255,0.06)] px-6 py-10 text-center md:px-10"
	>
		<p
			v-motion-fade-up
			class="mb-5 text-[0.75rem] uppercase tracking-[0.1em] text-[#94a3b8]"
		>
			Trusted by engineering teams at
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<span
				v-for="(logo, i) in logos"
				:key="logo"
				v-motion
				:initial="{ opacity: 0, y: 28 }"
				:visible-once="{ opacity: 1, y: 0, transition: { duration: 750, ease: [0.16, 1, 0.3, 1], delay: i * 60 } }"
				class="cursor-default rounded-md border border-[rgba(255,255,255,0.06)] px-3 py-[6px] font-mono text-[0.75rem] tracking-[0.05em] text-[#94a3b8] transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:text-[#94a3b8]"
			>
				{{ logo }}
			</span>
		</div>
	</div>

	<section
		id="cta"
		class="relative overflow-hidden border-t border-[rgba(255,255,255,0.06)] px-6 py-24 text-center md:px-10"
	>
		<div
			class="pointer-events-none absolute inset-0 animate-glow-breathe"
			style="
				background: radial-gradient(
					ellipse 60% 80% at 50% 50%,
					rgba(59, 130, 246, 0.09) 0%,
					transparent 70%
				);
			"
		/>

		<div
			class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-10"
		>
			<div
				class="absolute inset-0 animate-ping-slow rounded-full border border-[#3b82f6]"
				style="animation-duration: 3s"
			/>
			<div
				class="absolute inset-8 animate-ping-slow rounded-full border border-[#3b82f6]"
				style="animation-duration: 3s; animation-delay: 0.5s"
			/>
		</div>

		<h2
			v-motion-fade-up
			class="relative z-10 mb-4 font-semibold leading-[1.1] tracking-[-0.03em] text-white"
			style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
		>
			Ready to ship with confidence?
		</h2>

		<p
			v-motion-fade-up-1
			class="relative z-10 mb-10 text-base font-light text-[#94a3b8]"
		>
			Join 12,000+ developers who never go to sleep unsure.
		</p>

		<div
			v-motion-fade-up-2
			class="relative z-10 flex flex-wrap justify-center gap-4"
		>
			<a
				href="#pricing"
				class="shimmer-hover group relative rounded-lg bg-[#3b82f6] px-7 py-3 text-[0.875rem] font-medium text-white no-underline transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#2563eb] hover:shadow-[0_8px_28px_rgba(59,130,246,0.4)]"
			>
				Start for free — no card needed
			</a>
			<a
				href="#"
				class="rounded-lg border border-[rgba(255,255,255,0.1)] bg-transparent px-7 py-3 text-[0.875rem] font-medium text-[#e2e8f0] no-underline transition-all duration-300 hover:-translate-y-[1px] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)]"
			>
				Book a demo
			</a>
		</div>
	</section>
</template>

<script setup lang="ts">
	const logos = [
		'Vercel',
		'Stripe',
		'PlanetScale',
		'Railway',
		'Supabase',
		'Neon',
		'Resend',
	];
</script>
