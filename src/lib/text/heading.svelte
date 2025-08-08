<script>
    let { children } = $props()
</script>

<div class="w-full mb-4">
    <h1 class="text-4xl font-bold">
        {@render children()}
    </h1>
    <div class="h-0.5 w-full bg-neutral-300"></div>
</div>