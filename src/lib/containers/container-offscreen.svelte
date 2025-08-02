<script>
    import ChevronRight from '@lucide/svelte/icons/chevron-right';
    import ChevronLeft from '@lucide/svelte/icons/chevron-left'

    let { children } = $props();
    let open = $state(true);
</script>

<div class="absolute h-screen w-screen max-w-[400px] left-0 {open ? '' : '-translate-x-full'} transition-all">
    <div class="h-full p-10 bg-neutral-600 flex flex-col items-center">
        {@render children()}
    </div>
    <button onclick="{() => open = !open}" class="absolute top-1/2 -translate-y-1/2 left-full px-1 py-3 bg-neutral-600 rounded-r-lg">
        {#if open}
            <ChevronLeft />
        {:else}
            <ChevronRight />
        {/if}
    </button>
</div>