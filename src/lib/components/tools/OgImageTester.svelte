<script lang="ts">
	let url = $state('');
	let loading = $state(false);
	let error = $state('');
	let ogData = $state<{
		title?: string;
		description?: string;
		image?: string;
		siteName?: string;
		type?: string;
		url?: string;
	} | null>(null);

	// Demo data for preview without fetching
	let demoMode = $state(true);
	let demoTitle = $state('Your Website Title');
	let demoDescription = $state('A compelling description of your page that will appear in social shares. Keep it under 155 characters for best results.');
	let demoImage = $state('');
	let demoSiteName = $state('yoursite.com');

	async function fetchOgData() {
		if (!url.trim()) return;

		loading = true;
		error = '';
		demoMode = false;

		try {
			// Note: In production, this would need a server endpoint to fetch OG data
			// due to CORS restrictions. For now, we'll show the demo mode.
			error = 'Live URL fetching requires a server endpoint. Use demo mode to preview your OG tags.';
			demoMode = true;
		} catch (e) {
			error = 'Could not fetch OG data. Use demo mode instead.';
			demoMode = true;
		} finally {
			loading = false;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			fetchOgData();
		}
	}

	// Computed values for preview
	let previewTitle = $derived(demoMode ? demoTitle : (ogData?.title || 'No title'));
	let previewDescription = $derived(demoMode ? demoDescription : (ogData?.description || 'No description'));
	let previewImage = $derived(demoMode ? demoImage : ogData?.image);
	let previewSite = $derived(demoMode ? demoSiteName : (ogData?.siteName || new URL(url || 'https://example.com').hostname));
</script>

