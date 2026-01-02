<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import OgImageTester from '$lib/components/tools/OgImageTester.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'en';
	const meta = {
		title: 'OG Image Tester - Social Share Preview Tool',
		description: 'Test how your links look on Twitter, Facebook, LinkedIn and Discord. Preview your Open Graph tags before publishing.',
		keywords: ['og image tester', 'social share preview', 'open graph preview', 'twitter card tester', 'facebook share preview']
	};
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/social/og-image-tester"
	alternatePath="/social/og-image-tester"
/>
<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://ittytools.com/en/social/og-image-tester"
/>

<div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[
			{ label: 'Social', href: '/en/social' },
			{ label: 'OG Image Tester' }
		]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			OG Image Tester
		</h1>
		<p class="text-neutral-500 font-sans">
			{meta.description}
		</p>
	</div>

	<Card class="mb-16">
		<OgImageTester />
	</Card>
</div>
