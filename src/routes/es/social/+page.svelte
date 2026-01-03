<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'es';

	const tools = [
		{ slug: 'social/tiktok-safezone', name: 'TikTok Safezone', description: 'Verificar si el texto está en la zona segura', icon: '📱' },
		{ slug: 'social/bio-counter', name: 'Contador de Bio', description: 'Contar caracteres para bio de Instagram, Twitter', icon: '📝' },
		{ slug: 'social/og-image-tester', name: 'OG Image Tester', description: 'Probar vista previa en redes sociales', icon: '🖼' }
	];
</script>

<SEOHead
	title="Herramientas de Redes Sociales | IttyTools"
	description="Herramientas gratuitas para redes sociales: TikTok Safezone Checker, contador de caracteres de bio, OG Image Tester y más."
	{lang}
	canonicalPath="/es/social"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Social', href: '/es/social' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">@</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Herramientas de Redes Sociales
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Herramientas para creadores de contenido y gestores de redes sociales. Verificar safezones, optimizar longitud de bio y probar vistas previas.
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Sobre Herramientas de Redes Sociales</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Crea mejor contenido para redes sociales con nuestras herramientas gratuitas.
				Todas las verificaciones y cálculos se realizan localmente en tu navegador.
			</p>
		</div>
	</div>
</div>
