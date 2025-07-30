<script>
    let { children, attribution } = $props();
</script>

<div class="p-6 bg-neutral-700 rounded-lg font-semibold">
    {@render children()}

    <div class="mt-3 italic font-light text-neutral-300">
        &ndash; {attribution}
    </div>
</div>