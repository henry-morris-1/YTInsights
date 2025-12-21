<script>
    import LaunchButton from "$lib/buttons/launch-button.svelte"
    import ContainerCentered from "$lib/containers/container-centered.svelte"
	import OrHorizontalRule from "$lib/separators/or-horizontal-rule.svelte"
</script>

<ContainerCentered>
    <div class="w-screen max-w-[1000px] grid grid-cols-3 gap-40 flex items-center">
        <div class="col-span-2 flex flex-col gap-5 items-center">
            <h1 class="text-6xl font-black">
                Your YouTube channel just got a new <span class="text-red-400">best friend</span>.
            </h1>
            <h2 class="text-2xl text-neutral-300">
                Content-tailored feedback to analyze your video's potential future success
            </h2>
            <LaunchButton href={'/about'}>Learn More</LaunchButton>
        </div>

        <div class="flex flex-col gap-2 items-center">
            <a href="/signin" role="button" class="w-full px-3 py-2 flex justify-center bg-red-400 hover:bg-red-500 transition-all duration-125 rounded-md cursor-pointer">
                Sign In
            </a>
            <OrHorizontalRule />
            <LaunchButton href={'/register'}>
                Create an Account
            </LaunchButton>
        </div>
    </div>
</ContainerCentered>
