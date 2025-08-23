<script lang="ts">
    import '../app.css'
    import Header from '$lib/header/header.svelte'

    let { children } = $props()
</script>

<Header />

<main>
    {@render children()}
</main>
