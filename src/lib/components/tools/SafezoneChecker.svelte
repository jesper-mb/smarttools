<script lang="ts">
	import { t } from '$lib/i18n';

	type Platform = 'tiktok' | 'reels' | 'shorts' | 'stories';
	type DeviceSize = 'small' | 'medium' | 'large';

	let platform = $state<Platform>('tiktok');
	let device = $state<DeviceSize>('medium');
	let showGrid = $state(true);
	let uploadedImage = $state<string | null>(null);

	// Safezone specifications (percentages from edges)
	const safezones: Record<Platform, { top: number; bottom: number; left: number; right: number; description: string }> = {
		tiktok: { top: 15, bottom: 25, left: 5, right: 5, description: 'Username, sounds, share buttons' },
		reels: { top: 12, bottom: 20, left: 5, right: 12, description: 'Username, likes, comments, share' },
		shorts: { top: 10, bottom: 22, left: 5, right: 10, description: 'Title, subscribe, like buttons' },
		stories: { top: 10, bottom: 15, left: 5, right: 5, description: 'Profile, reply bar' }
	};

	// Device dimensions (9:16 aspect ratio)
	const deviceSizes: Record<DeviceSize, { width: number; height: number; name: string }> = {
		small: { width: 180, height: 320, name: 'iPhone SE' },
		medium: { width: 220, height: 390, name: 'iPhone 14' },
		large: { width: 260, height: 460, name: 'iPhone 14 Pro Max' }
	};

	let currentSafezone = $derived(safezones[platform]);
	let currentDevice = $derived(deviceSizes[device]);

	function handleImageUpload(e: Event) {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				uploadedImage = e.target?.result as string;
			};
			reader.readAsDataURL(file);
		}
	}

	function clearImage() {
		uploadedImage = null;
	}
</script>

