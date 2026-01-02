<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		children: Snippet;
	}

	let { variant = 'primary', size = 'md', children, class: className = '', ...rest }: Props = $props();

	const baseClasses = 'inline-flex items-center justify-center font-medium border-2 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed select-none uppercase tracking-wide active:scale-[0.98]';

	const variantClasses = {
		primary: 'bg-neutral-950 text-white border-neutral-950 hover:bg-white hover:text-neutral-950',
		secondary: 'bg-white text-neutral-950 border-neutral-950 hover:bg-neutral-950 hover:text-white',
		ghost: 'bg-transparent text-neutral-500 border-transparent hover:text-neutral-950 hover:border-neutral-300',
		danger: 'bg-white text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'
	};

	const sizeClasses = {
		sm: 'px-3 py-1 text-xs gap-1.5',
		md: 'px-4 py-2 text-sm gap-2',
		lg: 'px-6 py-3 text-base gap-2.5'
	};
</script>

<button
	class="{baseClasses} {variantClasses[variant]} {sizeClasses[size]} {className}"
	{...rest}
>
	{@render children()}
</button>
