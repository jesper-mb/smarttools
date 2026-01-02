<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import MultiLineEditor from '$lib/components/tools/MultiLineEditor.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'nl';
	const toolMeta = getToolMeta('multiLineEditor', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/tech/multi-line-editor"
	alternatePath="/en/tech/multi-line-editor"
/>

<ToolSchema
	name="Multi-Line Editor"
	description={toolMeta.description}
	{lang}
	category="Tech"
	keywords={toolMeta.keywords}
	slug="tech/multi-line-editor"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/' },
			{ label: 'Tech', href: '/tech' },
			{ label: 'Multi-Line Editor' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Multi-Line Editor</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Bewerk meerdere regels tekst tegelijk. Voeg prefix of suffix toe, zoek en vervang, of nummer alle regels automatisch.
		</p>
	</header>

	<MultiLineEditor />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Bulk tekst bewerken</h2>
		<p>
			Deze tool past dezelfde bewerking toe op alle regels in je tekst. Perfect voor het formatteren
			van lijsten, toevoegen van quotes, of bulk find & replace.
		</p>

		<h3>Beschikbare bewerkingen</h3>
		<ul>
			<li><strong>Prefix/Suffix</strong> - Voeg tekst toe aan begin of eind van elke regel</li>
			<li><strong>Zoek & Vervang</strong> - Vind en vervang tekst in alle regels</li>
			<li><strong>Wrap</strong> - Omsluit regels met quotes, brackets, of HTML tags</li>
			<li><strong>Nummeren</strong> - Voeg automatische nummering toe</li>
			<li><strong>Verwijder prefix/suffix</strong> - Verwijder karakters van begin of eind</li>
		</ul>
	</section>
</div>
