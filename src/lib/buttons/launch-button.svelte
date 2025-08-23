<script>
    let { children, href } = $props()
</script>

<a href={href} class="group flex gap-1 items-center underline">
    <span class="py-2">
        {@render children()}
    </span>
    <img src="https://blob.gifcities.org/gifcities/2XCHIKFOM4NAHETW7ZPMJ7W6CEZVASS4.gif" class="hidden group-hover:block" alt="" />
</a>