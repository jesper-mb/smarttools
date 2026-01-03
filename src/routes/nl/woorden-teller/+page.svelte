<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ToolSchema from '$lib/components/ToolSchema.svelte';
	import { Card } from '$lib/components/ui';
	import WordCounter from '$lib/components/tools/WordCounter.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import RelatedTools from '$lib/components/RelatedTools.svelte';
	import { getToolMeta } from '$lib/seo/meta';
	import { t } from '$lib/i18n';

	const lang = 'nl';
	const meta = getToolMeta('wordCounter', lang)!;
</script>

<SEOHead
	title={meta.title}
	description={meta.description}
	keywords={meta.keywords}
	{lang}
	canonicalPath="/woorden-teller"
	alternatePath="/word-counter"
/>

<ToolSchema
	name={meta.title}
	description={meta.description}
	url="https://smarttools.nl/woorden-teller"
/>

<div class="max-w-5xl mx-auto px-4 sm:px-6 py-12">
	<div class="mb-6">
		<Breadcrumbs items={[{ label: $t.tools.wordCounter.name }]} />
	</div>

	<div class="mb-8">
		<h1 class="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2 tracking-tight">
			{$t.tools.wordCounter.name}
		</h1>
		<p class="text-neutral-500 font-sans">
			{$t.tools.wordCounter.description}
		</p>
	</div>

	<Card class="mb-16 relative" fullscreen>
		<WordCounter />
	</Card>

	<div class="max-w-2xl space-y-8 font-sans">
		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">Hoe werkt het</h2>
			<p class="text-neutral-600 leading-relaxed">
				Plak of typ je tekst in het invoerveld en zie direct het aantal woorden, karakters, zinnen en paragrafen.
				De leestijd wordt berekend op basis van een gemiddelde leessnelheid van 200 woorden per minuut.
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 border-b-2 border-neutral-200 pb-2">FAQ</h2>
			<div class="space-y-4">
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">Hoe worden woorden geteld?</h3>
					<p class="text-neutral-600">
						Woorden worden gescheiden door spaties. Streepjes en andere leestekens binnen woorden
						(zoals "e-mail" of "it's") worden als één woord geteld.
					</p>
				</div>
				<div>
					<h3 class="font-bold text-neutral-950 mb-1">Werkt dit met alle talen?</h3>
					<p class="text-neutral-600">
						Ja, onze woorden teller werkt met alle talen die spaties gebruiken als woordscheiding,
						inclusief Nederlands, Engels, Duits, Frans en meer.
					</p>
				</div>
			</div>
		</section>

		<RelatedTools currentSlug="woorden-teller" category="counters" />
	</div>
</div>
