<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { categories } from '$lib/seo/meta';

	const lang = 'en';
	const category = categories.tech[lang];

	const tools = [
		{ slug: 'base64', name: 'Base64 Encoder/Decoder', description: 'Encode or decode Base64 text', icon: '64' },
		{ slug: 'json-formatter', name: 'JSON Formatter', description: 'Format and validate JSON', icon: '{}' },
		{ slug: 'hash-generator', name: 'Hash Generator', description: 'Generate MD5, SHA-256 hashes', icon: '#' },
		{ slug: 'uuid-generator', name: 'UUID Generator', description: 'Generate unique UUID v4 identifiers', icon: 'id' },
		{ slug: 'url-encoder', name: 'URL Encoder/Decoder', description: 'Encode or decode URLs', icon: '%' },
		{ slug: 'password-generator', name: 'Password Generator', description: 'Generate strong passwords', icon: '**' },
		{ slug: 'color-picker', name: 'Color Picker', description: 'HEX, RGB, HSL color converter', icon: '◉' },
		{ slug: 'qr-code-generator', name: 'QR Code Generator', description: 'Create free QR codes', icon: '▣' },
		{ slug: 'tech/text-cleaner', name: 'Text Cleaner', description: 'Remove markdown and formatting', icon: '✂' },
		{ slug: 'tech/sort-lines', name: 'Sort Lines', description: 'Sort text alphabetically', icon: 'AZ' },
		{ slug: 'tech/multi-line-editor', name: 'Multi-Line Editor', description: 'Edit multiple lines at once', icon: '≡' },
		{ slug: 'token-counter', name: 'LLM Token Counter', description: 'Count tokens for GPT, Claude, etc.', icon: 'Tk', comingSoon: true }
	];
</script>

<SEOHead
	title={category.title}
	description={category.description}
	{lang}
	canonicalPath="/tech"
	alternatePath="/nl/tech"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Tech', href: '/tech' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">{'{ }'}</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Tech Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Developer tools for encoding, hashing, formatting and more. Perfect for programmers, webmasters and tech enthusiasts.
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
							<span class="text-xs text-neutral-400 uppercase tracking-wider">Coming soon</span>
						</div>
					</div>
				</div>
			{:else}
				<a href="/{tool.slug}" class="group p-6 border-2 border-neutral-200 hover:border-neutral-950 bg-white transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">About Tech Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Our tech tools are designed for developers and anyone working with data.
				From encoding strings to generating secure passwords - all tools work directly
				in your browser without sending data to servers.
			</p>
			<p class="mt-4">
				<strong>Privacy first:</strong> All encoding, hashing and generation happens locally.
				Your data never leaves your browser.
			</p>
		</div>
	</div>
</div>
