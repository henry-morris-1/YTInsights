<script>
    let { id, label } = $props();
</script>

<div class="relative">
    <input type="text" placeholder=" " id={id} class="peer w-150 pt-6 bg-transparent rounded-md border-0 ring-1 ring-neutral-500 focus:ring-2 transition-all duration-125" />
    <label for={id} class="cursor-text font-light absolute top-0 left-0 mt-4 ms-3 peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-focus:mt-2 peer-[:not(:placeholder-shown)]:mt-2 transition-all duration-125">
        {label}
    </label>
</div>