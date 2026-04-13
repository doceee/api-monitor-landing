export const billingOpts = [
	{ key: 'monthly', label: 'Monthly', badge: '' },
	{ key: 'yearly', label: 'Yearly', badge: '–20%' },
];

export const plans = [
	{
		id: 'hobby',
		name: 'Hobby',
		priceMonthly: 0,
		priceYearly: 0,
		periodYearly: 'forever free',
		featured: false,
		cta: { label: 'Get started free', href: '#' },
		features: [
			{ text: '5 endpoints', included: true },
			{ text: '1-min check interval', included: true },
			{ text: '7-day data retention', included: true },
			{ text: 'Email alerts', included: true },
			{ text: 'Slack / PagerDuty', included: false },
			{ text: 'Distributed tracing', included: false },
			{ text: 'Custom dashboards', included: false },
			{ text: 'SLA reports', included: false },
		],
	},
	{
		id: 'pro',
		name: 'Pro',
		priceMonthly: 29,
		priceYearly: 23,
		periodYearly: 'billed $276/yr · save $72',
		featured: true,
		cta: { label: 'Start 14-day trial', href: '#' },
		features: [
			{ text: '50 endpoints', included: true },
			{ text: '30-sec check interval', included: true },
			{ text: '90-day data retention', included: true },
			{ text: 'Email + Slack + Webhook', included: true },
			{ text: 'Latency analytics', included: true },
			{ text: 'Basic tracing (3 services)', included: true },
			{ text: 'Custom dashboards', included: false },
			{ text: 'SLA reports', included: false },
		],
	},
	{
		id: 'team',
		name: 'Team',
		priceMonthly: 89,
		priceYearly: 71,
		periodYearly: 'billed $852/yr · save $216',
		featured: false,
		cta: { label: 'Start 14-day trial', href: '#' },
		features: [
			{ text: 'Unlimited endpoints', included: true },
			{ text: '15-sec check interval', included: true },
			{ text: '1-year data retention', included: true },
			{ text: 'All channels + PagerDuty', included: true },
			{ text: 'Full distributed tracing', included: true },
			{ text: 'Custom dashboards', included: true },
			{ text: 'SLA reports & exports', included: true },
			{ text: 'SSO + audit logs', included: true },
		],
	},
];

export const faq = [
	{
		q: 'How long does integration take?',
		a: "Add one snippet or use the SDK (Node, Python, Go). You'll see your first data within 3 minutes.",
	},
	{
		q: 'Do you support on-premise?',
		a: 'The Team plan supports a self-hosted agent. Your data stays in your infrastructure.',
	},
	{
		q: 'Which protocols are supported?',
		a: 'HTTP/HTTPS, gRPC, WebSocket, TCP. Coming soon: GraphQL subscription monitoring.',
	},
	{
		q: 'What happens after the trial ends?',
		a: 'You automatically switch to the Hobby plan. No surprises, no card required to start.',
	},
];
