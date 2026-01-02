<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import SafezoneChecker from '$lib/components/tools/SafezoneChecker.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'en';
	const meta = {
		title: 'TikTok & Reels Safezone Checker - Check Safe Areas',
		description: 'Check if your video content falls within safe zones for TikTok, Instagram Reels, YouTube Shorts and Stories. Avoid UI elements covering your content.',
		keywords: ['tiktok safezone', 'reels safezone', 'shorts safezone', 'video safe area', 'content creator tools']
	};
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/en/social/tiktok-safezone"
	alternatePath="/social/tiktok-safezone"
/>
<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://ittytools.com/en/social/tiktok-safezone"
	category="DesignApplication"
/>

<div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[
			{ label: 'Social', href: '/en/social' },
			{ label: 'Safezone Checker' }
		]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			TikTok & Reels Safezone Checker
		</h1>
		<p class="text-neutral-500 font-sans">
			{meta.description}
		</p>
	</div>

	<Card class="mb-16">
		<SafezoneChecker />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="section-header">How it works</h2>
			<p class="text-neutral-600 leading-relaxed">
				Social media apps display UI elements (like buttons, comments, usernames) over your video content.
				This tool shows exactly which areas are "safe" for important content like text and faces.
			</p>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">What are the safezone dimensions?</h3>
					<p class="faq-answer">TikTok: 15% top, 25% bottom. Reels: 12% top, 20% bottom. Exact zones vary by platform and are regularly updated.</p>
				</div>
				<div>
					<h3 class="faq-question">Can I upload my own image?</h3>
					<p class="faq-answer">Yes! Upload your thumbnail or screenshot to see how it looks with the safezone overlay.</p>
				</div>
			</div>
		</section>
	</div>
</div>
