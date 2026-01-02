<script lang="ts">
	import { currentLang } from '$lib/i18n';

	let lang = $derived($currentLang);
	let category = $state<'length' | 'weight' | 'temperature' | 'area' | 'volume' | 'speed' | 'data'>('length');
	let fromUnit = $state('');
	let toUnit = $state('');
	let fromValue = $state(1);
	let result = $state<number | null>(null);

	interface Unit {
		id: string;
		name: { nl: string; en: string };
		toBase: (val: number) => number;
		fromBase: (val: number) => number;
	}

	const units: Record<string, Unit[]> = {
		length: [
			{ id: 'mm', name: { nl: 'Millimeter', en: 'Millimeter' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
			{ id: 'cm', name: { nl: 'Centimeter', en: 'Centimeter' }, toBase: v => v / 100, fromBase: v => v * 100 },
			{ id: 'm', name: { nl: 'Meter', en: 'Meter' }, toBase: v => v, fromBase: v => v },
			{ id: 'km', name: { nl: 'Kilometer', en: 'Kilometer' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
			{ id: 'in', name: { nl: 'Inch', en: 'Inch' }, toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
			{ id: 'ft', name: { nl: 'Voet', en: 'Foot' }, toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
			{ id: 'yd', name: { nl: 'Yard', en: 'Yard' }, toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
			{ id: 'mi', name: { nl: 'Mijl', en: 'Mile' }, toBase: v => v * 1609.344, fromBase: v => v / 1609.344 }
		],
		weight: [
			{ id: 'mg', name: { nl: 'Milligram', en: 'Milligram' }, toBase: v => v / 1000000, fromBase: v => v * 1000000 },
			{ id: 'g', name: { nl: 'Gram', en: 'Gram' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
			{ id: 'kg', name: { nl: 'Kilogram', en: 'Kilogram' }, toBase: v => v, fromBase: v => v },
			{ id: 't', name: { nl: 'Ton', en: 'Ton' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
			{ id: 'oz', name: { nl: 'Ounce', en: 'Ounce' }, toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495 },
			{ id: 'lb', name: { nl: 'Pond', en: 'Pound' }, toBase: v => v * 0.453592, fromBase: v => v / 0.453592 },
			{ id: 'st', name: { nl: 'Stone', en: 'Stone' }, toBase: v => v * 6.35029, fromBase: v => v / 6.35029 }
		],
		temperature: [
			{ id: 'c', name: { nl: 'Celsius', en: 'Celsius' }, toBase: v => v, fromBase: v => v },
			{ id: 'f', name: { nl: 'Fahrenheit', en: 'Fahrenheit' }, toBase: v => (v - 32) * 5/9, fromBase: v => v * 9/5 + 32 },
			{ id: 'k', name: { nl: 'Kelvin', en: 'Kelvin' }, toBase: v => v - 273.15, fromBase: v => v + 273.15 }
		],
		area: [
			{ id: 'mm2', name: { nl: 'mm²', en: 'mm²' }, toBase: v => v / 1000000, fromBase: v => v * 1000000 },
			{ id: 'cm2', name: { nl: 'cm²', en: 'cm²' }, toBase: v => v / 10000, fromBase: v => v * 10000 },
			{ id: 'm2', name: { nl: 'm²', en: 'm²' }, toBase: v => v, fromBase: v => v },
			{ id: 'ha', name: { nl: 'Hectare', en: 'Hectare' }, toBase: v => v * 10000, fromBase: v => v / 10000 },
			{ id: 'km2', name: { nl: 'km²', en: 'km²' }, toBase: v => v * 1000000, fromBase: v => v / 1000000 },
			{ id: 'in2', name: { nl: 'in²', en: 'in²' }, toBase: v => v * 0.00064516, fromBase: v => v / 0.00064516 },
			{ id: 'ft2', name: { nl: 'ft²', en: 'ft²' }, toBase: v => v * 0.092903, fromBase: v => v / 0.092903 },
			{ id: 'ac', name: { nl: 'Acre', en: 'Acre' }, toBase: v => v * 4046.86, fromBase: v => v / 4046.86 }
		],
		volume: [
			{ id: 'ml', name: { nl: 'Milliliter', en: 'Milliliter' }, toBase: v => v / 1000, fromBase: v => v * 1000 },
			{ id: 'l', name: { nl: 'Liter', en: 'Liter' }, toBase: v => v, fromBase: v => v },
			{ id: 'm3', name: { nl: 'm³', en: 'm³' }, toBase: v => v * 1000, fromBase: v => v / 1000 },
			{ id: 'gal', name: { nl: 'Gallon (US)', en: 'Gallon (US)' }, toBase: v => v * 3.78541, fromBase: v => v / 3.78541 },
			{ id: 'qt', name: { nl: 'Quart', en: 'Quart' }, toBase: v => v * 0.946353, fromBase: v => v / 0.946353 },
			{ id: 'pt', name: { nl: 'Pint', en: 'Pint' }, toBase: v => v * 0.473176, fromBase: v => v / 0.473176 },
			{ id: 'cup', name: { nl: 'Cup', en: 'Cup' }, toBase: v => v * 0.236588, fromBase: v => v / 0.236588 },
			{ id: 'floz', name: { nl: 'Fl. Ounce', en: 'Fl. Ounce' }, toBase: v => v * 0.0295735, fromBase: v => v / 0.0295735 }
		],
		speed: [
			{ id: 'mps', name: { nl: 'm/s', en: 'm/s' }, toBase: v => v, fromBase: v => v },
			{ id: 'kmh', name: { nl: 'km/h', en: 'km/h' }, toBase: v => v / 3.6, fromBase: v => v * 3.6 },
			{ id: 'mph', name: { nl: 'mph', en: 'mph' }, toBase: v => v * 0.44704, fromBase: v => v / 0.44704 },
			{ id: 'kn', name: { nl: 'Knoop', en: 'Knot' }, toBase: v => v * 0.514444, fromBase: v => v / 0.514444 },
			{ id: 'fps', name: { nl: 'ft/s', en: 'ft/s' }, toBase: v => v * 0.3048, fromBase: v => v / 0.3048 }
		],
		data: [
			{ id: 'b', name: { nl: 'Bytes', en: 'Bytes' }, toBase: v => v, fromBase: v => v },
			{ id: 'kb', name: { nl: 'Kilobytes', en: 'Kilobytes' }, toBase: v => v * 1024, fromBase: v => v / 1024 },
			{ id: 'mb', name: { nl: 'Megabytes', en: 'Megabytes' }, toBase: v => v * 1048576, fromBase: v => v / 1048576 },
			{ id: 'gb', name: { nl: 'Gigabytes', en: 'Gigabytes' }, toBase: v => v * 1073741824, fromBase: v => v / 1073741824 },
			{ id: 'tb', name: { nl: 'Terabytes', en: 'Terabytes' }, toBase: v => v * 1099511627776, fromBase: v => v / 1099511627776 }
		]
	};

	const categoryNames: Record<string, { nl: string; en: string }> = {
		length: { nl: 'Lengte', en: 'Length' },
		weight: { nl: 'Gewicht', en: 'Weight' },
		temperature: { nl: 'Temperatuur', en: 'Temperature' },
		area: { nl: 'Oppervlakte', en: 'Area' },
		volume: { nl: 'Volume', en: 'Volume' },
		speed: { nl: 'Snelheid', en: 'Speed' },
		data: { nl: 'Data', en: 'Data' }
	};

	// Initialize units when category changes
	$effect(() => {
		if (units[category]) {
			fromUnit = units[category][0].id;
			toUnit = units[category][1]?.id || units[category][0].id;
		}
	});

	// Calculate result
	$effect(() => {
		if (!fromUnit || !toUnit) {
			result = null;
			return;
		}

		const fromUnitDef = units[category].find(u => u.id === fromUnit);
		const toUnitDef = units[category].find(u => u.id === toUnit);

		if (fromUnitDef && toUnitDef) {
			const baseValue = fromUnitDef.toBase(fromValue);
			result = toUnitDef.fromBase(baseValue);
		}
	});

	function swapUnits() {
		const temp = fromUnit;
		fromUnit = toUnit;
		toUnit = temp;
	}

	function formatResult(num: number): string {
		if (Math.abs(num) >= 1000000 || (Math.abs(num) < 0.0001 && num !== 0)) {
			return num.toExponential(6);
		}
		return num.toLocaleString(lang, { maximumFractionDigits: 10 });
	}
</script>

<div class="flex flex-col gap-6">
	<!-- Category selector -->
	<div class="flex flex-wrap justify-center gap-2">
		{#each Object.keys(units) as cat}
			<button
				onclick={() => category = cat as typeof category}
				class="px-3 py-1.5 text-sm border-2 transition-all {category === cat ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 hover:border-neutral-950'}"
			>
				{categoryNames[cat][lang]}
			</button>
		{/each}
	</div>

	<!-- Converter -->
	<div class="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
		<!-- From -->
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{lang === 'nl' ? 'Van' : 'From'}
			</label>
			<div class="flex gap-2">
				<input
					type="number"
					bind:value={fromValue}
					class="flex-1 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 font-mono text-lg"
					step="any"
				/>
				<select
					bind:value={fromUnit}
					class="px-3 py-3 border-2 border-neutral-200 focus:border-neutral-950 bg-white"
				>
					{#each units[category] as unit}
						<option value={unit.id}>{unit.name[lang]}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Swap button -->
		<button
			onclick={swapUnits}
			class="p-3 border-2 border-neutral-200 hover:border-neutral-950 transition-colors self-end"
			title={lang === 'nl' ? 'Omwisselen' : 'Swap'}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M7 16V4M7 4L3 8M7 4l4 4M17 8v12m0 0 4-4m-4 4-4-4"/>
			</svg>
		</button>

		<!-- To -->
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{lang === 'nl' ? 'Naar' : 'To'}
			</label>
			<div class="flex gap-2">
				<div class="flex-1 px-4 py-3 border-2 border-neutral-200 bg-neutral-50 font-mono text-lg tabular-nums overflow-x-auto">
					{result !== null ? formatResult(result) : '-'}
				</div>
				<select
					bind:value={toUnit}
					class="px-3 py-3 border-2 border-neutral-200 focus:border-neutral-950 bg-white"
				>
					{#each units[category] as unit}
						<option value={unit.id}>{unit.name[lang]}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<!-- Result display -->
	{#if result !== null}
		<div class="text-center p-6 border-2 border-neutral-950 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
			<div class="text-sm text-neutral-500 mb-2">
				{fromValue} {units[category].find(u => u.id === fromUnit)?.name[lang]} =
			</div>
			<div class="text-3xl font-bold text-orange-600 tabular-nums">
				{formatResult(result)} {units[category].find(u => u.id === toUnit)?.name[lang]}
			</div>
		</div>
	{/if}

	<!-- Quick conversions for the current pair -->
	{#if result !== null}
		<div class="text-center text-sm text-neutral-500">
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
				{#each [1, 10, 100, 1000] as val}
					<button
						onclick={() => fromValue = val}
						class="px-3 py-2 border-2 border-neutral-200 hover:border-neutral-950 transition-colors {fromValue === val ? 'border-neutral-950 bg-neutral-100' : ''}"
					>
						{val} {units[category].find(u => u.id === fromUnit)?.id}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
