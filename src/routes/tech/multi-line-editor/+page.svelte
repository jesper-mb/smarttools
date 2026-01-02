<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import MultiLineEditor from '$lib/components/tools/MultiLineEditor.svelte';
	import { getToolMeta } from '$lib/seo/meta';

	const lang = 'en';
	const toolMeta = getToolMeta('multiLineEditor', lang)!;
</script>

<SEOHead
	title={toolMeta.title}
	description={toolMeta.description}
	{lang}
	canonicalPath="/en/tech/multi-line-editor"
	alternatePath="/tech/multi-line-editor"
/>

<ToolSchema
	name="Multi-Line Editor"
	description={toolMeta.description}
	{lang}
	category="Tech"
	keywords={toolMeta.keywords}
	slug="en/tech/multi-line-editor"
/>

<div class="max-w-5xl mx-auto px-4 py-8">
	<Breadcrumbs
		items={[
			{ label: 'Home', href: '/en' },
			{ label: 'Tech', href: '/en/tech' },
			{ label: 'Multi-Line Editor' }
		]}
	/>

	<header class="mb-8">
		<h1 class="text-4xl font-bold text-neutral-950 mb-2">Multi-Line Editor</h1>
		<p class="text-neutral-500 text-lg max-w-2xl">
			Edit multiple lines of text at once. Add prefix or suffix, search and replace, or number all lines automatically.
		</p>
	</header>

	<MultiLineEditor />

	<section class="mt-12 prose prose-neutral max-w-none">
		<h2>Bulk text editing</h2>
		<p>
			This tool applies the same operation to all lines in your text. Perfect for formatting
			lists, adding quotes, or bulk find & replace.
		</p>

		<h3>Available operations</h3>
		<ul>
			<li><strong>Prefix/Suffix</strong> - Add text to the start or end of each line</li>
			<li><strong>Find & Replace</strong> - Find and replace text across all lines</li>
			<li><strong>Wrap</strong> - Wrap lines with quotes, brackets, or HTML tags</li>
			<li><strong>Numbering</strong> - Add automatic line numbers</li>
			<li><strong>Remove prefix/suffix</strong> - Remove characters from start or end</li>
		</ul>
	</section>
</div>
