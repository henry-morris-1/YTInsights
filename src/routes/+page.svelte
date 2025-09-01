<script>
    import { onMount } from "svelte"
	import Sphere from "$lib/home/sphere.svelte"

    onMount(() => {
        const canvas = document.querySelector('canvas')
        const context = canvas.getContext('2d')
        const width = canvas.width
        const height = canvas.height
        const center = { x: width / 2, y: height / 2 }
        const radius = Math.min(width, height) / 2
        const strokeWidth = 0.025 * radius
        const strokeColor = getComputedStyle(document.documentElement).getPropertyValue('--color-light')

        function drawCircle() {
            context.lineWidth = strokeWidth
            context.strokeStyle = strokeColor
            context.beginPath()
            context.arc(center.x, center.y, radius - (strokeWidth / 2), 0, 2 * Math.PI)
            context.stroke()
        }

        function drawHorizontalArc(vPosition) {
            const hPosition = Math.sqrt(1 - Math.pow(vPosition, 2))

            const arc = {
                start: {
                    x: center.x * (1 - hPosition),
                    y: center.y * (1 - vPosition)
                },
                end: {
                    x: center.x * (1 + hPosition),
                    y: center.y * (1 - vPosition)
                },
                controlPoints: [{
                    x: center.x,
                    y: center.y
                }, {
                    x: center.x,
                    y: center.y
                }]
            }
            context.lineWidth = strokeWidth
            context.strokeStyle = strokeColor
            context.beginPath()
            context.moveTo(arc.start.x, arc.start.y)
            context.bezierCurveTo(
                arc.controlPoints[0].x, arc.controlPoints[0].y, 
                arc.controlPoints[1].x, arc.controlPoints[1].y, 
                arc.end.x, arc.end.y
            )
            context.stroke()
        }

        function draw() {
            context.clearRect(0, 0, width, height)

            drawCircle()

            drawHorizontalArc(-0.75)
            drawHorizontalArc(0)
            drawHorizontalArc(0.75)

            requestAnimationFrame(draw)
        }
        requestAnimationFrame(draw)
    })
</script>

<main>
    <Sphere></Sphere>
</main>