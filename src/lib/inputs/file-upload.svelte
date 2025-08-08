<script>
    import Upload from '@lucide/svelte/icons/upload'

    let { id, label } = $props()
</script>

<div class="cursor-default py-4 px-3 rounded-md ring-1 ring-neutral-500 flex justify-between">
    <span class="font-light">{label}</span>
    <Upload />
</div>