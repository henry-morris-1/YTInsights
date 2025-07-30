<script>
    let { children } = $props();
</script>

<div class="p-6 bg-neutral-700 rounded-lg text-sm font-mono whitespace-pre-wrap">
    {@render children()}
</div>