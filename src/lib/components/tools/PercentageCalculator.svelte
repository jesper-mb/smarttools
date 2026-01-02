<script lang="ts">
	import { t } from '$lib/i18n';

	// What is X% of Y?
	let percentOf_percent = $state(10);
	let percentOf_value = $state(100);
	let percentOf_result = $derived(() => {
		return (percentOf_percent / 100) * percentOf_value;
	});

	// X is what % of Y?
	let whatPercent_value = $state(25);
	let whatPercent_total = $state(100);
	let whatPercent_result = $derived(() => {
		if (whatPercent_total === 0) return 0;
		return (whatPercent_value / whatPercent_total) * 100;
	});

	// Increase/Decrease by %
	let change_value = $state(100);
	let change_percent = $state(20);
	let change_increase = $derived(() => {
		return change_value * (1 + change_percent / 100);
	});
	let change_decrease = $derived(() => {
		return change_value * (1 - change_percent / 100);
	});

	// Percentage difference
	let diff_from = $state(50);
	let diff_to = $state(75);
	let diff_result = $derived(() => {
		if (diff_from === 0) return 0;
		return ((diff_to - diff_from) / Math.abs(diff_from)) * 100;
	});

	function formatNumber(num: number): string {
		if (Number.isInteger(num)) return num.toString();
		return num.toFixed(2).replace(/\.?0+$/, '');
	}
</script>

<div class="space-y-8">
	<!-- What is X% of Y? -->
	<div class="p-6 border-2 border-neutral-200">
		<h3 class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{$t.tools.percentage.whatIsXofY}</h3>
		<div class="flex flex-wrap items-center gap-2">
			<span class="text-neutral-500">{$t.tools.percentage.whatIs}</span>
			<input
				type="number"
				bind:value={percentOf_percent}
				class="w-20 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">% {$t.tools.percentage.of}</span>
			<input
				type="number"
				bind:value={percentOf_value}
				class="w-24 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">=</span>
			<span class="text-2xl font-bold text-orange-600 px-4 py-2 bg-orange-50 border-2 border-orange-200">
				{formatNumber(percentOf_result())}
			</span>
		</div>
	</div>

	<!-- X is what % of Y? -->
	<div class="p-6 border-2 border-neutral-200">
		<h3 class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{$t.tools.percentage.xIsWhatOfY}</h3>
		<div class="flex flex-wrap items-center gap-2">
			<input
				type="number"
				bind:value={whatPercent_value}
				class="w-24 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">{$t.tools.percentage.isWhatOf}</span>
			<input
				type="number"
				bind:value={whatPercent_total}
				class="w-24 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">=</span>
			<span class="text-2xl font-bold text-orange-600 px-4 py-2 bg-orange-50 border-2 border-orange-200">
				{formatNumber(whatPercent_result())}%
			</span>
		</div>
	</div>

	<!-- Increase/Decrease -->
	<div class="p-6 border-2 border-neutral-200">
		<h3 class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{$t.tools.percentage.increaseDecrease}</h3>
		<div class="flex flex-wrap items-center gap-2 mb-4">
			<input
				type="number"
				bind:value={change_value}
				class="w-24 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">±</span>
			<input
				type="number"
				bind:value={change_percent}
				class="w-20 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">%</span>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="text-center p-4 bg-green-50 border-2 border-green-200">
				<div class="text-xs text-green-600 uppercase tracking-wider mb-1">+{change_percent}%</div>
				<div class="text-2xl font-bold text-green-700">{formatNumber(change_increase())}</div>
			</div>
			<div class="text-center p-4 bg-red-50 border-2 border-red-200">
				<div class="text-xs text-red-600 uppercase tracking-wider mb-1">-{change_percent}%</div>
				<div class="text-2xl font-bold text-red-700">{formatNumber(change_decrease())}</div>
			</div>
		</div>
	</div>

	<!-- Percentage difference -->
	<div class="p-6 border-2 border-neutral-200">
		<h3 class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{$t.tools.percentage.difference}</h3>
		<div class="flex flex-wrap items-center gap-2">
			<span class="text-neutral-500">{$t.tools.percentage.from}</span>
			<input
				type="number"
				bind:value={diff_from}
				class="w-24 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">{$t.tools.percentage.to}</span>
			<input
				type="number"
				bind:value={diff_to}
				class="w-24 px-3 py-2 text-center font-bold border-2 border-neutral-200 focus:border-neutral-950"
			/>
			<span class="text-neutral-500">=</span>
			<span class="text-2xl font-bold px-4 py-2 border-2 {diff_result() >= 0 ? 'text-green-700 bg-green-50 border-green-200' : 'text-red-700 bg-red-50 border-red-200'}">
				{diff_result() >= 0 ? '+' : ''}{formatNumber(diff_result())}%
			</span>
		</div>
	</div>
</div>
