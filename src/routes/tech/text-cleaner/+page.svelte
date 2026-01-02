<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import TextCleaner from '$lib/components/tools/TextCleaner.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const toolMeta = getToolMeta('textCleaner', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/en/tech/text-cleaner"
	alternatePath="/tech/tekst-opschonen"
/>

<ToolSchema
	name="Text Cleaner"
	description={toolMeta.description}
	{lang}
	category="Tech"
	keywords={toolMeta.keywords}
	slug="en/tech/text-cleaner"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/en' },
			{ label: 'Tech', href: '/en/tech' },
			{ label: 'Text Cleaner' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Text Cleaner</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Remove markdown, HTML and other formatting from your text. Perfect for cleaning ChatGPT output, Notion exports or Word documents.
		</p>
	</header>

	<TextCleaner />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>How to use the text cleaner?</h2>
		<p>
			Paste your formatted text in the input field and select which formatting you want to remove.
			The tool automatically strips markdown syntax, HTML tags, bullet points and more.
		</p>

		<h3>Supported formats</h3>
		<ul>
			<li><strong>Markdown</strong> - Bold, italic, code, headers, links</li>
			<li><strong>HTML</strong> - Tags and entities</li>
			<li><strong>Bullets & numbering</strong> - List markers</li>
			<li><strong>Smart quotes</strong> - Converts to standard quotes</li>
		</ul>
	</section>
</div>
