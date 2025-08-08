<script>
    import Eye from "@lucide/svelte/icons/eye"
    import EyeClosed from "@lucide/svelte/icons/eye-closed"

    let { id, label } = $props()
    let show = $state(false)
</script>

<div class="relative">
    <input type={show ? 'text' : 'password'} placeholder=" " id={id} class="peer w-150 pt-6 bg-transparent rounded-md border-0 ring-1 ring-neutral-500 focus:ring-2 transition-all duration-125" />
    <label for={id} class="cursor-text font-light absolute top-0 left-0 mt-4 ms-3 peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-focus:mt-2 peer-[:not(:placeholder-shown)]:mt-2 transition-all duration-125">
        {label}
    </label>

    <button onclick={show = !show} class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
        {#if show}
            <EyeClosed />
        {:else}
            <Eye />
        {/if}
    </button>
</div>