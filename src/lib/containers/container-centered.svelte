<script>
    let { children } = $props();
</script>

<div class="absolute inset-0 flex flex-col items-center justify-center">
    {@render children()}
</div>