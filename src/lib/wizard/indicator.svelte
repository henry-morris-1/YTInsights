<script>
    import { Circle, CircleDashed } from "@lucide/svelte/icons"
	import { render } from "svelte/server"

    let { children, current, index, handleClick } = $props()

    let isActive = $derived(current === index)
    let isComplete = $derived(current > index)
</script>

<button onclick={handleClick} class="flex items-center gap-1 cursor-pointer">
    {#if isActive}
        <CircleDashed size={15} />
    {:else}
        <Circle size={15} fill={isComplete ? 'white' : ''} />
    {/if}

    <span class={isActive ? 'underline' :''}>
        {@render children()}
    </span>
</button>