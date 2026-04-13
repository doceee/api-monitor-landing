<template>
	<nav
		class="fixed left-0 right-0 top-0 z-50 flex h-[60px] items-center justify-between px-10 transition-all duration-500"
		:class="
			scrolled
				? 'border-b border-[rgba(255,255,255,0.06)] bg-[rgba(8,12,20,0.92)] shadow-[0_1px_30px_rgba(0,0,0,0.4)] backdrop-blur-[14px]'
				: 'bg-transparent'
		"
	>
		<NuxtLink
			to="/"
			class="group flex items-center gap-[10px] text-[1.05rem] font-semibold text-white no-underline"
		>
			<span class="relative flex">
				<span
					class="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-[#3b82f6] opacity-30"
				/>
				<span
					class="relative h-2 w-2 animate-logo-pulse rounded-full bg-[#3b82f6]"
				/>
			</span>
			<span
				class="transition-colors duration-200 group-hover:text-[#93c5fd]"
			>
				Traceway
			</span>
		</NuxtLink>

		<ul class="hidden list-none gap-8 md:flex">
			<li v-for="link in links" :key="link.href">
				<a
					:href="link.href"
					class="group relative py-1 text-[0.8rem] text-[#94a3b8] no-underline transition-colors duration-200 hover:text-[#e2e8f0]"
				>
					{{ link.label }}
					<span
						class="absolute bottom-0 left-0 h-[1px] w-0 bg-[#3b82f6] transition-all duration-300 group-hover:w-full"
					/>
				</a>
			</li>
		</ul>

		<a
			href="#pricing"
			class="shimmer-hover hidden rounded-md bg-[#3b82f6] px-5 py-[9px] text-[0.78rem] font-medium text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[#2563eb] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] md:inline-block"
		>
			Start free trial
		</a>

		<button
			class="flex cursor-pointer flex-col gap-[5px] border-none bg-none p-2 md:hidden"
			:aria-expanded="mobileOpen"
			aria-controls="mobile-menu"
			aria-label="Toggle navigation menu"
			@click="mobileOpen = !mobileOpen"
		>
			<span
				v-for="i in 3"
				:key="i"
				class="block h-px w-5 bg-[#e2e8f0] transition-all duration-300"
				:class="mobileOpen && i === 2 ? 'opacity-0' : ''"
			/>
		</button>
	</nav>

	<transition name="mobile">
		<div
			v-if="mobileOpen"
			id="mobile-menu"
			ref="mobileMenuEl"
			role="dialog"
			aria-modal="true"
			aria-label="Navigation menu"
			class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[rgba(8,12,20,0.98)] backdrop-blur-sm"
			@keydown="onMenuKeydown"
		>
			<a
				v-for="link in links"
				:key="link.href"
				:href="link.href"
				class="text-2xl font-semibold text-white no-underline transition-colors hover:text-[#3b82f6]"
				@click="mobileOpen = false"
			>
				{{ link.label }}
			</a>
			<a
				href="#pricing"
				class="mt-4 rounded-md bg-[#3b82f6] px-8 py-3 font-medium text-white no-underline"
				@click="mobileOpen = false"
			>
				Start free trial
			</a>
		</div>
	</transition>
</template>

<script setup lang="ts">
	const links = [
		{ label: 'Features', href: '#features' },
		{ label: 'About', href: '#about' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'Docs', href: '#' },
	];
	const scrolled = ref(false);
	const mobileOpen = ref(false);
	const mobileMenuEl = ref<HTMLElement | null>(null);

	const onScroll = () => {
		scrolled.value = window.scrollY > 40;
	};

	const FOCUSABLE = 'a[href], button:not([disabled])';

	function getFocusable() {
		return Array.from(
			mobileMenuEl.value?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
		);
	}

	function onMenuKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			mobileOpen.value = false;
			return;
		}
		if (e.key !== 'Tab') return;

		const focusable = getFocusable();
		if (!focusable.length) return;

		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (e.shiftKey) {
			if (document.activeElement === first) {
				e.preventDefault();
				last.focus();
			}
		} else {
			if (document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}
	}

	watch(mobileOpen, async (open) => {
		if (open) {
			await nextTick();
			getFocusable()[0]?.focus();
		}
	});

	onMounted(() => window.addEventListener('scroll', onScroll));
	onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
	.mobile-enter-active,
	.mobile-leave-active {
		transition: opacity 0.25s;
	}
	.mobile-enter-from,
	.mobile-leave-to {
		opacity: 0;
	}
</style>
