<script lang="ts">
	import { Button, KeyboardHints } from '$lib/components/ui';
	import { t, currentLang } from '$lib/i18n';
	import { onMount } from 'svelte';

	let targetDate = $state('');
	let targetTime = $state('00:00');
	let eventName = $state('');
	let countdown = $state({ days: 0, hours: 0, minutes: 0, seconds: 0 });
	let isPast = $state(false);
	let interval: ReturnType<typeof setInterval> | null = null;

	let lang = $derived($currentLang);

	// Popular events/dates
	const presets = $derived(() => {
		const year = new Date().getFullYear();
		const nextYear = year + 1;

		return [
			{ label: lang === 'nl' ? 'Nieuwjaar' : 'New Year', date: `${nextYear}-01-01`, time: '00:00' },
			{ label: lang === 'nl' ? 'Valentijnsdag' : 'Valentine\'s', date: `${year}-02-14`, time: '00:00' },
			{ label: lang === 'nl' ? 'Pasen' : 'Easter', date: `${year}-04-20`, time: '00:00' },
			{ label: lang === 'nl' ? 'Koningsdag' : 'King\'s Day', date: `${year}-04-27`, time: '00:00' },
			{ label: 'Halloween', date: `${year}-10-31`, time: '00:00' },
			{ label: lang === 'nl' ? 'Kerst' : 'Christmas', date: `${year}-12-25`, time: '00:00' },
		];
	});

	function updateCountdown() {
		if (!targetDate) {
			countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
			return;
		}

		const target = new Date(`${targetDate}T${targetTime || '00:00'}`);
		const now = new Date();
		const diff = target.getTime() - now.getTime();

		if (diff <= 0) {
			isPast = true;
			countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
			return;
		}

		isPast = false;
		const seconds = Math.floor(diff / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		countdown = {
			days,
			hours: hours % 24,
			minutes: minutes % 60,
			seconds: seconds % 60
		};
	}

	function setPreset(preset: { label: string; date: string; time: string }) {
		targetDate = preset.date;
		targetTime = preset.time;
		eventName = preset.label;
		updateCountdown();
	}

	function clear() {
		targetDate = '';
		targetTime = '00:00';
		eventName = '';
		countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
		isPast = false;
	}

	onMount(() => {
		// Set default to New Year if no date selected
		const year = new Date().getFullYear();
		const nextYear = year + 1;
		targetDate = `${nextYear}-01-01`;
		eventName = lang === 'nl' ? 'Nieuwjaar' : 'New Year';

		updateCountdown();
		interval = setInterval(updateCountdown, 1000);

		return () => {
			if (interval) clearInterval(interval);
		};
	});

	let hasTarget = $derived(!!targetDate);
</script>

<div class="flex flex-col items-center gap-8">
	<!-- Event name -->
	{#if eventName}
		<div class="text-center">
			<div class="text-xs text-neutral-400 uppercase tracking-wider mb-1">
				{lang === 'nl' ? 'Aftellen naar' : 'Countdown to'}
			</div>
			<div class="text-2xl font-bold text-neutral-950">{eventName}</div>
		</div>
	{/if}

	<!-- Countdown display -->
	<div class="grid grid-cols-4 gap-4 text-center">
		<div class="p-4 border-2 border-neutral-200 min-w-[80px]">
			<div class="text-4xl sm:text-5xl font-bold tabular-nums text-neutral-950">
				{countdown.days}
			</div>
			<div class="text-xs text-neutral-400 uppercase tracking-wider mt-1">
				{lang === 'nl' ? 'Dagen' : 'Days'}
			</div>
		</div>
		<div class="p-4 border-2 border-neutral-200 min-w-[80px]">
			<div class="text-4xl sm:text-5xl font-bold tabular-nums text-neutral-950">
				{countdown.hours.toString().padStart(2, '0')}
			</div>
			<div class="text-xs text-neutral-400 uppercase tracking-wider mt-1">
				{lang === 'nl' ? 'Uren' : 'Hours'}
			</div>
		</div>
		<div class="p-4 border-2 border-neutral-200 min-w-[80px]">
			<div class="text-4xl sm:text-5xl font-bold tabular-nums text-neutral-950">
				{countdown.minutes.toString().padStart(2, '0')}
			</div>
			<div class="text-xs text-neutral-400 uppercase tracking-wider mt-1">
				{lang === 'nl' ? 'Min' : 'Min'}
			</div>
		</div>
		<div class="p-4 border-2 border-neutral-200 min-w-[80px]">
			<div class="text-4xl sm:text-5xl font-bold tabular-nums text-orange-600">
				{countdown.seconds.toString().padStart(2, '0')}
			</div>
			<div class="text-xs text-neutral-400 uppercase tracking-wider mt-1">
				{lang === 'nl' ? 'Sec' : 'Sec'}
			</div>
		</div>
	</div>

	{#if isPast && hasTarget}
		<div class="text-center p-4 bg-orange-600 text-white border-2 border-neutral-950 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
			<div class="text-xl font-bold">
				{lang === 'nl' ? 'De tijd is verstreken!' : 'Time\'s up!'}
			</div>
		</div>
	{/if}

	<!-- Custom date input -->
	<div class="w-full max-w-md space-y-4">
		<div class="grid grid-cols-2 gap-4">
			<div>
				<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-1">
					{lang === 'nl' ? 'Datum' : 'Date'}
				</label>
				<input
					type="date"
					bind:value={targetDate}
					class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-neutral-950"
				/>
			</div>
			<div>
				<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-1">
					{lang === 'nl' ? 'Tijd' : 'Time'}
				</label>
				<input
					type="time"
					bind:value={targetTime}
					class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-neutral-950"
				/>
			</div>
		</div>
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-1">
				{lang === 'nl' ? 'Evenement naam' : 'Event name'}
			</label>
			<input
				type="text"
				bind:value={eventName}
				placeholder={lang === 'nl' ? 'Bijv. Mijn verjaardag' : 'E.g. My birthday'}
				class="w-full px-3 py-2 border-2 border-neutral-200 focus:border-neutral-950 font-sans"
			/>
		</div>
	</div>

	<!-- Presets -->
	<div class="w-full max-w-md">
		<div class="text-xs text-neutral-400 uppercase tracking-wider mb-2 text-center">
			{lang === 'nl' ? 'Populaire data' : 'Popular dates'}
		</div>
		<div class="flex flex-wrap justify-center gap-2">
			{#each presets() as preset}
				<button
					onclick={() => setPreset(preset)}
					class="px-3 py-1 text-sm border-2 border-neutral-200 hover:border-neutral-950 transition-colors"
				>
					{preset.label}
				</button>
			{/each}
		</div>
	</div>

	{#if hasTarget}
		<Button variant="ghost" onclick={clear}>
			{lang === 'nl' ? 'Wissen' : 'Clear'}
		</Button>
	{/if}
</div>
