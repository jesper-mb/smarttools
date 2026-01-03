<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { getToolContent } from '$lib/i18n/toolContent';

	// Tool components
	import Stopwatch from '$lib/components/tools/Stopwatch.svelte';
	import Timer from '$lib/components/tools/Timer.svelte';
	import Pomodoro from '$lib/components/tools/Pomodoro.svelte';
	import WordCounter from '$lib/components/tools/WordCounter.svelte';
	import CharacterCounter from '$lib/components/tools/CharacterCounter.svelte';
	import ClickCounter from '$lib/components/tools/ClickCounter.svelte';
	import WheelSpinner from '$lib/components/tools/WheelSpinner.svelte';
	import DiceRoller from '$lib/components/tools/DiceRoller.svelte';
	import CoinFlip from '$lib/components/tools/CoinFlip.svelte';
	import RandomNumber from '$lib/components/tools/RandomNumber.svelte';
	import NamePicker from '$lib/components/tools/NamePicker.svelte';
	import PercentageCalculator from '$lib/components/tools/PercentageCalculator.svelte';
	import DateCountdown from '$lib/components/tools/DateCountdown.svelte';
	import Base64Tool from '$lib/components/tools/Base64Tool.svelte';
	import JsonFormatter from '$lib/components/tools/JsonFormatter.svelte';
	import ColorPicker from '$lib/components/tools/ColorPicker.svelte';
	import UuidGenerator from '$lib/components/tools/UuidGenerator.svelte';
	import PasswordGenerator from '$lib/components/tools/PasswordGenerator.svelte';
	import QrCodeGenerator from '$lib/components/tools/QrCodeGenerator.svelte';
	import AgeCalculator from '$lib/components/tools/AgeCalculator.svelte';
	import HashGenerator from '$lib/components/tools/HashGenerator.svelte';
	import UrlEncoder from '$lib/components/tools/UrlEncoder.svelte';
	import UnitConverter from '$lib/components/tools/UnitConverter.svelte';
	import TextCleaner from '$lib/components/tools/TextCleaner.svelte';
	import SortLines from '$lib/components/tools/SortLines.svelte';
	import MultiLineEditor from '$lib/components/tools/MultiLineEditor.svelte';

	let { data } = $props();

	const lang = 'es';
	const meta = getToolMeta(data.toolKey, lang)!;
	const content = getToolContent(data.toolKey, lang);

	// Map slug to component
	const components: Record<string, any> = {
		'stopwatch': Stopwatch,
		'timer': Timer,
		'pomodoro': Pomodoro,
		'word-counter': WordCounter,
		'character-counter': CharacterCounter,
		'click-counter': ClickCounter,
		'wheel-spinner': WheelSpinner,
		'dice-roller': DiceRoller,
		'coin-flip': CoinFlip,
		'random-number': RandomNumber,
		'name-picker': NamePicker,
		'percentage-calculator': PercentageCalculator,
		'date-countdown': DateCountdown,
		'base64': Base64Tool,
		'json-formatter': JsonFormatter,
		'color-picker': ColorPicker,
		'uuid-generator': UuidGenerator,
		'password-generator': PasswordGenerator,
		'qr-code-generator': QrCodeGenerator,
		'age-calculator': AgeCalculator,
		'hash-generator': HashGenerator,
		'url-encoder': UrlEncoder,
		'unit-converter': UnitConverter,
		'text-cleaner': TextCleaner,
		'sort-lines': SortLines,
		'multi-line-editor': MultiLineEditor
	};

	const ToolComponent = components[data.slug];

	// Extract title without site name for h1
	const toolName = meta.title.split(' - ')[0];
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/es/{data.slug}"
	alternatePath="/{data.slug}"
/>
<ToolSchema name={meta.title} description={meta.description} url="https://ittytools.com/es/{data.slug}" />

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: toolName }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">{toolName}</h1>
		<p class="text-neutral-500 font-sans">{meta.description}</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<ToolComponent />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		{#if content?.sections?.howItWorks}
			<section>
				<h2 class="section-header">{content.sections.howItWorks.title}</h2>
				<p class="faq-answer">{content.sections.howItWorks.content}</p>
			</section>
		{/if}

		{#if content?.sections?.faq?.items && content.sections.faq.items.length > 0}
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

		<RelatedTools currentSlug={data.slug} category="calculators" />
	</div>
</div>
