<script>
    let { children } = $props()
</script>

<div class="w-full mb-4">
    <h1 class="flex items-end justify-between text-5xl font-bold">
        {@render children()}
    </h1>
</div>