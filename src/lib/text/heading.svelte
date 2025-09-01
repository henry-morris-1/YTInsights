<script>
    let { children } = $props()
</script>

<div class="w-full mb-4">
    <h2 class="flex items-end justify-between text-3xl font-bold">
        {@render children()}
    </h2>
    <div class="h-0.5 w-full bg-neutral-300"></div>
</div>