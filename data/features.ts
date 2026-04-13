export const features = [
	{
		id: 'uptime',
		name: 'Uptime Monitoring',
		path: 'uptime / endpoints',
		description:
			'Monitor any HTTP/HTTPS endpoint every 30 seconds from 12 global locations. 90-day history, status page in one click.',
	},
	{
		id: 'alerts',
		name: 'Smart Alerting',
		path: 'alerts / log',
		description:
			'Alerts via Slack, PagerDuty, webhook, or email. Multi-region verification eliminates false positives.',
	},
	{
		id: 'latency',
		name: 'Latency Analytics',
		path: 'latency / analytics',
		description:
			'p50/p95/p99 latency charts with drill-down. Automatic anomaly detection catches regressions before users notice.',
	},
	{
		id: 'tracing',
		name: 'Distributed Tracing',
		path: 'tracing / spans',
		description:
			'OpenTelemetry-native tracing across the full call chain. Span visualization, bottleneck identification, and log correlation.',
	},
];