<div class="flex flex-col lg:flex-row gap-8">
	<!-- Controls -->
	<div class="lg:w-64 space-y-6">
		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Platform</label>
			<div class="grid grid-cols-2 gap-2">
				{#each Object.keys(safezones) as p}
					<button
						onclick={() => platform = p as Platform}
						class="px-3 py-2 text-sm font-medium border-2 transition-colors {platform === p ? 'border-pink-500 bg-pink-50 text-pink-700' : 'border-neutral-200 hover:border-neutral-400'}"
					>
						{p.charAt(0).toUpperCase() + p.slice(1)}
					</button>
				{/each}
			</div>
		</div>

		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Device Size</label>
			<div class="space-y-2">
				{#each Object.entries(deviceSizes) as [key, value]}
					<button
						onclick={() => device = key as DeviceSize}
						class="w-full px-3 py-2 text-sm text-left border-2 transition-colors {device === key ? 'border-pink-500 bg-pink-50' : 'border-neutral-200 hover:border-neutral-400'}"
					>
						<span class="font-medium">{value.name}</span>
						<span class="text-neutral-400 ml-2">{value.width}×{value.height}</span>
					</button>
				{/each}
			</div>
		</div>

		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Options</label>
			<label class="flex items-center gap-2 cursor-pointer">
				<input type="checkbox" bind:checked={showGrid} class="w-4 h-4 accent-pink-500" />
				<span class="text-sm">Show grid overlay</span>
			</label>
		</div>

		<div>
			<label class="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Upload Image</label>
			{#if uploadedImage}
				<button onclick={clearImage} class="w-full px-3 py-2 text-sm border-2 border-red-200 text-red-600 hover:bg-red-50">
					Clear image
				</button>
			{:else}
				<label class="block w-full px-3 py-2 text-sm text-center border-2 border-dashed border-neutral-300 hover:border-pink-400 cursor-pointer">
					<input type="file" accept="image/*" onchange={handleImageUpload} class="hidden" />
					Choose file...
				</label>
			{/if}
		</div>

		<div class="p-4 bg-neutral-50 border-2 border-neutral-200">
			<h3 class="font-bold text-sm mb-2">Safezone Info</h3>
			<p class="text-xs text-neutral-500 mb-2">{currentSafezone.description}</p>
			<div class="grid grid-cols-2 gap-2 text-xs">
				<div>Top: <span class="font-mono">{currentSafezone.top}%</span></div>
				<div>Bottom: <span class="font-mono">{currentSafezone.bottom}%</span></div>
				<div>Left: <span class="font-mono">{currentSafezone.left}%</span></div>
				<div>Right: <span class="font-mono">{currentSafezone.right}%</span></div>
			</div>
		</div>
	</div>

	<!-- Preview -->
	<div class="flex-1 flex justify-center">
		<div class="relative" style="width: {currentDevice.width}px; height: {currentDevice.height}px;">
			<!-- Phone frame -->
			<div class="absolute inset-0 bg-neutral-900 rounded-[2rem] shadow-2xl">
				<!-- Notch -->
				<div class="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-neutral-950 rounded-full"></div>

				<!-- Screen -->
				<div class="absolute inset-3 top-10 bottom-3 bg-gradient-to-b from-pink-400 to-purple-600 rounded-xl overflow-hidden">
					{#if uploadedImage}
						<img src={uploadedImage} alt="Uploaded content" class="w-full h-full object-cover" />
					{:else}
						<div class="w-full h-full flex items-center justify-center text-white/50 text-xs">
							Upload image to preview
						</div>
					{/if}

					<!-- Safezone overlay -->
					{#if showGrid}
						<!-- Top danger zone -->
						<div
							class="absolute top-0 left-0 right-0 bg-red-500/30 border-b-2 border-red-500 border-dashed"
							style="height: {currentSafezone.top}%"
						>
							<span class="absolute bottom-1 left-1 text-[8px] text-red-200 font-bold">DANGER ZONE</span>
						</div>

						<!-- Bottom danger zone -->
						<div
							class="absolute bottom-0 left-0 right-0 bg-red-500/30 border-t-2 border-red-500 border-dashed"
							style="height: {currentSafezone.bottom}%"
						>
							<span class="absolute top-1 left-1 text-[8px] text-red-200 font-bold">DANGER ZONE</span>
						</div>

						<!-- Left danger zone -->
						<div
							class="absolute top-0 bottom-0 left-0 bg-yellow-500/20 border-r border-yellow-500 border-dashed"
							style="width: {currentSafezone.left}%"
						></div>

						<!-- Right danger zone -->
						<div
							class="absolute top-0 bottom-0 right-0 bg-yellow-500/20 border-l border-yellow-500 border-dashed"
							style="width: {currentSafezone.right}%"
						></div>

						<!-- Safe zone indicator -->
						<div
							class="absolute border-2 border-green-500 border-dashed"
							style="
								top: {currentSafezone.top}%;
								bottom: {currentSafezone.bottom}%;
								left: {currentSafezone.left}%;
								right: {currentSafezone.right}%;
							"
						>
							<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-green-400 font-bold bg-black/50 px-1 rounded">
								SAFE
							</span>
						</div>
					{/if}

					<!-- Platform UI mockup -->
					{#if platform === 'tiktok'}
						<div class="absolute bottom-4 left-3 right-16 text-white text-[10px]">
							<div class="font-bold">@username</div>
							<div class="text-white/70 truncate">Description goes here #fyp #viral</div>
							<div class="flex items-center gap-1 mt-1">
								<span>♫</span>
								<span class="text-white/70">Original sound</span>
							</div>
						</div>
						<div class="absolute bottom-4 right-2 flex flex-col items-center gap-3 text-white text-[10px]">
							<div class="w-8 h-8 bg-white/20 rounded-full"></div>
							<div class="text-center">❤️<br/>1.2M</div>
							<div class="text-center">💬<br/>12K</div>
							<div class="text-center">↗️<br/>Share</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="mt-8 p-6 bg-pink-50 border-2 border-pink-200">
	<h3 class="font-bold mb-2">Tips for Safezone-Friendly Content</h3>
	<ul class="text-sm text-neutral-600 space-y-1 list-disc list-inside">
		<li>Keep important text and faces in the green safe zone</li>
		<li>Avoid placing key elements in the bottom 25% (covered by UI)</li>
		<li>Test on multiple device sizes before posting</li>
		<li>The top area may be covered by search/back buttons</li>
	</ul>
</div>
