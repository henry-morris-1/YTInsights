<script>
    let { children } = $props()
</script>

<div class="p-6 bg-dark-muted rounded-lg text-sm font-mono whitespace-pre-wrap">
    {@render children()}
</div>