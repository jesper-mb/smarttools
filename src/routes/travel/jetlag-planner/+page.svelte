<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import JetlagPlanner from '$lib/components/tools/JetlagPlanner.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const toolMeta = getToolMeta('jetlagPlanner', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/en/travel/jetlag-planner"
	alternatePath="/travel/jetlag-planner"
/>

<ToolSchema
	name="Jetlag Planner"
	description={toolMeta.description}
	{lang}
	category="Travel"
	keywords={toolMeta.keywords}
	slug="en/travel/jetlag-planner"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/en' },
			{ label: 'Travel', href: '/en/travel' },
			{ label: 'Jetlag Planner' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Jetlag Planner</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Plan your sleep schedule to minimize jetlag. Get personalized tips for eastward or westward travel.
		</p>
	</header>

	<JetlagPlanner />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>How does jetlag work?</h2>
		<p>
			Jetlag occurs when your biological clock is out of sync with local time.
			Your body typically needs 1 day per hour of time difference to adjust.
		</p>

		<h3>Tips to reduce jetlag</h3>
		<ul>
			<li>Start adjusting your sleep times a few days before departure</li>
			<li>Stay well hydrated during the flight</li>
			<li>Avoid alcohol and caffeine</li>
			<li>Seek daylight at your destination</li>
		</ul>
	</section>
</div>
