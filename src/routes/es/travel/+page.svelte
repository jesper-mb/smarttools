<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'es';

	const tools = [
		{ slug: 'travel/luggage-size', name: 'Tamaños de Equipaje', description: 'Verificar tamaños de equipaje de mano por aerolínea', icon: '🧳' },
		{ slug: 'travel/jetlag-planner', name: 'Planificador de Jetlag', description: 'Plan de sueño para cambios de zona horaria', icon: '✈️' }
	];
</script>

<SEOHead
	title="Herramientas de Viaje - Equipaje y Jetlag | IttyTools"
	description="Herramientas gratuitas de viaje: verificar tamaños de equipaje, planificar jetlag y más. Perfectas para tu próximo viaje."
	{lang}
	canonicalPath="/es/travel"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Viajes', href: '/es/travel' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">-&gt;</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Herramientas de Viaje
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Herramientas prácticas para viajeros. Verificar tamaños de equipaje, planificar jetlag y más.
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Sobre Herramientas de Viaje</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Planifica tu viaje con nuestras herramientas gratuitas.
				Verifica tamaños de equipaje para diferentes aerolíneas y planifica tu ritmo de sueño para vuelos de larga distancia.
			</p>
		</div>
	</div>
</div>
