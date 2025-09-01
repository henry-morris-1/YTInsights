<script>
    let { children } = $props()
</script>

<button class="px-3 py-2 flex justify-center text-dark bg-light hover:bg-light-muted transition-all duration-125 rounded-md cursor-pointer">
    {@render children()}
</button>