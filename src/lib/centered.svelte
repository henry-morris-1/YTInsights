<script>
    let { children } = $props();
</script>

<div class="h-screen flex flex-col items-center justify-center">
    {@render children()}
</div>