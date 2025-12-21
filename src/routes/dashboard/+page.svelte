<script>
    import ContainerCentered from "$lib/containers/container-centered.svelte"
	import Form from "$lib/form/form.svelte"
    import Indicator from "$lib/wizard/indicator.svelte"
	import Loading from "$lib/loading/loading.svelte"
	import Results from "$lib/results/results.svelte"
	import VerticalConnector from "$lib/separators/vertical-connector.svelte";

    let current = $state(0)
    function handleClick(index) {
        console.log(index)
        current = index
    }
</script>

<ContainerCentered>
    <div class="w-[800px] flex gap-5 items-center">
        <div class="w-30">
            <Indicator current={current} index={0} handleClick={() => handleClick(0)}>Form</Indicator>
            <VerticalConnector height={'h-5'} width={'w-4'} />
            <Indicator current={current} index={1} handleClick={() => handleClick(1)}>Loading</Indicator>
            <VerticalConnector height={'h-5'} width={'w-4'} />
            <Indicator current={current} index={2} handleClick={() => handleClick(2)}>Results</Indicator>
        </div>

        <div class="flex-grow-1">
            {#if current === 0}
                <Form />
            {:else if current === 1}
                <Loading />
            {:else}
                <Results />
            {/if}
        </div>
    </div>
</ContainerCentered>

