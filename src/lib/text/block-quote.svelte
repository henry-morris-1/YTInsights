<script>
    let { children, attribution } = $props()
</script>

<div class="p-6 bg-dark-muted rounded-lg font-semibold">
    {@render children()}

    <div class="mt-3 italic font-light text-light-muted">
        &ndash; {attribution}
    </div>
</div>