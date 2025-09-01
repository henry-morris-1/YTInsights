<script>
    let { children, href } = $props()
</script>

<a href={href} class="underline">
    {@render children()}
</a>