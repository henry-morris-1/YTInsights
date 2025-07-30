<script>
    let { children } = $props();
</script>

<div class="flex flex-col gap-4 mb-8">
    {@render children()}
</div>