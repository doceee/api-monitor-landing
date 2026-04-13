export interface TickerMetrics {
	requests: number;
	latency: number;
	errorRate: number;
	endpointsUp: number;
	endpointsTotal: number;
	activeAlerts: number;
}

export function useLiveTicker(intervalMs = 2500) {
	const metrics = ref<TickerMetrics>({
		requests: 2847,
		latency: 84,
		errorRate: 0.12,
		endpointsUp: 47,
		endpointsTotal: 47,
		activeAlerts: 2,
	});

	let timer: ReturnType<typeof setInterval> | null = null;

	const start = () => {
		timer = setInterval(() => {
			metrics.value = {
				requests: 2600 + Math.floor(Math.random() * 500),
				latency: 60 + Math.floor(Math.random() * 60),
				errorRate: Math.round((0.05 + Math.random() * 0.3) * 100) / 100,
				endpointsUp: 45 + Math.floor(Math.random() * 3),
				endpointsTotal: 47,
				activeAlerts: Math.floor(Math.random() * 4),
			};
		}, intervalMs);
	};

	const stop = () => {
		if (timer) clearInterval(timer);
	};

	onMounted(start);
	onUnmounted(stop);

	return { metrics };
}
