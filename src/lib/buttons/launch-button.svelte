<script>
    import ChevronRight from '@lucide/svelte/icons/chevron-right'

    let { children, href } = $props()
</script>

<a href={href} class="flex gap-1">
    <span class="cursor-pointer group transition duration-125">
        {@render children()}
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-250 h-0.5 bg-white"></span>
    </span>
    <ChevronRight />
</a>