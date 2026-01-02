<script lang="ts">
	import { t } from '$lib/i18n';

	type LuggageType = 'cabin' | 'medium' | 'large' | 'custom';

	let selectedTypes = $state<LuggageType[]>(['cabin', 'medium']);
	let showDimensions = $state(true);
	let customHeight = $state(70);
	let customWidth = $state(45);
	let customDepth = $state(25);

	// Luggage specifications (in cm)
	const luggageSizes: Record<LuggageType, { name: string; height: number; width: number; depth: number; capacity: string; airlines: string; color: string }> = {
		cabin: {
			name: 'Cabin / Carry-on',
			height: 55,
			width: 40,
			depth: 20,
			capacity: '30-40L',
			airlines: 'Most airlines allow this size',
			color: 'bg-blue-500'
		},
		medium: {
			name: 'Medium Check-in',
			height: 68,
			width: 45,
			depth: 28,
			capacity: '60-80L',
			airlines: 'Standard checked bag',
			color: 'bg-green-500'
		},
		large: {
			name: 'Large Check-in',
			height: 77,
			width: 52,
			depth: 30,
			capacity: '90-120L',
			airlines: 'May incur oversize fees',
			color: 'bg-orange-500'
		},
		custom: {
			name: 'Custom Size',
			height: customHeight,
			width: customWidth,
			depth: customDepth,
			capacity: 'Custom',
			airlines: 'Check airline rules',
			color: 'bg-purple-500'
		}
	};

	// Calculate visual scale (1cm = 3px for visualization)
	const scale = 3;
	const maxHeight = 80 * scale; // Max visual height

	function toggleType(type: LuggageType) {
		if (selectedTypes.includes(type)) {
			selectedTypes = selectedTypes.filter(t => t !== type);
		} else {
			selectedTypes = [...selectedTypes, type];
		}
	}

	function getVolume(type: LuggageType) {
		const size = type === 'custom'
			? { height: customHeight, width: customWidth, depth: customDepth }
			: luggageSizes[type];
		return Math.round((size.height * size.width * size.depth) / 1000);
	}

	// Airline limits
	const airlines = [
		{ name: 'Ryanair', cabin: '40×20×25', checked: '81×119×119' },
		{ name: 'EasyJet', cabin: '45×36×20', checked: '275cm total' },
		{ name: 'KLM', cabin: '55×35×25', checked: '158cm total' },
		{ name: 'Lufthansa', cabin: '55×40×23', checked: '158cm total' },
		{ name: 'British Airways', cabin: '56×45×25', checked: '90×75×43' },
		{ name: 'Emirates', cabin: '55×38×20', checked: '150cm total' }
	];
</script>

