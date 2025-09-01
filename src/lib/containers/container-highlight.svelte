<script>
    import { onMount } from 'svelte'
	import { stopPropagation } from 'svelte/legacy';

    let { children } = $props()
    let angleProp = $state('0rad')

    onMount(() => {
        const twoPi = 2 * Math.PI
        const duration = 2000
        const multiplier = 0.05

        let width = 600 / 160
        let perimiter = 2 * (1 + width)
        let center = { x: width / 2, y: 0.5 }
        let radius = Math.sqrt(Math.pow(center.x, 2) + Math.pow(center.y, 2))
        let point = { x: 0, y: 0 }
        let angle = 0

        let prevTime
        function update(timestamp) {
            if (!prevTime) {
                prevTime = timestamp
                requestAnimationFrame(update)
                return
            }
            const deltaTime = (timestamp - prevTime)
            console.log(deltaTime)

            angle = (angle + (twoPi * deltaTime / duration)) % twoPi
            point = {
                x: (width / 2) + (radius * Math.sin(angle)),
                y: 0.5 * (1 + (radius * Math.cos(angle)))
            }
            
            const opp = center.y - point.y
            const adj = center.x - point.x
            angleProp = `${Math.atan2(opp, adj)}rad`

            prevTime = timestamp
            window.requestAnimationFrame(update)
        }
        window.requestAnimationFrame(update)
    })
</script>

<div style="--angle:{angleProp}" class="relative h-40 before:content-[''] before:absolute before:inset-0 before:rounded-4xl before:blur-lg before:opacity-100 before:bg-conic-[from_var(--angle)_in_oklch,_var(--color-light)_0%,_var(--color-dark)_25%,_var(--color-dark)_75%,_var(--color-light)_100%] after:content-[''] after:absolute after:inset-0 after:rounded-4xl after:bg-conic-[from_var(--angle)_in_oklch,_var(--color-light)_0%,_var(--color-dark)_25%,_var(--color-dark)_75%,_var(--color-light)_100%]">
    <div class="absolute inset-1 z-1 rounded-4xl bg-neutral-900">
        {@render children()}
    </div>
</div>