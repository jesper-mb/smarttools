<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';
	import { vibrate } from '$lib/stores/preferences';

	let password = $state('');
	let length = $state(16);
	let includeUppercase = $state(true);
	let includeLowercase = $state(true);
	let includeNumbers = $state(true);
	let includeSymbols = $state(true);
	let excludeAmbiguous = $state(false);
	let copied = $state(false);

	let lang = $derived($currentLang);

	const charSets = {
		uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		lowercase: 'abcdefghijklmnopqrstuvwxyz',
		numbers: '0123456789',
		symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
		ambiguous: 'il1Lo0O'
	};

	function generatePassword() {
		vibrate(30);
		let chars = '';

		if (includeUppercase) chars += charSets.uppercase;
		if (includeLowercase) chars += charSets.lowercase;
		if (includeNumbers) chars += charSets.numbers;
		if (includeSymbols) chars += charSets.symbols;

		if (excludeAmbiguous) {
			chars = chars.split('').filter(c => !charSets.ambiguous.includes(c)).join('');
		}

		if (chars.length === 0) {
			chars = charSets.lowercase;
		}

		const array = new Uint32Array(length);
		crypto.getRandomValues(array);

		password = Array.from(array, n => chars[n % chars.length]).join('');
	}

	function copyPassword() {
		if (password) {
			navigator.clipboard.writeText(password);
			copied = true;
			setTimeout(() => copied = false, 2000);
		}
	}

	// Calculate password strength
	let strength = $derived(() => {
		if (!password) return { score: 0, label: '', color: '' };

		let score = 0;
		const len = password.length;

		// Length scoring
		if (len >= 8) score += 1;
		if (len >= 12) score += 1;
		if (len >= 16) score += 1;
		if (len >= 20) score += 1;

		// Character variety
		if (/[a-z]/.test(password)) score += 1;
		if (/[A-Z]/.test(password)) score += 1;
		if (/[0-9]/.test(password)) score += 1;
		if (/[^a-zA-Z0-9]/.test(password)) score += 1;

		if (score <= 2) return { score, label: lang === 'nl' ? 'Zwak' : 'Weak', color: 'bg-red-500' };
		if (score <= 4) return { score, label: lang === 'nl' ? 'Redelijk' : 'Fair', color: 'bg-orange-500' };
		if (score <= 6) return { score, label: lang === 'nl' ? 'Goed' : 'Good', color: 'bg-yellow-500' };
		return { score, label: lang === 'nl' ? 'Sterk' : 'Strong', color: 'bg-green-500' };
	});

	// Generate initial password
	$effect(() => {
		if (!password) generatePassword();
	});
</script>

<div class="flex flex-col items-center gap-8">
	<!-- Password display -->
	<div class="w-full max-w-2xl">
		<div class="relative">
			<code class="block w-full px-4 py-4 bg-neutral-50 border-2 border-neutral-200 font-mono text-lg break-all select-all text-center">
				{password || '...'}
			</code>
			<button
				onclick={copyPassword}
				class="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-neutral-950"
				title={lang === 'nl' ? 'Kopiëren' : 'Copy'}
			>
				{#if copied}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-600">
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Strength indicator -->
		{#if password}
			<div class="mt-3 flex items-center gap-3">
				<div class="flex-1 h-2 bg-neutral-100 border border-neutral-200">
					<div
						class="h-full transition-all {strength().color}"
						style="width: {(strength().score / 8) * 100}%"
					></div>
				</div>
				<span class="text-sm font-bold {strength().color.replace('bg-', 'text-')}">{strength().label}</span>
			</div>
		{/if}
	</div>

	<!-- Length slider -->
	<div class="w-full max-w-md">
		<div class="flex items-center justify-between mb-2">
			<label class="text-sm text-neutral-500 uppercase tracking-wider">
				{lang === 'nl' ? 'Lengte' : 'Length'}
			</label>
			<span class="font-bold text-xl tabular-nums">{length}</span>
		</div>
		<input
			type="range"
			min="4"
			max="64"
			bind:value={length}
			oninput={generatePassword}
			class="w-full"
		/>
		<div class="flex justify-between text-xs text-neutral-400 mt-1">
			<span>4</span>
			<span>64</span>
		</div>
	</div>

	<!-- Options -->
	<div class="grid sm:grid-cols-2 gap-3 w-full max-w-md">
		<label class="flex items-center gap-3 p-3 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950 transition-colors">
			<input type="checkbox" bind:checked={includeUppercase} onchange={generatePassword} class="w-4 h-4" />
			<span class="text-sm">ABC {lang === 'nl' ? 'Hoofdletters' : 'Uppercase'}</span>
		</label>

		<label class="flex items-center gap-3 p-3 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950 transition-colors">
			<input type="checkbox" bind:checked={includeLowercase} onchange={generatePassword} class="w-4 h-4" />
			<span class="text-sm">abc {lang === 'nl' ? 'Kleine letters' : 'Lowercase'}</span>
		</label>

		<label class="flex items-center gap-3 p-3 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950 transition-colors">
			<input type="checkbox" bind:checked={includeNumbers} onchange={generatePassword} class="w-4 h-4" />
			<span class="text-sm">123 {lang === 'nl' ? 'Cijfers' : 'Numbers'}</span>
		</label>

		<label class="flex items-center gap-3 p-3 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950 transition-colors">
			<input type="checkbox" bind:checked={includeSymbols} onchange={generatePassword} class="w-4 h-4" />
			<span class="text-sm">!@# {lang === 'nl' ? 'Symbolen' : 'Symbols'}</span>
		</label>

		<label class="flex items-center gap-3 p-3 border-2 border-neutral-200 cursor-pointer hover:border-neutral-950 transition-colors sm:col-span-2">
			<input type="checkbox" bind:checked={excludeAmbiguous} onchange={generatePassword} class="w-4 h-4" />
			<span class="text-sm">{lang === 'nl' ? 'Verwarrende tekens uitsluiten' : 'Exclude ambiguous'} (i, l, 1, L, o, 0, O)</span>
		</label>
	</div>

	<!-- Generate button -->
	<Button variant="primary" size="lg" onclick={generatePassword}>
		{lang === 'nl' ? 'Genereer nieuw wachtwoord' : 'Generate new password'}
	</Button>
</div>
