<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import TextCleaner from '$lib/components/tools/TextCleaner.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const toolMeta = getToolMeta('textCleaner', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/nl/tech/tekst-opschonen"
	alternatePath="/tech/text-cleaner"
/>

<ToolSchema
	name="Tekst Opschonen"
	description={toolMeta.description}
	{lang}
	category="Tech"
	keywords={toolMeta.keywords}
	slug="tech/tekst-opschonen"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Tech', href: '/tech' },
			{ label: 'Tekst Opschonen' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Tekst Opschonen</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Verwijder markdown, HTML en andere opmaak van je tekst. Perfect voor het opschonen van ChatGPT output, Notion exports of Word documenten.
		</p>
	</header>

	<TextCleaner />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Hoe gebruik je de tekst opschoner?</h2>
		<p>
			Plak je opgemaakte tekst in het invoerveld en selecteer welke opmaak je wilt verwijderen.
			De tool verwijdert automatisch markdown syntax, HTML tags, opsommingstekens en meer.
		</p>

		<h3>Ondersteunde formaten</h3>
		<ul>
			<li><strong>Markdown</strong> - Bold, italic, code, headers, links</li>
			<li><strong>HTML</strong> - Tags en entities</li>
			<li><strong>Bullets & nummering</strong> - Lijstmarkeringen</li>
			<li><strong>Smart quotes</strong> - Converteert naar standaard quotes</li>
		</ul>
	</section>
</div>
