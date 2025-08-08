<script>
    let { value } = $props()
</script>
<style>
    @keyframes dial-move {
        0% { offset-distance: -58.33%; }
        100% { offset-distance: calc(-58.33% + ((var(--dial-value) / 100) * 66.67%)); }
    }
    .animate-dial-move {
        animation: dial-move 2s forwards cubic-bezier(0.25, 1, 0.5, 1);
    }

    @property --count {
        syntax: '<integer>';
        initial-value: 0;
        inherits: false;
    }
    @keyframes counter {
        from { --count: 0; }
        to { --count: var(--dial-value); }
    }
    .counter {
        animation: counter 2s forwards cubic-bezier(0.25, 1, 0.5, 1);
        counter-reset: count var(--count);
        &::after {
            content: counter(count);
        }
    }
</style>

<div style="--dial-value:{value}" class="relative w-full [container-type:size] p-[12%] aspect-square rounded-full bg-conic-[theme(colors.yellow.500)_0%,theme(colors.green.500)_33.33%,transparent_33.33%,transparent_66.67%,theme(colors.red.500)_66.67%,theme(colors.yellow.500)]">
    <div class="w-full aspect-square rounded-full bg-neutral-900"></div>
    <div class="absolute top-1/2 left-1/2 -translate-y-7/12 -translate-x-1/2 text-[45cqi] font-black counter"></div>
    <div class="absolute w-[20%] aspect-square rounded-full bg-white animate-dial-move [offset-path:circle(43.75%_at_50%_50%)]"></div>
</div>
