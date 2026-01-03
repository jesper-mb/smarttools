<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'de';

	const tools = [
		{ slug: 'base64', name: 'Base64 Encoder/Decoder', description: 'Base64 Text kodieren oder dekodieren', icon: '64' },
		{ slug: 'json-formatter', name: 'JSON Formatter', description: 'JSON formatieren und validieren', icon: '{}' },
		{ slug: 'hash-generator', name: 'Hash Generator', description: 'MD5, SHA-256 Hashes generieren', icon: '#' },
		{ slug: 'uuid-generator', name: 'UUID Generator', description: 'Einzigartige UUID v4 Identifikatoren generieren', icon: 'id' },
		{ slug: 'url-encoder', name: 'URL Encoder/Decoder', description: 'URLs kodieren oder dekodieren', icon: '%' },
		{ slug: 'password-generator', name: 'Passwort Generator', description: 'Sichere Passwörter generieren', icon: '**' },
		{ slug: 'color-picker', name: 'Farbwähler', description: 'HEX, RGB, HSL Farbkonverter', icon: '◉' },
		{ slug: 'qr-code-generator', name: 'QR-Code Generator', description: 'Kostenlose QR-Codes erstellen', icon: '▣' },
		{ slug: 'tech/text-cleaner', name: 'Text Bereiniger', description: 'Markdown und Formatierung entfernen', icon: '✂' },
		{ slug: 'tech/sort-lines', name: 'Zeilen Sortieren', description: 'Text alphabetisch sortieren', icon: 'AZ' },
		{ slug: 'tech/multi-line-editor', name: 'Mehrzeilen-Editor', description: 'Mehrere Zeilen gleichzeitig bearbeiten', icon: '≡' },
		{ slug: 'token-counter', name: 'LLM Token Zähler', description: 'Tokens für GPT, Claude, etc. zählen', icon: 'Tk', comingSoon: true }
	];
</script>

<SEOHead
	title="Tech Tools - Entwickler-Werkzeuge | IttyTools"
	description="Kostenlose Entwickler-Tools: Base64, JSON, Hash, UUID, Passwörter und mehr. Alle Tools laufen lokal in Ihrem Browser."
	{lang}
	canonicalPath="/de/tech"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Tech', href: '/de/tech' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">{'{ }'}</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Tech Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Entwickler-Tools für Kodierung, Hashing, Formatierung und mehr. Perfekt für Programmierer, Webmaster und Tech-Enthusiasten.
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
							<span class="text-xs text-neutral-400 uppercase tracking-wider">Demnächst</span>
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Über Tech Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Unsere Tech-Tools sind für Entwickler und alle konzipiert, die mit Daten arbeiten.
				Von der Kodierung von Strings bis zur Generierung sicherer Passwörter - alle Tools
				funktionieren direkt in Ihrem Browser ohne Daten an Server zu senden.
			</p>
			<p class="mt-4">
				<strong>Datenschutz zuerst:</strong> Alle Kodierung, Hashing und Generierung erfolgt lokal.
				Ihre Daten verlassen nie Ihren Browser.
			</p>
		</div>
	</div>
</div>
