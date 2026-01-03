<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import SortLines from '$lib/components/tools/SortLines.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const toolMeta = getToolMeta('sortLines', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/tech/sort-lines"
	alternatePath="/tech/regels-sorteren"
/>

<ToolSchema
	name="Sort Lines"
	description={toolMeta.description}
	{lang}
	category="Tech"
	keywords={toolMeta.keywords}
	slug="en/tech/sort-lines"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/en' },
			{ label: 'Tech', href: '/en/tech' },
			{ label: 'Sort Lines' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Sort Lines</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Sort lines of text alphabetically or in reverse. Supports natural sorting for numbers and optional duplicate removal.
		</p>
	</header>

	<SortLines />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>How does the line sorter work?</h2>
		<p>
			Paste your multi-line text in the input field. Each line is treated as a separate item
			and sorted alphabetically.
		</p>

		<h3>Options</h3>
		<ul>
			<li><strong>Natural sorting</strong> - "Item 2" comes before "Item 10"</li>
			<li><strong>Remove duplicates</strong> - Keep only unique lines</li>
			<li><strong>Case sensitive</strong> - A-Z before a-z</li>
			<li><strong>Trim lines</strong> - Remove whitespace at start/end</li>
		</ul>
	</section>
</div>