<div class="space-y-8">
	<!-- Mode Toggle -->
	<div class="flex gap-4">
		<button
			onclick={() => demoMode = true}
			class="px-4 py-2 text-sm font-medium border-2 transition-colors {demoMode ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-neutral-200 hover:border-neutral-400'}"
		>
			Demo Mode
		</button>
		<button
			onclick={() => demoMode = false}
			class="px-4 py-2 text-sm font-medium border-2 transition-colors {!demoMode ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-neutral-200 hover:border-neutral-400'}"
		>
			URL Mode
		</button>
	</div>

	{#if demoMode}
		<!-- Demo Mode Inputs -->
		<div class="space-y-4">
			<div>
				<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">og:title</label>
				<input
					type="text"
					bind:value={demoTitle}
					placeholder="Your page title"
					class="w-full px-4 py-3 border-2 border-neutral-200 focus:border-pink-500 outline-none"
				/>
			</div>
			<div>
				<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">og:description</label>
				<textarea
					bind:value={demoDescription}
					placeholder="Your page description"
					class="w-full h-24 px-4 py-3 border-2 border-neutral-200 focus:border-pink-500 outline-none resize-none"
				></textarea>
				<div class="text-xs text-neutral-400 mt-1">{demoDescription.length}/155 characters (recommended)</div>
			</div>
			<div>
				<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">og:image URL</label>
				<input
					type="text"
					bind:value={demoImage}
					placeholder="https://example.com/og-image.png"
					class="w-full px-4 py-3 border-2 border-neutral-200 focus:border-pink-500 outline-none"
				/>
			</div>
			<div>
				<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Site Name</label>
				<input
					type="text"
					bind:value={demoSiteName}
					placeholder="yoursite.com"
					class="w-full px-4 py-3 border-2 border-neutral-200 focus:border-pink-500 outline-none"
				/>
			</div>
		</div>
	{:else}
		<!-- URL Mode -->
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Enter URL</label>
			<div class="flex gap-2">
				<input
					type="url"
					bind:value={url}
					onkeydown={handleKeydown}
					placeholder="https://example.com"
					class="flex-1 px-4 py-3 border-2 border-neutral-200 focus:border-pink-500 outline-none"
				/>
				<button
					onclick={fetchOgData}
					disabled={loading}
					class="px-6 py-3 bg-pink-500 text-white font-medium hover:bg-pink-600 disabled:opacity-50"
				>
					{loading ? 'Loading...' : 'Fetch'}
				</button>
			</div>
			{#if error}
				<p class="text-sm text-amber-600 mt-2">{error}</p>
			{/if}
		</div>
	{/if}

	<!-- Preview Section -->
	<div>
		<h2 class="section-header">Social Previews</h2>
		<div class="grid lg:grid-cols-2 gap-6">
			<!-- Twitter/X Preview -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Twitter / X</h3>
				<div class="border border-neutral-200 rounded-xl overflow-hidden bg-white max-w-[500px]">
					{#if previewImage}
						<div class="aspect-[1.91/1] bg-neutral-100">
							<img src={previewImage} alt="OG preview" class="w-full h-full object-cover" onerror={(e) => e.currentTarget.style.display = 'none'} />
						</div>
					{:else}
						<div class="aspect-[1.91/1] bg-neutral-100 flex items-center justify-center text-neutral-400">
							No image (1200×630 recommended)
						</div>
					{/if}
					<div class="p-3">
						<div class="text-xs text-neutral-500 mb-1">{previewSite}</div>
						<div class="font-medium text-neutral-900 line-clamp-1">{previewTitle}</div>
						<div class="text-sm text-neutral-500 line-clamp-2">{previewDescription}</div>
					</div>
				</div>
			</div>

			<!-- Facebook Preview -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Facebook</h3>
				<div class="border border-neutral-300 bg-[#f0f2f5] max-w-[500px]">
					{#if previewImage}
						<div class="aspect-[1.91/1] bg-neutral-200">
							<img src={previewImage} alt="OG preview" class="w-full h-full object-cover" onerror={(e) => e.currentTarget.style.display = 'none'} />
						</div>
					{:else}
						<div class="aspect-[1.91/1] bg-neutral-200 flex items-center justify-center text-neutral-400">
							No image
						</div>
					{/if}
					<div class="p-3 bg-[#e4e6eb]">
						<div class="text-xs text-neutral-500 uppercase mb-1">{previewSite}</div>
						<div class="font-semibold text-neutral-900 line-clamp-2">{previewTitle}</div>
						<div class="text-sm text-neutral-500 line-clamp-1">{previewDescription}</div>
					</div>
				</div>
			</div>

			<!-- LinkedIn Preview -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">LinkedIn</h3>
				<div class="border border-neutral-200 rounded-lg overflow-hidden bg-white max-w-[500px]">
					{#if previewImage}
						<div class="aspect-[1.91/1] bg-neutral-100">
							<img src={previewImage} alt="OG preview" class="w-full h-full object-cover" onerror={(e) => e.currentTarget.style.display = 'none'} />
						</div>
					{:else}
						<div class="aspect-[1.91/1] bg-neutral-100 flex items-center justify-center text-neutral-400">
							No image
						</div>
					{/if}
					<div class="p-3">
						<div class="font-semibold text-neutral-900 line-clamp-2">{previewTitle}</div>
						<div class="text-xs text-neutral-500 mt-1">{previewSite}</div>
					</div>
				</div>
			</div>

			<!-- Discord Preview -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Discord</h3>
				<div class="bg-[#36393f] p-4 rounded max-w-[500px]">
					<div class="border-l-4 border-[#7289da] bg-[#2f3136] rounded">
						<div class="p-3">
							<div class="text-xs text-[#7289da] font-medium mb-1">{previewSite}</div>
							<div class="text-[#00b0f4] font-medium hover:underline cursor-pointer">{previewTitle}</div>
							<div class="text-sm text-[#dcddde] mt-1 line-clamp-3">{previewDescription}</div>
							{#if previewImage}
								<div class="mt-3 rounded overflow-hidden max-w-[300px]">
									<img src={previewImage} alt="OG preview" class="w-full" onerror={(e) => e.currentTarget.style.display = 'none'} />
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Recommendations -->
	<div class="p-6 bg-pink-50 border-2 border-pink-200">
		<h3 class="font-bold mb-2">OG Tag Recommendations</h3>
		<div class="grid sm:grid-cols-2 gap-4 text-sm text-neutral-600">
			<div>
				<h4 class="font-medium text-neutral-900">og:image</h4>
				<p>1200×630px for best display across platforms</p>
			</div>
			<div>
				<h4 class="font-medium text-neutral-900">og:title</h4>
				<p>55-60 characters for optimal display</p>
			</div>
			<div>
				<h4 class="font-medium text-neutral-900">og:description</h4>
				<p>155 characters or less recommended</p>
			</div>
			<div>
				<h4 class="font-medium text-neutral-900">twitter:card</h4>
				<p>Use "summary_large_image" for bigger previews</p>
			</div>
		</div>
	</div>
</div>
