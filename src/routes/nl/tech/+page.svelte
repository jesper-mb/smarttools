<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { categories } from '$lib/seo/meta';

	const lang = 'nl';
	const category = categories.tech[lang];

	const tools = [
		{ slug: 'base64', name: 'Base64 Encoder/Decoder', description: 'Encodeer of decodeer Base64 tekst', icon: '64' },
		{ slug: 'json-formatter', name: 'JSON Formatter', description: 'Formatteer en valideer JSON', icon: '{}' },
		{ slug: 'hash-generator', name: 'Hash Generator', description: 'Genereer MD5, SHA-256 hashes', icon: '#' },
		{ slug: 'uuid-generator', name: 'UUID Generator', description: 'Genereer unieke UUID v4 identifiers', icon: 'id' },
		{ slug: 'url-encoder', name: 'URL Encoder/Decoder', description: 'Encodeer of decodeer URLs', icon: '%' },
		{ slug: 'wachtwoord-generator', name: 'Wachtwoord Generator', description: 'Genereer sterke wachtwoorden', icon: '**' },
		{ slug: 'kleur-picker', name: 'Kleur Picker', description: 'HEX, RGB, HSL kleur converter', icon: '◉' },
		{ slug: 'qr-code-generator', name: 'QR Code Generator', description: 'Maak gratis QR codes', icon: '▣' },
		{ slug: 'tech/tekst-opschonen', name: 'Tekst Opschonen', description: 'Verwijder markdown en opmaak', icon: '✂' },
		{ slug: 'tech/regels-sorteren', name: 'Regels Sorteren', description: 'Sorteer tekst alfabetisch', icon: 'AZ' },
		{ slug: 'tech/multi-line-editor', name: 'Multi-Line Editor', description: 'Bewerk meerdere regels tegelijk', icon: '≡' },
		{ slug: 'token-counter', name: 'LLM Token Counter', description: 'Tel tokens voor GPT, Claude, etc.', icon: 'Tk', comingSoon: true }
	];
</script>

<SEOHead
	title={category.title}
	description={category.description}
	{lang}
	canonicalPath="/nl/tech"
	alternatePath="/tech"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Tech', href: '/nl/tech' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">{'{ }'}</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Tech Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Developer tools voor encoding, hashing, formatting en meer. Perfect voor programmeurs, webmasters en tech enthousiastelingen.
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
				<a href="/nl/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-neutral-950 bg-white transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
					<div class="flex items-start gap-3">
						<span class="text-2xl font-mono font-bold text-neutral-400 group-hover:text-orange-600">{tool.icon}</span>
						<div class="flex-1">
							<h2 class="font-bold text-neutral-950 mb-1 group-hover:text-orange-600">{tool.name}</h2>
							<p class="text-sm text-neutral-500">{tool.description}</p>
						</div>
					</div>
				</a>
			{/if}
		{/each}
	</div>

	<div class="mt-16 p-8 bg-neutral-50 border-2 border-neutral-200">
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Over Tech Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Onze tech tools zijn ontworpen voor developers en iedereen die met data werkt.
				Van het encoderen van strings tot het genereren van veilige wachtwoorden - alle tools
				werken direct in je browser zonder data naar servers te sturen.
			</p>
			<p class="mt-4">
				<strong>Privacy first:</strong> Alle encoding, hashing en generatie gebeurt lokaal.
				Je data verlaat nooit je browser.
			</p>
		</div>
	</div>
</div>
