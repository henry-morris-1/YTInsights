<script>
    import { goto } from '$app/navigation';
</script>

<button type="button" onclick="{() => goto('/loading')}" class="px-3 py-2 bg-blue-600 hover:bg-blue-700 transition-all duration-125 rounded-md cursor-pointer">
    Analyze
</button>