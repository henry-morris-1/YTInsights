<script>
    import LaunchButton from "$lib/buttons/launch-button.svelte"
</script>

<div class="flex">
    <menu>
        <menuitem>
            <LaunchButton href="/signin">Sign in</LaunchButton>
        </menuitem>
        <menuitem>
            <LaunchButton href="/about">Learn more</LaunchButton>
        </menuitem>
    </menu>

    <div class="flex-grow-1 flex justify-center">
        <img src="https://blob.gifcities.org/gifcities/ZOIJCLCU73SJN7KPPAXDIEQD2HE63SHO.gif" alt="welcome" />
    </div>
</div>