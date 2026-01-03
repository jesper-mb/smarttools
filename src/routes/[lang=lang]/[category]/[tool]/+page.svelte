<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta, getCategoryMeta } from '$lib/seo/meta';
	import { getToolContent, getCommonLabels } from '$lib/i18n/toolContent';
	import { getToolPath, getCategoryPath, getToolAlternateUrls } from '$lib/config';
	import { toolComponents } from '$lib/components/tools';
	import { t } from '$lib/i18n';

	interface Props {
		data: {
			lang: 'en' | 'nl' | 'de' | 'es';
			categoryKey: string;
			toolKey: string;
			toolSlug: string;
			categorySlug: string;
		};
	}

	let { data }: Props = $props();

	// Use $derived for reactive values
	let lang = $derived(data.lang);
	let categoryKey = $derived(data.categoryKey);
	let toolKey = $derived(data.toolKey);
	let toolSlug = $derived(data.toolSlug);
	let categorySlug = $derived(data.categorySlug);

	// Get metadata - all derived
	let meta = $derived(getToolMeta(toolKey, lang)!);
	let categoryMeta = $derived(getCategoryMeta(categoryKey, lang)!);
	let content = $derived(getToolContent(toolKey, lang));
	let labels = $derived(getCommonLabels(lang));

	// Get paths - all derived
	let canonicalPath = $derived(getToolPath(toolKey, lang));
	let categoryPath = $derived(getCategoryPath(categoryKey as any, lang));
	let alternateUrls = $derived(getToolAlternateUrls(toolKey));

	// Load tool component - derived
	let componentLoader = $derived(toolComponents[toolKey]);
	let componentPromise = $derived(componentLoader ? componentLoader() : Promise.resolve(null));

	// Get tool name from translations or meta
	let toolName = $derived.by(() => {
		const toolTranslations = ($t as any).tools?.[toolKey];
		if (toolTranslations?.name) return toolTranslations.name;
		return meta.title.split(' - ')[0];
	});

	// Get tool description from translations or meta
	let toolDescription = $derived.by(() => {
		const toolTranslations = ($t as any).tools?.[toolKey];
		if (toolTranslations?.description) return toolTranslations.description;
		return meta.description;
	});
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	{canonicalPath}
	{alternateUrls}
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://ittytools.com{canonicalPath}"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs
			items={[
				{ label: categoryMeta.name, href: categoryPath },
				{ label: toolName }
			]}
		/>
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{toolName}
		</h1>
		<p class="text-neutral-500 font-sans">
			{toolDescription}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		{#await componentPromise}
			<div class="flex items-center justify-center p-12">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900"></div>
			</div>
		{:then module}
			{#if module}
				<svelte:component this={module.default} />
			{:else}
				<div class="p-8 text-center text-neutral-500">Tool component not found</div>
			{/if}
		{:catch}
			<div class="p-8 text-center text-red-500">Failed to load tool</div>
		{/await}
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		{#if content}
			<section>
				<h2 class="section-header">{content.sections.howItWorks.title}</h2>
				<p class="text-neutral-600 leading-relaxed">
					{content.sections.howItWorks.content}
				</p>
			</section>

			{#if content.sections.shortcuts.items.length > 0}
				<section>
					<h2 class="section-header">{content.sections.shortcuts.title}</h2>
					<div class="flex flex-wrap gap-4">
						{#each content.sections.shortcuts.items as shortcut}
							<div class="flex items-center gap-2">
								<kbd class="px-2 py-1 bg-neutral-100 rounded text-sm font-mono">{shortcut.key}</kbd>
								<span class="text-neutral-600">{shortcut.action}</span>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			{#if content.sections.faq.items.length > 0}
				<section>
					<h2 class="section-header">{content.sections.faq.title}</h2>
					<div class="space-y-4">
						{#each content.sections.faq.items as item}
							<div>
								<h3 class="faq-question">{item.question}</h3>
								<p class="faq-answer">{item.answer}</p>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		{/if}

		<RelatedTools currentToolKey={toolKey} category={categoryKey as 'everyday' | 'tech' | 'social' | 'travel'} />
	</div>
</div>
