<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'es';

	const tools = [
		{ slug: 'base64', name: 'Base64 Encoder/Decoder', description: 'Codificar o decodificar texto Base64', icon: '64' },
		{ slug: 'json-formatter', name: 'JSON Formatter', description: 'Formatear y validar JSON', icon: '{}' },
		{ slug: 'hash-generator', name: 'Hash Generator', description: 'Generar hashes MD5, SHA-256', icon: '#' },
		{ slug: 'uuid-generator', name: 'UUID Generator', description: 'Generar identificadores UUID v4 únicos', icon: 'id' },
		{ slug: 'url-encoder', name: 'URL Encoder/Decoder', description: 'Codificar o decodificar URLs', icon: '%' },
		{ slug: 'password-generator', name: 'Generador de Contraseñas', description: 'Generar contraseñas seguras', icon: '**' },
		{ slug: 'color-picker', name: 'Selector de Color', description: 'Convertidor de colores HEX, RGB, HSL', icon: '◉' },
		{ slug: 'qr-code-generator', name: 'Generador de QR', description: 'Crear códigos QR gratis', icon: '▣' },
		{ slug: 'tech/text-cleaner', name: 'Limpiador de Texto', description: 'Eliminar markdown y formato', icon: '✂' },
		{ slug: 'tech/sort-lines', name: 'Ordenar Líneas', description: 'Ordenar texto alfabéticamente', icon: 'AZ' },
		{ slug: 'tech/multi-line-editor', name: 'Editor Multilínea', description: 'Editar múltiples líneas a la vez', icon: '≡' },
		{ slug: 'token-counter', name: 'Contador de Tokens LLM', description: 'Contar tokens para GPT, Claude, etc.', icon: 'Tk', comingSoon: true }
	];
</script>

<SEOHead
	title="Tech Tools - Herramientas para Desarrolladores | IttyTools"
	description="Herramientas gratuitas para desarrolladores: Base64, JSON, Hash, UUID, contraseñas y más. Todas las herramientas funcionan localmente en tu navegador."
	{lang}
	canonicalPath="/es/tech"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Tech', href: '/es/tech' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">{'{ }'}</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Tech Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Herramientas para desarrolladores: codificación, hashing, formateo y más. Perfecto para programadores, webmasters y entusiastas de la tecnología.
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
							<span class="text-xs text-neutral-400 uppercase tracking-wider">Próximamente</span>
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Sobre Tech Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Nuestras herramientas tech están diseñadas para desarrolladores y cualquier persona que trabaje con datos.
				Desde codificar strings hasta generar contraseñas seguras - todas las herramientas funcionan
				directamente en tu navegador sin enviar datos a servidores.
			</p>
			<p class="mt-4">
				<strong>Privacidad primero:</strong> Toda la codificación, hashing y generación ocurre localmente.
				Tus datos nunca salen de tu navegador.
			</p>
		</div>
	</div>
</div>
