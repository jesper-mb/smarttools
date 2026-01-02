<script lang="ts">
	let departureTimezone = $state(1); // UTC+1 (Amsterdam)
	let arrivalTimezone = $state(-5); // UTC-5 (New York)
	let departureTime = $state('14:00');
	let flightDuration = $state(8);
	let normalSleepTime = $state('23:00');
	let normalWakeTime = $state('07:00');

	const timezones = [
		{ offset: -12, label: 'UTC-12 (Baker Island)' },
		{ offset: -11, label: 'UTC-11 (Samoa)' },
		{ offset: -10, label: 'UTC-10 (Hawaii)' },
		{ offset: -9, label: 'UTC-9 (Alaska)' },
		{ offset: -8, label: 'UTC-8 (Los Angeles)' },
		{ offset: -7, label: 'UTC-7 (Denver)' },
		{ offset: -6, label: 'UTC-6 (Chicago)' },
		{ offset: -5, label: 'UTC-5 (New York)' },
		{ offset: -4, label: 'UTC-4 (Atlantic)' },
		{ offset: -3, label: 'UTC-3 (Buenos Aires)' },
		{ offset: 0, label: 'UTC+0 (London)' },
		{ offset: 1, label: 'UTC+1 (Amsterdam, Paris)' },
		{ offset: 2, label: 'UTC+2 (Athens, Cairo)' },
		{ offset: 3, label: 'UTC+3 (Moscow, Dubai)' },
		{ offset: 4, label: 'UTC+4 (Baku)' },
		{ offset: 5, label: 'UTC+5 (Karachi)' },
		{ offset: 5.5, label: 'UTC+5:30 (Mumbai)' },
		{ offset: 6, label: 'UTC+6 (Dhaka)' },
		{ offset: 7, label: 'UTC+7 (Bangkok)' },
		{ offset: 8, label: 'UTC+8 (Singapore, Beijing)' },
		{ offset: 9, label: 'UTC+9 (Tokyo)' },
		{ offset: 10, label: 'UTC+10 (Sydney)' },
		{ offset: 12, label: 'UTC+12 (Auckland)' }
	];

	let timeDifference = $derived(arrivalTimezone - departureTimezone);
	let direction = $derived(timeDifference > 0 ? 'east' : timeDifference < 0 ? 'west' : 'same');

	// Calculate arrival time
	let arrivalLocalTime = $derived(() => {
		const [depHours, depMinutes] = departureTime.split(':').map(Number);
		const totalMinutes = depHours * 60 + depMinutes + (flightDuration * 60) + (timeDifference * 60);
		const normalizedMinutes = ((totalMinutes % 1440) + 1440) % 1440;
		const hours = Math.floor(normalizedMinutes / 60);
		const minutes = normalizedMinutes % 60;
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
	});

	// Calculate jetlag severity (rough estimate: 1 day recovery per hour of difference)
	let jetlagDays = $derived(Math.ceil(Math.abs(timeDifference) * 0.75));

	// Generate sleep adjustment schedule
	let sleepSchedule = $derived(() => {
		const schedule = [];
		const diff = Math.abs(timeDifference);
		const adjustPerDay = 1.5; // Hours to adjust per day
		const days = Math.ceil(diff / adjustPerDay);

		const [sleepH, sleepM] = normalSleepTime.split(':').map(Number);
		const [wakeH, wakeM] = normalWakeTime.split(':').map(Number);

		for (let i = 0; i <= days; i++) {
			const adjustment = Math.min(i * adjustPerDay, diff);
			const adjustmentDir = direction === 'east' ? -1 : 1;

			let newSleepH = sleepH + (adjustmentDir * adjustment);
			let newWakeH = wakeH + (adjustmentDir * adjustment);

			// Normalize hours
			newSleepH = ((newSleepH % 24) + 24) % 24;
			newWakeH = ((newWakeH % 24) + 24) % 24;

			schedule.push({
				day: i === 0 ? 'Before departure' : i === days ? 'At destination' : `Day ${i}`,
				sleep: `${String(Math.floor(newSleepH)).padStart(2, '0')}:${String(sleepM).padStart(2, '0')}`,
				wake: `${String(Math.floor(newWakeH)).padStart(2, '0')}:${String(wakeM).padStart(2, '0')}`,
				note: i === 0 ? 'Start adjusting' : i === days ? 'Fully adjusted' : 'Gradually shifting'
			});
		}
		return schedule;
	});

	// Tips based on direction
	let tips = $derived(() => {
		if (direction === 'east') {
			return [
				'Go to bed earlier starting a few days before',
				'Seek morning light at destination',
				'Avoid afternoon naps',
				'Use melatonin 2-3 hours before new bedtime',
				'Stay active during daylight hours'
			];
		} else if (direction === 'west') {
			return [
				'Stay up later starting a few days before',
				'Seek evening light at destination',
				'Short nap OK if needed (< 20 min)',
				'Avoid bright light in the morning',
				'Exercise in the late afternoon'
			];
		}
		return ['No jetlag expected for same timezone'];
	});
