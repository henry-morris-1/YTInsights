<script>
    import LaunchButton from "$lib/buttons/launch-button.svelte";
</script>

<main class="h-screen flex flex-col gap-50 items-center justify-center">
    <div class="w-screen max-w-[900px] flex flex-col gap-5 items-center justify-center">
        <h1 class="text-6xl font-black">
            Your YouTube channel just got a new <span class="text-red-300">best friend</span>.
        </h1>
        <h2 class="text-2xl text-neutral-300">
            Content-tailored feedback to analyze your video's potential future success
        </h2>
    </div>

    <div class="w-screen max-w-[500px] flex justify-between">
        <LaunchButton text={'Get Started'} href={'/analyze'} />
        <LaunchButton text={'Learn More'} href={'/about'} />
    </div>
</main>