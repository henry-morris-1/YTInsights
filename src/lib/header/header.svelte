<script>
    import LaunchButton from "$lib/buttons/launch-button.svelte"
</script>

<header class="z-1000 sticky top-0 left-0 right-0 py-3 flex items-center backdrop-blur-md">
    <nav class="flex gap-5">
        <LaunchButton href="/">Home</LaunchButton>
        <LaunchButton href="/signin">Sign in</LaunchButton>
        <LaunchButton href="/about">Learn more</LaunchButton>
        <LaunchButton href="/dashboard">Dashboard</LaunchButton>
    </nav>
</header>