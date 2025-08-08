<script>
	import { goto } from "$app/navigation"
	import ContainerCentered from "$lib/containers/container-centered.svelte"
	import ContainerHighlight from "$lib/containers/container-highlight.svelte"

    const phrases = [
        'Scanning thumbnail...',
        'Analyzing title and tags...',
        'Comparing against recent trends...',
        'Calculating probabilities...',
        'Creating suggestions for improvements...'
    ]
    let a = 0
    let b = 1

    setInterval(() => {
        b = (b + 2) % phrases.length
    }, 10000)
    setTimeout(() => {
        a = (a + 2) % phrases.length
        setInterval(() => {
            a = (a + 2) % phrases.length
        }, 10000)
    }, 5000)
</script>
<style>
    @keyframes rise-a {
        0%, 100% {
            bottom: 50%;
            translate: 0 50%;
            opacity: 1;
        }
        40% {
            bottom: 50%;
            translate: 0 50%;
            opacity: 1;
        }
        50% {
            bottom: 95%;
            opacity: 0;
        }
        90% {
            bottom: 5%;
            opacity: 0;
        }
    }
    .animate-rise-a {
        animation: rise-a 10s ease infinite;
    }

    @keyframes rise-b {
        0%, 100% {
            bottom: 95%;
            opacity: 0;
        }
        40% {
            bottom: 5%;
            opacity: 0;
        }
        50% {
            bottom: 50%;
            translate: 0 50%;
            opacity: 1;
        }
        90% {
            bottom: 50%;
            translate: 0 50%;
            opacity: 1;
        }
    }
    .animate-rise-b {
        animation: rise-b 10s ease infinite;
    }
</style>

<ContainerCentered>
    <div class="w-screen max-w-[600px] text-2xl font-semibold">
        <ContainerHighlight>
            <div class="absolute start-15.5 animate-rise-a">
                {phrases[a]}
            </div>
            <div class="absolute start-15.5 animate-rise-b">
                {phrases[b]}
            </div>
        </ContainerHighlight>
    </div>
</ContainerCentered>