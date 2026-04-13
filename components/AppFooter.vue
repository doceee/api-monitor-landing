<template>
	<footer
		class="flex flex-col flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.06)] px-6 py-6 md:flex-row md:px-10"
	>
		<div
			class="group flex cursor-default items-center gap-[10px] text-[0.9rem] font-semibold text-[#64748b]"
		>
			<span class="relative flex">
				<span
					class="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-[#3b82f6] opacity-20"
				/>
				<span
					class="relative h-[7px] w-[7px] rounded-full bg-[#3b82f6]"
				/>
			</span>
			<span
				class="transition-colors duration-200 group-hover:text-[#e2e8f0]"
			>
				Traceway
			</span>
		</div>
		<ul class="flex list-none gap-6">
			<li v-for="link in links" :key="link.label">
				<a
					:href="link.href"
					class="text-[0.75rem] text-[#64748b] no-underline transition-colors duration-200 hover:text-[#e2e8f0]"
				>
					{{ link.label }}
				</a>
			</li>
		</ul>
		<small class="font-mono text-[0.7rem] text-[#1e293b]">
			© {{ year }} Traceway, Inc.
		</small>
	</footer>
</template>

<script setup lang="ts">
	const year = new Date().getFullYear();
	const links = [
		{ label: 'Docs', href: '#' },
		{ label: 'Status', href: '#' },
		{ label: 'GitHub', href: '#' },
		{ label: 'Twitter', href: '#' },
		{ label: 'Privacy', href: '#' },
	];
</script>
