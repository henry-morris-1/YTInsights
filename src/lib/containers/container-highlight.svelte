<script>
    let { children } = $props();
</script>

<div class="relative rounded-4xl overflow-hidden">
    <div class="p-0.5 after:content-[''] after:block after:absolute after:-inset-full after:m-auto after:aspect-square after:-z-1 after:animate-[spin_2s_linear_infinite] after:bg-conic/decreasing after:from-violet-700 after:via-lime-300 after:to-violet-700">
        <div class="p-15 bg-neutral-900 rounded-4xl">
            {@render children()}
        </div>
    </div>
</div>