<script lang="ts">
	import '../app.css';
	import Header from '$lib/header.svelte';

	let { children } = $props();
</script>

<Header />

<main class="flex flex-col items-center">
	{@render children()}
</main>
