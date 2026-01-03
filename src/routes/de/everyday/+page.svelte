<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const lang = 'de';

	const tools = [
		{ slug: 'stopwatch', name: 'Stoppuhr', description: 'Online Stoppuhr mit Rundenzeiten', icon: '⏱' },
		{ slug: 'timer', name: 'Timer', description: 'Countdown-Timer mit Alarm', icon: '⏲' },
		{ slug: 'pomodoro', name: 'Pomodoro Timer', description: '25 Min Fokus, 5 Min Pause', icon: '🍅' },
		{ slug: 'word-counter', name: 'Wortzähler', description: 'Wörter, Zeichen und Sätze zählen', icon: 'Aa' },
		{ slug: 'character-counter', name: 'Zeichenzähler', description: 'Zeichen für Social Media zählen', icon: '#' },
		{ slug: 'click-counter', name: 'Klickzähler', description: 'Einfacher Zähler mit Tastatur', icon: '+1' },
		{ slug: 'percentage-calculator', name: 'Prozentrechner', description: 'Prozente schnell berechnen', icon: '%' },
		{ slug: 'age-calculator', name: 'Altersrechner', description: 'Genaues Alter berechnen', icon: '🎂' },
		{ slug: 'date-countdown', name: 'Datum-Countdown', description: 'Zu einem Datum herunterzählen', icon: '📅' }
	];
</script>

<SEOHead
	title="Alltags-Tools - Timer, Zähler & Rechner | IttyTools"
	description="Kostenlose Alltags-Tools: Stoppuhr, Timer, Wortzähler, Prozentrechner und mehr. Keine Registrierung erforderlich."
	{lang}
	canonicalPath="/de/everyday"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: 'Alltag', href: '/de/everyday' }]} />
	</div>

	<div class="mb-12">
		<div class="flex items-center gap-4 mb-4">
			<span class="text-4xl font-mono font-bold text-orange-600">○</span>
			<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
				Alltags-Tools
			</h1>
		</div>
		<p class="text-neutral-500 font-sans max-w-2xl">
			Praktische Tools für den täglichen Gebrauch. Timer, Zähler, Rechner und mehr - alles kostenlos und ohne Registrierung.
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
		<h2 class="text-xl font-bold text-neutral-950 mb-4">Über Alltags-Tools</h2>
		<div class="prose prose-neutral font-sans text-neutral-600 max-w-none">
			<p>
				Unsere Alltags-Tools helfen Ihnen bei täglichen Aufgaben. Ob Sie Zeit messen,
				Wörter zählen oder Prozente berechnen müssen - alle Tools sind sofort einsatzbereit.
			</p>
			<p class="mt-4">
				<strong>Tastenkürzel:</strong> Alle Tools unterstützen Tastenkürzel für schnellere Bedienung.
				Drücken Sie Leertaste zum Starten und R zum Zurücksetzen.
			</p>
		</div>
	</div>
</div>
