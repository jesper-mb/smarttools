<script lang="ts">
	import { Button } from '$lib/components/ui';
	import { currentLang } from '$lib/i18n';

	let input = $state('');
	let hashes = $state<Record<string, string>>({});
	let copied = $state<string | null>(null);
	let mode: 'text' | 'file' = $state('text');
	let isHashing = $state(false);

	let lang = $derived($currentLang);

	async function hashText(text: string, algorithm: string): Promise<string> {
		const encoder = new TextEncoder();
		const data = encoder.encode(text);
		const hashBuffer = await crypto.subtle.digest(algorithm, data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	}

	async function generateHashes() {
		if (!input.trim()) {
			hashes = {};
			return;
		}

		isHashing = true;
		try {
			const [md5, sha1, sha256, sha384, sha512] = await Promise.all([
				// MD5 is not in Web Crypto API, we'll use a simple implementation
				md5Hash(input),
				hashText(input, 'SHA-1'),
				hashText(input, 'SHA-256'),
				hashText(input, 'SHA-384'),
				hashText(input, 'SHA-512')
			]);

			hashes = { MD5: md5, 'SHA-1': sha1, 'SHA-256': sha256, 'SHA-384': sha384, 'SHA-512': sha512 };
		} catch (e) {
			console.error(e);
		}
		isHashing = false;
	}

	// Simple MD5 implementation
	function md5Hash(string: string): string {
		function rotateLeft(value: number, amount: number): number {
			return (value << amount) | (value >>> (32 - amount));
		}

		function addUnsigned(x: number, y: number): number {
			return ((x & 0x7FFFFFFF) + (y & 0x7FFFFFFF)) ^ (x & 0x80000000) ^ (y & 0x80000000);
		}

		const s = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
		const K: number[] = [];
		for (let i = 0; i < 64; i++) {
			K[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000);
		}

		let a0 = 0x67452301, b0 = 0xefcdab89, c0 = 0x98badcfe, d0 = 0x10325476;

		const bytes: number[] = [];
		for (let i = 0; i < string.length; i++) {
			bytes.push(string.charCodeAt(i) & 0xff);
		}

		const originalLength = bytes.length * 8;
		bytes.push(0x80);
		while ((bytes.length % 64) !== 56) bytes.push(0);

		for (let i = 0; i < 8; i++) {
			bytes.push((originalLength >>> (i * 8)) & 0xff);
		}

		for (let chunk = 0; chunk < bytes.length; chunk += 64) {
			const M: number[] = [];
			for (let i = 0; i < 16; i++) {
				M[i] = bytes[chunk + i * 4] | (bytes[chunk + i * 4 + 1] << 8) |
					   (bytes[chunk + i * 4 + 2] << 16) | (bytes[chunk + i * 4 + 3] << 24);
			}

			let A = a0, B = b0, C = c0, D = d0;

			for (let i = 0; i < 64; i++) {
				let F: number, g: number;
				if (i < 16) {
					F = (B & C) | (~B & D);
					g = i;
				} else if (i < 32) {
					F = (D & B) | (~D & C);
					g = (5 * i + 1) % 16;
				} else if (i < 48) {
					F = B ^ C ^ D;
					g = (3 * i + 5) % 16;
				} else {
					F = C ^ (B | ~D);
					g = (7 * i) % 16;
				}
				F = addUnsigned(F, addUnsigned(A, addUnsigned(K[i], M[g])));
				A = D;
				D = C;
				C = B;
				B = addUnsigned(B, rotateLeft(F, s[Math.floor(i / 16) * 4 + (i % 4)]));
			}

			a0 = addUnsigned(a0, A);
			b0 = addUnsigned(b0, B);
			c0 = addUnsigned(c0, C);
			d0 = addUnsigned(d0, D);
		}

		const toHex = (n: number) => {
			let hex = '';
			for (let i = 0; i < 4; i++) {
				hex += ((n >>> (i * 8)) & 0xff).toString(16).padStart(2, '0');
			}
			return hex;
		};

		return toHex(a0) + toHex(b0) + toHex(c0) + toHex(d0);
	}

	function copy(value: string, type: string) {
		navigator.clipboard.writeText(value);
		copied = type;
		setTimeout(() => copied = null, 2000);
	}

	function clear() {
		input = '';
		hashes = {};
	}

	// Auto-generate on input change
	$effect(() => {
		generateHashes();
	});
</script>

<div class="flex flex-col gap-6">
	<!-- Input -->
	<div>
		<label class="text-xs text-neutral-400 uppercase tracking-wider block mb-2">
			{lang === 'nl' ? 'Tekst om te hashen' : 'Text to hash'}
		</label>
		<textarea
			bind:value={input}
			placeholder={lang === 'nl' ? 'Voer tekst in...' : 'Enter text...'}
			class="w-full h-32 px-4 py-3 border-2 border-neutral-200 focus:border-neutral-950 focus:outline-none resize-none font-mono text-sm"
		></textarea>
	</div>

	{#if input && !isHashing}
		<div class="flex justify-center">
			<Button variant="ghost" onclick={clear}>
				{lang === 'nl' ? 'Wissen' : 'Clear'}
			</Button>
		</div>
	{/if}

	<!-- Hash results -->
	{#if Object.keys(hashes).length > 0}
		<div class="space-y-3">
			{#each Object.entries(hashes) as [algo, hash]}
				<div class="border-2 border-neutral-200">
					<div class="flex items-center justify-between px-4 py-2 bg-neutral-50 border-b-2 border-neutral-200">
						<span class="text-xs font-bold uppercase tracking-wider">{algo}</span>
						<span class="text-xs text-neutral-400">{hash.length} chars</span>
					</div>
					<div class="flex items-center gap-2 p-2">
						<code class="flex-1 px-2 py-1 font-mono text-xs break-all select-all">
							{hash}
						</code>
						<button
							onclick={() => copy(hash, algo)}
							class="p-2 text-neutral-400 hover:text-neutral-950 shrink-0"
							title={lang === 'nl' ? 'Kopiëren' : 'Copy'}
						>
							{#if copied === algo}
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-600">
									<polyline points="20 6 9 17 4 12"></polyline>
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
									<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
								</svg>
							{/if}
						</button>
					</div>
				</div>
			{/each}
		</div>
	{:else if !input}
		<div class="text-center py-8 text-neutral-400">
			{lang === 'nl' ? 'Voer tekst in om hashes te genereren' : 'Enter text to generate hashes'}
		</div>
	{/if}

	{#if isHashing}
		<div class="text-center py-4 text-neutral-500">
			{lang === 'nl' ? 'Berekenen...' : 'Calculating...'}
		</div>
	{/if}
</div>
