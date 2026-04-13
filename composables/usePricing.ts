export type BillingCycle = 'monthly' | 'yearly';

const PLANS = {
	pro: { monthly: 29, yearly: 23 },
	team: { monthly: 89, yearly: 71 },
};

export function usePricing() {
	const cycle = ref<BillingCycle>('monthly');

	const proPrice = computed(() => PLANS.pro[cycle.value]);
	const teamPrice = computed(() => PLANS.team[cycle.value]);

	const toggle = (val: BillingCycle) => {
		cycle.value = val;
	};

	return { cycle, proPrice, teamPrice, toggle };
}
