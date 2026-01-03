<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import BioCounter from '$lib/components/tools/BioCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'en';
	const meta = {
		title: 'Bio Length Checker - Social Media Character Limits',
		description: 'Check if your bio fits within character limits for Twitter, Instagram, TikTok, LinkedIn and other social media platforms.',
		keywords: ['bio character limit', 'instagram bio length', 'twitter bio limit', 'tiktok bio characters', 'social media bio']
	};
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/social/bio-counter"
	alternatePath="/social/bio-teller"
/>
<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://ittytools.com/en/social/bio-counter"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[
			{ label: 'Social', href: '/en/social' },
			{ label: 'Bio Counter' }
		]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			Bio Length Checker
		</h1>
		<p class="text-neutral-500 font-sans">
			{meta.description}
		</p>
	</div>

	<Card class="mb-16">
		<BioCounter />
	</Card>
</div>
