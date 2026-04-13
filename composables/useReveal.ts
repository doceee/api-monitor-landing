import { onMounted, onUnmounted } from 'vue';

export function useReveal() {
	let obs: IntersectionObserver | null = null;

	onMounted(() => {
		const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
		const els = document.querySelectorAll(selectors);

		obs?.disconnect();

		obs = new IntersectionObserver(
			(entries) =>
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('is-visible');
						obs!.unobserve(e.target);
					}
				}),
			{ threshold: 0.1 }
		);
		els.forEach((el) => obs!.observe(el));
	});

	onUnmounted(() => {
		obs?.disconnect();
		obs = null;
	});
}
