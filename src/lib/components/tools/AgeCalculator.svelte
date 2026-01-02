<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';

	let birthDate = $state('');
	let toDate = $state(new Date().toISOString().split('T')[0]);

	let lang = $derived($currentLang);

	let age = $derived(() => {
		if (!birthDate) return null;

		const birth = new Date(birthDate);
		const to = new Date(toDate);

		if (birth > to) return null;

		// Calculate years, months, days
		let years = to.getFullYear() - birth.getFullYear();
		let months = to.getMonth() - birth.getMonth();
		let days = to.getDate() - birth.getDate();

		if (days < 0) {
			months--;
			const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
			days += prevMonth.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}

		// Calculate total values
		const diffTime = Math.abs(to.getTime() - birth.getTime());
		const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		const totalWeeks = Math.floor(totalDays / 7);
		const totalMonths = years * 12 + months;
		const totalHours = totalDays * 24;
		const totalMinutes = totalHours * 60;

		// Next birthday
		let nextBirthday = new Date(to.getFullYear(), birth.getMonth(), birth.getDate());
		if (nextBirthday <= to) {
			nextBirthday = new Date(to.getFullYear() + 1, birth.getMonth(), birth.getDate());
		}
		const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - to.getTime()) / (1000 * 60 * 60 * 24));

		return {
			years,
			months,
			days,
			totalDays,
			totalWeeks,
			totalMonths,
			totalHours,
			totalMinutes,
			daysToNextBirthday
		};
	});

	function setToday() {
		toDate = new Date().toISOString().split('T')[0];
	}
</script>

<div class="flex flex-col items-center gap-8">
	<!-- Date inputs -->
	<div class="grid sm:grid-cols-2 gap-6 w-full max-w-lg">
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{lang === 'nl' ? 'Geboortedatum' : 'Birth date'}
			</label>
			<input
				type="date"
				bind:value={birthDate}
				class="w-full px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none font-mono"
			/>
		</div>
		<div>
			<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
				{lang === 'nl' ? 'Tot datum' : 'To date'}
			</label>
			<div class="flex gap-2">
				<input
					type="date"
					bind:value={toDate}
					class="flex-1 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none font-mono"
				/>
				<button
					onclick={setToday}
					class="px-3 border-2 border-neutral-200 hover:border-neutral-950 text-sm"
					title={lang === 'nl' ? 'Vandaag' : 'Today'}
				>
					{lang === 'nl' ? 'Nu' : 'Now'}
				</button>
			</div>
		</div>
	</div>

	<!-- Main age display -->
	{#if age()}
		<div class="text-center p-8 border-2 border-neutral-950 shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white">
			<div class="text-6xl sm:text-7xl font-bold text-neutral-950 mb-2">
				{age()?.years}
			</div>
			<div class="text-neutral-500 uppercase tracking-wider">
				{lang === 'nl' ? 'Jaar oud' : 'Years old'}
			</div>
			<div class="mt-4 text-2xl text-neutral-700">
				{age()?.months} {lang === 'nl' ? 'maanden' : 'months'}, {age()?.days} {lang === 'nl' ? 'dagen' : 'days'}
			</div>
		</div>

		<!-- Next birthday -->
		{#if age()?.daysToNextBirthday}
			<div class="text-center p-4 bg-orange-50 border-2 border-orange-200">
				<span class="text-orange-700">
					🎂 {age()?.daysToNextBirthday} {lang === 'nl' ? 'dagen tot volgende verjaardag' : 'days until next birthday'}
				</span>
			</div>
		{/if}

		<!-- Detailed stats -->
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
			<div class="text-center p-4 border-2 border-neutral-200">
				<div class="text-2xl font-bold tabular-nums">{age()?.totalMonths.toLocaleString()}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Maanden' : 'Months'}</div>
			</div>
			<div class="text-center p-4 border-2 border-neutral-200">
				<div class="text-2xl font-bold tabular-nums">{age()?.totalWeeks.toLocaleString()}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Weken' : 'Weeks'}</div>
			</div>
			<div class="text-center p-4 border-2 border-neutral-200">
				<div class="text-2xl font-bold tabular-nums">{age()?.totalDays.toLocaleString()}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Dagen' : 'Days'}</div>
			</div>
			<div class="text-center p-4 border-2 border-neutral-200">
				<div class="text-2xl font-bold tabular-nums">{age()?.totalHours.toLocaleString()}</div>
				<div class="text-xs text-neutral-500 uppercase">{lang === 'nl' ? 'Uren' : 'Hours'}</div>
			</div>
		</div>

		<!-- Even more detail -->
		<div class="text-center text-sm text-neutral-500">
			<p>
				{lang === 'nl' ? 'Of' : 'Or'} <strong class="text-neutral-950">{age()?.totalMinutes.toLocaleString()}</strong> {lang === 'nl' ? 'minuten' : 'minutes'}
			</p>
		</div>
	{:else if birthDate}
		<div class="text-center p-4 text-neutral-500">
			{lang === 'nl' ? 'Geboortedatum moet voor de einddatum liggen' : 'Birth date must be before end date'}
		</div>
	{:else}
		<div class="text-center p-8 text-neutral-400">
			{lang === 'nl' ? 'Selecteer een geboortedatum' : 'Select a birth date'}
		</div>
	{/if}
</div>
