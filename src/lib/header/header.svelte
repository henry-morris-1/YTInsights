<script>
    import LaunchButton from "$lib/buttons/launch-button.svelte"
</script>

<header class="z-1000 sticky top-0 left-0 right-0 py-3 flex items-center backdrop-blur-md">
    <menu class="flex gap-5">
        <menuitem>
            <LaunchButton href="/">Home</LaunchButton>
        </menuitem>
        <menuitem>
            <LaunchButton href="/signin">Sign in</LaunchButton>
        </menuitem>
        <menuitem>
            <LaunchButton href="/about">Learn more</LaunchButton>
        </menuitem>
        <menuitem>
            <LaunchButton href="/analyze">Analyze</LaunchButton>
        </menuitem>
        <menuitem>
            <LaunchButton href="/loading">Loading</LaunchButton>
        </menuitem>
        <menuitem>
            <LaunchButton href="/results">Results</LaunchButton>
        </menuitem>
    </menu>
</header>