</script>

<div class="space-y-8">
	<!-- Flight Details -->
	<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">From (Timezone)</label>
			<select bind:value={departureTimezone} class="w-full px-3 py-3 border-2 border-neutral-200 focus:border-green-500 outline-none bg-white">
				{#each timezones as tz}
					<option value={tz.offset}>{tz.label}</option>
				{/each}
			</select>
		</div>
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">To (Timezone)</label>
			<select bind:value={arrivalTimezone} class="w-full px-3 py-3 border-2 border-neutral-200 focus:border-green-500 outline-none bg-white">
				{#each timezones as tz}
					<option value={tz.offset}>{tz.label}</option>
				{/each}
			</select>
		</div>
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Departure Time</label>
			<input type="time" bind:value={departureTime} class="w-full px-3 py-3 border-2 border-neutral-200 focus:border-green-500 outline-none" />
		</div>
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Flight Duration (hrs)</label>
			<input type="number" bind:value={flightDuration} min="1" max="24" class="w-full px-3 py-3 border-2 border-neutral-200 focus:border-green-500 outline-none" />
		</div>
	</div>

	<!-- Summary -->
	<div class="grid sm:grid-cols-3 gap-4">
		<div class="p-6 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-4xl font-bold font-mono {timeDifference > 0 ? 'text-blue-600' : timeDifference < 0 ? 'text-orange-600' : 'text-green-600'}">
				{timeDifference > 0 ? '+' : ''}{timeDifference}h
			</div>
			<div class="text-sm text-neutral-500 mt-1">Time difference</div>
			<div class="text-xs text-neutral-400">Flying {direction}</div>
		</div>
		<div class="p-6 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-4xl font-bold font-mono">{arrivalLocalTime()}</div>
			<div class="text-sm text-neutral-500 mt-1">Arrival (local)</div>
		</div>
		<div class="p-6 bg-neutral-50 border-2 border-neutral-200 text-center">
			<div class="text-4xl font-bold font-mono text-amber-600">~{jetlagDays}</div>
			<div class="text-sm text-neutral-500 mt-1">Days to adjust</div>
		</div>
	</div>

	<!-- Your Sleep Schedule -->
	<div class="grid sm:grid-cols-2 gap-4">
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Your Normal Bedtime</label>
			<input type="time" bind:value={normalSleepTime} class="w-full px-3 py-3 border-2 border-neutral-200 focus:border-green-500 outline-none" />
		</div>
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Your Normal Wake Time</label>
			<input type="time" bind:value={normalWakeTime} class="w-full px-3 py-3 border-2 border-neutral-200 focus:border-green-500 outline-none" />
		</div>
	</div>

	<!-- Sleep Adjustment Schedule -->
	{#if Math.abs(timeDifference) > 0}
		<div>
			<h2 class="section-header">Sleep Adjustment Schedule</h2>
			<div class="overflow-x-auto">
				<table class="w-full text-sm">
					<thead>
						<tr class="border-b-2 border-neutral-200">
							<th class="text-left py-3 font-bold">Day</th>
							<th class="text-left py-3 font-bold">Sleep at</th>
							<th class="text-left py-3 font-bold">Wake at</th>
							<th class="text-left py-3 font-bold">Note</th>
						</tr>
					</thead>
					<tbody>
						{#each sleepSchedule() as day}
							<tr class="border-b border-neutral-100">
								<td class="py-3 font-medium">{day.day}</td>
								<td class="py-3 font-mono text-blue-600">{day.sleep}</td>
								<td class="py-3 font-mono text-orange-600">{day.wake}</td>
								<td class="py-3 text-neutral-500">{day.note}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/if}

	<!-- Tips -->
	<div class="p-6 bg-green-50 border-2 border-green-200">
		<h3 class="font-bold mb-3">Tips for Flying {direction === 'same' ? '' : direction.charAt(0).toUpperCase() + direction.slice(1)}</h3>
		<ul class="space-y-2">
			{#each tips() as tip}
				<li class="flex items-start gap-2 text-sm text-neutral-600">
					<span class="text-green-600">✓</span>
					{tip}
				</li>
			{/each}
		</ul>
	</div>

	<!-- General Tips -->
	<div class="p-6 bg-neutral-50 border-2 border-neutral-200">
		<h3 class="font-bold mb-3">General Anti-Jetlag Tips</h3>
		<ul class="grid sm:grid-cols-2 gap-2 text-sm text-neutral-600">
			<li>• Stay hydrated during the flight</li>
			<li>• Avoid alcohol and caffeine</li>
			<li>• Adjust your watch on boarding</li>
			<li>• Eat meals at destination times</li>
			<li>• Get sunlight exposure</li>
			<li>• Exercise lightly on arrival</li>
		</ul>
	</div>
</div>
