<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import SafezoneChecker from '$lib/components/tools/SafezoneChecker.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'nl';
	const meta = {
		title: 'TikTok & Reels Safezone Checker - Check Veilige Zones',
		description: 'Check of je video content binnen de veilige zones valt voor TikTok, Instagram Reels, YouTube Shorts en Stories. Vermijd dat UI elementen je content bedekken.',
		keywords: ['tiktok safezone', 'reels safezone', 'shorts safezone', 'video safe area', 'content creator tools']
	};
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/social/tiktok-safezone"
	alternatePath="/en/social/tiktok-safezone"
/>
<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://ittytools.com/social/tiktok-safezone"
	category="DesignApplication"
/>

<div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[
			{ label: 'Social', href: '/social' },
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
			<h2 class="section-header">Hoe werkt het</h2>
			<p class="text-neutral-600 leading-relaxed">
				Social media apps tonen UI elementen (like buttons, comments, gebruikersnamen) over je video content.
				Deze tool toont exact welke gebieden "veilig" zijn voor belangrijke content zoals tekst en gezichten.
			</p>
		</section>

		<section>
			<h2 class="section-header">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="faq-question">Wat zijn de safezone afmetingen?</h3>
					<p class="faq-answer">TikTok: 15% top, 25% bottom. Reels: 12% top, 20% bottom. De exacte zones variëren per platform en worden regelmatig bijgewerkt.</p>
				</div>
				<div>
					<h3 class="faq-question">Kan ik mijn eigen afbeelding uploaden?</h3>
					<p class="faq-answer">Ja! Upload je thumbnail of screenshot om te zien hoe het eruitziet met de safezone overlay.</p>
				</div>
			</div>
		</section>
	</div>
</div>
