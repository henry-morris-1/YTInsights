<script lang="ts">
    import '../app.css'
    import Header from '$lib/header/header.svelte'

    let { children } = $props()
</script>

<div class="w-[800px]">
    <Header />

    <main class="flex flex-col items-center">
        {@render children()}
    </main>
</div>

