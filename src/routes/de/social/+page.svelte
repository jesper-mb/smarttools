<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'de';

	const tools = [
		{ slug: 'social/tiktok-safezone', name: 'TikTok Safezone', description: 'Prüfen ob Text in der sicheren Zone ist', icon: '📱' },
		{ slug: 'social/bio-counter', name: 'Bio Zeichenzähler', description: 'Zeichen für Instagram, Twitter Bio zählen', icon: '📝' },
		{ slug: 'social/og-image-tester', name: 'OG Image Tester', description: 'Social Media Vorschau testen', icon: '🖼' }
	];
</script>

<SEOHead
	title="Social Media Tools | IttyTools"
	description="Kostenlose Social Media Tools: TikTok Safezone Checker, Bio Zeichenzähler, OG Image Tester und mehr."
	{lang}
	canonicalPath="/de/social"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Social', href: '/de/social' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">@</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Social Media Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Tools für Content Creator und Social Media Manager. Safezones prüfen, Bio-Längen optimieren und Vorschauen testen.
		</p>
	</div>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each tools as tool}
			<a href="/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-neutral-950 bg-white transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
				<div class="flex items-start gap-3">
					<span class="text-2xl font-mono font-bold text-neutral-400 group-hover:text-orange-600">{tool.icon}</span>
					<div class="flex-1">
						<h2 class="font-bold text-neutral-950 mb-1 group-hover:text-orange-600">{tool.name}</h2>
						<p class="text-sm text-neutral-500">{tool.description}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-16 p-8 bg-neutral-50 border-2 border-neutral-200">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Über Social Media Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Erstellen Sie besseren Social Media Content mit unseren kostenlosen Tools.
				Alle Prüfungen und Berechnungen erfolgen lokal in Ihrem Browser.
			</p>
		</div>
	</div>
</div>
