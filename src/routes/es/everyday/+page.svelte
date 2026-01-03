<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'es';

	const tools = [
		{ slug: 'stopwatch', name: 'Cronómetro', description: 'Cronómetro online con tiempos de vuelta', icon: '⏱' },
		{ slug: 'timer', name: 'Temporizador', description: 'Temporizador con alarma', icon: '⏲' },
		{ slug: 'pomodoro', name: 'Pomodoro Timer', description: '25 min enfoque, 5 min descanso', icon: '🍅' },
		{ slug: 'word-counter', name: 'Contador de Palabras', description: 'Contar palabras, caracteres y oraciones', icon: 'Aa' },
		{ slug: 'character-counter', name: 'Contador de Caracteres', description: 'Contar caracteres para redes sociales', icon: '#' },
		{ slug: 'click-counter', name: 'Contador de Clics', description: 'Contador simple con teclado', icon: '+1' },
		{ slug: 'percentage-calculator', name: 'Calculadora de Porcentajes', description: 'Calcular porcentajes rápidamente', icon: '%' },
		{ slug: 'age-calculator', name: 'Calculadora de Edad', description: 'Calcular edad exacta', icon: '🎂' },
		{ slug: 'date-countdown', name: 'Cuenta Regresiva', description: 'Cuenta regresiva hasta una fecha', icon: '📅' }
	];
</script>

<SEOHead
	title="Herramientas Cotidianas - Temporizadores, Contadores | IttyTools"
	description="Herramientas gratuitas para el día a día: cronómetro, temporizador, contador de palabras, calculadora de porcentajes y más."
	{lang}
	canonicalPath="/es/everyday"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Cotidiano', href: '/es/everyday' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">○</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Herramientas Cotidianas
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Herramientas prácticas para el uso diario. Temporizadores, contadores, calculadoras y más - todo gratis y sin registro.
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Sobre Herramientas Cotidianas</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Nuestras herramientas cotidianas te ayudan con tareas diarias. Ya sea que necesites medir tiempo,
				contar palabras o calcular porcentajes - todas las herramientas están listas para usar.
			</p>
			<p class="mt-4">
				<strong>Atajos de teclado:</strong> Todas las herramientas soportan atajos para una operación más rápida.
				Presiona Espacio para iniciar y R para reiniciar.
			</p>
		</div>
	</div>
</div>
