<script>
	import { setContext } from "svelte";
	import { createContext, useContext } from "./selected-tab-context.svelte.js";

    let { children }= $props()

    let selected = $state({})
    createContext()
    useContext(value => selected = value)
</script>

<div class="relative w-full">
    <div class="p-5 flex gap-2 justify-center">
        {@render children()}
    </div>
    <div class="w-full">
        {@render selected?.snippet?.()}
    </div>
</div>