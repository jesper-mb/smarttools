<script lang="ts">
	interface Props {
		value: string | number;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		mono?: boolean;
		active?: boolean;
	}

	let { value, size = 'lg', mono = true, active = false }: Props = $props();

	const sizeClasses = {
		sm: 'text-3xl sm:text-4xl',
		md: 'text-5xl sm:text-6xl',
		lg: 'text-6xl sm:text-8xl',
		xl: 'text-7xl sm:text-9xl'
	};
</script>

<div
	class="select-none tracking-tighter font-bold {sizeClasses[size]} {mono ? 'tabular-nums' : ''} {active ? 'text-orange-600' : 'text-neutral-950'}"
>
	{value}
</div>