<div class="space-y-8">
	<!-- Size Selector -->
	<div>
		<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Select Sizes to Compare</label>
		<div class="flex flex-wrap gap-2">
			{#each Object.entries(luggageSizes) as [key, size]}
				<button
					onclick={() => toggleType(key as LuggageType)}
					class="px-4 py-2 text-sm font-medium border-2 transition-colors {selectedTypes.includes(key as LuggageType) ? `border-neutral-950 ${size.color} text-white` : 'border-neutral-200 hover:border-neutral-400'}"
				>
					{size.name}
				</button>
			{/each}
		</div>
	</div>

	<!-- Custom Size Input -->
	{#if selectedTypes.includes('custom')}
		<div class="p-4 bg-purple-50 border-2 border-purple-200">
			<h3 class="font-bold text-sm mb-3">Custom Dimensions (cm)</h3>
			<div class="grid grid-cols-3 gap-4">
				<div>
					<label class="text-xs text-neutral-500">Height</label>
					<input type="number" bind:value={customHeight} min="20" max="100" class="w-full mt-1 px-3 py-2 border-2 border-neutral-200 focus:border-purple-500 outline-none" />
				</div>
				<div>
					<label class="text-xs text-neutral-500">Width</label>
					<input type="number" bind:value={customWidth} min="20" max="80" class="w-full mt-1 px-3 py-2 border-2 border-neutral-200 focus:border-purple-500 outline-none" />
				</div>
				<div>
					<label class="text-xs text-neutral-500">Depth</label>
					<input type="number" bind:value={customDepth} min="10" max="50" class="w-full mt-1 px-3 py-2 border-2 border-neutral-200 focus:border-purple-500 outline-none" />
				</div>
			</div>
		</div>
	{/if}

	<!-- Visual Comparison -->
	<div class="p-6 bg-neutral-50 border-2 border-neutral-200">
		<div class="flex items-end justify-center gap-8" style="min-height: {maxHeight + 50}px">
			{#each selectedTypes as type}
				{@const size = type === 'custom' ? { ...luggageSizes.custom, height: customHeight, width: customWidth, depth: customDepth } : luggageSizes[type]}
				<div class="flex flex-col items-center">
					<!-- Suitcase visualization -->
					<div class="relative" style="width: {size.width * scale}px; height: {size.height * scale}px;">
						<!-- Main body -->
						<div
							class="{luggageSizes[type].color} rounded-lg border-4 border-neutral-800 relative"
							style="width: 100%; height: 100%;"
						>
							<!-- Handle -->
							<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-neutral-700 rounded-t"></div>

							<!-- Wheels -->
							<div class="absolute -bottom-2 left-2 w-3 h-3 bg-neutral-800 rounded-full"></div>
							<div class="absolute -bottom-2 right-2 w-3 h-3 bg-neutral-800 rounded-full"></div>

							{#if showDimensions}
								<!-- Height label -->
								<div class="absolute -right-12 top-1/2 -translate-y-1/2 text-xs font-mono whitespace-nowrap">
									{size.height}cm
								</div>
								<!-- Width label -->
								<div class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono">
									{size.width}cm
								</div>
							{/if}
						</div>
					</div>

					<!-- Label -->
					<div class="mt-12 text-center">
						<div class="font-bold text-sm">{size.name}</div>
						<div class="text-xs text-neutral-500">{size.capacity}</div>
						<div class="text-xs text-neutral-400">{getVolume(type)}L volume</div>
					</div>
				</div>
			{/each}

			{#if selectedTypes.length === 0}
				<div class="text-neutral-400 text-center py-12">
					Select sizes above to compare
				</div>
			{/if}
		</div>
	</div>

	<!-- Toggle -->
	<label class="flex items-center gap-2 cursor-pointer">
		<input type="checkbox" bind:checked={showDimensions} class="w-4 h-4 accent-green-500" />
		<span class="text-sm">Show dimensions</span>
	</label>

	<!-- Size Details -->
	{#if selectedTypes.length > 0}
		<div>
			<h2 class="section-header">Size Details</h2>
			<div class="grid sm:grid-cols-2 lg:grid-cols-{Math.min(selectedTypes.length, 4)} gap-4">
				{#each selectedTypes as type}
					{@const size = type === 'custom' ? { ...luggageSizes.custom, height: customHeight, width: customWidth, depth: customDepth } : luggageSizes[type]}
					<div class="p-4 border-2 border-neutral-200">
						<div class="flex items-center gap-2 mb-3">
							<div class="w-4 h-4 rounded {luggageSizes[type].color}"></div>
							<h3 class="font-bold">{size.name}</h3>
						</div>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span class="text-neutral-500">Dimensions</span>
								<span class="font-mono">{size.height}×{size.width}×{size.depth}cm</span>
							</div>
							<div class="flex justify-between">
								<span class="text-neutral-500">Volume</span>
								<span class="font-mono">{getVolume(type)}L</span>
							</div>
							<div class="flex justify-between">
								<span class="text-neutral-500">Linear total</span>
								<span class="font-mono">{size.height + size.width + size.depth}cm</span>
							</div>
							<div class="text-xs text-neutral-400 mt-2">{size.airlines}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Airline Limits -->
	<div>
		<h2 class="section-header">Airline Luggage Limits</h2>
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b-2 border-neutral-200">
						<th class="text-left py-3 font-bold">Airline</th>
						<th class="text-left py-3 font-bold">Cabin Bag</th>
						<th class="text-left py-3 font-bold">Checked Bag</th>
					</tr>
				</thead>
				<tbody>
					{#each airlines as airline}
						<tr class="border-b border-neutral-100">
							<td class="py-3 font-medium">{airline.name}</td>
							<td class="py-3 font-mono text-neutral-600">{airline.cabin}</td>
							<td class="py-3 font-mono text-neutral-600">{airline.checked}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="text-xs text-neutral-400 mt-2">* Limits may vary. Always check your airline's current policy.</p>
	</div>
</div>
