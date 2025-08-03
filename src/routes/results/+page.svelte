<script>
	import ContainerCentered from "$lib/containers/container-centered.svelte";
	import ContainerOffscreen from "$lib/containers/container-offscreen.svelte";
	import RadialGague from "$lib/dashboard/gagues/radial-gague.svelte";
	import Precontent from "$lib/dashboard/visual-mockup/precontent.svelte";
	import VisualMockup from "$lib/dashboard/visual-mockup/visual-mockup.svelte";
</script>

<div class="p-5 w-screen max-w-[1000px] grid grid-cols-1 lg:grid-cols-3">
    <div class="bg-teal-200 p-5 flex items-center justify-center">
        <div class="w-full max-w-[500px]">
            <RadialGague value={75} />
        </div>
    </div>
    <div class="border border-purple-500 lg:col-span-2 p-5 flex flex-col gap-[3%]">
        <Precontent />
        <VisualMockup
            title={'How China’s oil strategy seeks to cut the U.S. out | About That'}
            channelName={'CBC News'}
            imgUrl={'https://i.ytimg.com/vi/vucON8ZKTec/hqdefault.jpg'}
            videoLength={'12:56'}
            views={'670K'}
        />
        <Precontent />
    </div>
</div>
