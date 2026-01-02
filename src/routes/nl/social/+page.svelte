<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { categories } from '$lib/seo/meta';

	const lang = 'nl';
	const category = categories.social[lang];

	const tools = [
		{ slug: 'tiktok-safezone', name: 'TikTok/Reels Safezone', description: 'Check veilige zones voor verticale video', icon: '▢', comingSoon: false },
		{ slug: 'bio-teller', name: 'Bio Lengte Checker', description: 'Check bio limiet per platform', icon: 'Aa', comingSoon: false },
		{ slug: 'og-image-tester', name: 'OG Image Tester', description: 'Test hoe je links eruitzien op social', icon: '🔗', comingSoon: false },
		{ slug: 'phone-preview', name: 'Phone Preview', description: 'Preview content op verschillende schermen', icon: '📱', comingSoon: true },
		{ slug: 'hashtag-generator', name: 'Hashtag Generator', description: 'Genereer relevante hashtags', icon: '#', comingSoon: true }
	];
</script>

<SEOHead
	title={category.title}
	description={category.description}
	{lang}
	canonicalPath="/social"
	alternatePath="/en/social"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Social', href: '/social' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-pink-600">@</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Social Media Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Tools voor content creators en social media managers. Check safezones, bio limieten, en preview hoe je content eruitziet.
		</p>
	</div>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each tools as tool}
			{#if tool.comingSoon}
				<div class="p-6 border-2 border-dashed border-neutral-200 bg-neutral-50 opacity-60">
					<div class="flex items-start gap-3">
						<span class="text-2xl font-mono font-bold text-neutral-400">{tool.icon}</span>
						<div class="flex-1">
							<h2 class="font-bold text-neutral-950 mb-1">{tool.name}</h2>
							<p class="text-sm text-neutral-500 mb-2">{tool.description}</p>
							<span class="text-xs text-neutral-400 uppercase tracking-wider">Binnenkort</span>
						</div>
					</div>
				</div>
			{:else}
				<a href="/social/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-pink-400 bg-white transition-all hover:shadow-lg">
					<div class="flex items-start gap-3">
						<span class="text-2xl font-mono font-bold text-pink-600 group-hover:text-pink-700">{tool.icon}</span>
						<div class="flex-1">
							<h2 class="font-bold text-neutral-950 mb-1 group-hover:text-pink-700">{tool.name}</h2>
							<p class="text-sm text-neutral-500">{tool.description}</p>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>

	<div class="mt-16 p-8 bg-pink-50 border-2 border-pink-200">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Over Social Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Maak je social media content perfect met onze tools. Check of je video's binnen de safezones
				vallen, test hoe je links eruitzien op verschillende platforms, en zorg dat je bio's binnen
				de karakterlimieten blijven.
			</p>
		</div>
	</div>
</div>
