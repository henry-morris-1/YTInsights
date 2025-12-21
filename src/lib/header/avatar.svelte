<script>
	import clickOut from "$lib/events/clickout.js"
	import HorizontalRule from "$lib/separators/horizontal-rule.svelte"

    let { username, pfpSrc } = $props()
    let open = $state(false)
</script>

<div use:clickOut onclickout={() => open = false} class="relative h-full">
    <button onclick={() => open = !open} class="w-full h-full aspect-square cursor-pointer">
        <img src={pfpSrc} alt={username} class="rounded-full" />
    </button>
    
    {#if (open)}
        <div class="absolute top-full right-0 py-2 flex flex-col gap-1 text-end text-nowrap">
            <a href="/" onclick={() => open = false}>My account</a>
            <HorizontalRule />
            <a href="/signin" onclick={() => open = false}>Sign out</a>
        </div>
    {/if}
</div>