<script>
	import ContainerOffscreen from "$lib/containers/container-offscreen.svelte";
	import RadialGague from "$lib/dashboard/gagues/radial-gague.svelte";
</script>

<ContainerOffscreen>
    <RadialGague value={25} />
    <RadialGague value={50} />
    <RadialGague value={75} />
    <RadialGague value={100} />
</ContainerOffscreen>
