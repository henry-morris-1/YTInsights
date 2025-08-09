<script>
	import { useContext } from "./selected-tab-context.svelte.js";

    let { children, title, isOpen = $bindable(false) } = $props()
    
    const id = `tab-${Math.random().toString(36).substring(2)}`

    const updateSelected = useContext(value => isOpen = value.id === id)
    $effect(() => {
        updateSelected(isOpen, { snippet: children, id: id })
    })
</script>

<button onclick={() => isOpen = true} role="tab" id={id} class="px-2 py-1 rounded-md cursor-pointer transition-all duration-250 {isOpen ? 'bg-neutral-500' : 'bg-transparent'}">
    {@render title()}
</button>