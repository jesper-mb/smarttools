<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import BioCounter from '$lib/components/tools/BioCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'nl';
	const meta = {
		title: 'Bio Lengte Checker - Social Media Karakter Limieten',
		description: 'Check of je bio past binnen de karakter limieten van Twitter, Instagram, TikTok, LinkedIn en andere social media platforms.',
		keywords: ['bio karakter limiet', 'instagram bio lengte', 'twitter bio limiet', 'tiktok bio karakters', 'social media bio']
	};
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/social/bio-teller"
	alternatePath="/en/social/bio-counter"
/>
<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://ittytools.com/social/bio-teller"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[
			{ label: 'Social', href: '/social' },
			{ label: 'Bio Teller' }
		]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			Bio Lengte Checker
		</h1>
		<p class="text-neutral-500 font-sans">
			{meta.description}
		</p>
	</div>

	<Card class="mb-16">
		<BioCounter />
	</Card>
</div>
