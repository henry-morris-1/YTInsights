<script>
    let { children } = $props()
</script>
<style>
    @property --angle {
        syntax: '<angle>';
        inherits: false;
        initial-value: 0deg;
    }
    @keyframes rotate-border {
        from { --angle: 0deg; }
        to { --angle: 360deg; }
    }

    .container {
        &::before {
            animation: rotate-border 2s linear infinite;
        }
        &::after {
            animation: rotate-border 2s linear infinite;
        }
    }
</style>

<div class="container relative h-40 before:content-[''] before:absolute before:inset-0 before:rounded-4xl before:blur-lg before:bg-conic-[from_var(--angle)_in_oklch,_var(--color-light)_0%,_var(--color-dark)_25%,_var(--color-dark)_75%,_var(--color-light)_100%] after:content-[''] after:absolute after:inset-0 after:rounded-4xl after:bg-conic-[from_var(--angle)_in_oklch,_var(--color-light)_0%,_var(--color-dark)_25%,_var(--color-dark)_75%,_var(--color-light)_100%]">
    <div class="absolute inset-1 z-1 rounded-4xl bg-dark">
        {@render children()}
    </div>
</div>