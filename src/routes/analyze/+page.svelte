<script>
	import ContainerCentered from "$lib/containers/container-centered.svelte"
	import FileUpload from "$lib/inputs/file-upload.svelte"
	import NumberInput from "$lib/inputs/number-input.svelte"
    import TextInput from "$lib/inputs/text-input.svelte"

    import { goto } from '$app/navigation'
</script>

<ContainerCentered>
    <form class="flex flex-col gap-5">
        <FileUpload id={'thumbnail'} label={'Thumbnail Image'} />
        <TextInput id={'title'} label={'Title'} />
        <TextInput id={'tags'} label={'Tags (Comma Separated)'} />
        <TextInput id={'topic'} label={'Video Topic'} />
        <NumberInput id={'subCount'} label={'Subscriber Count'} />

        <div class="flex justify-end">
            <button type="button" onclick="{() => goto('/loading')}" class="px-3 py-2 bg-red-400 hover:bg-red-500 transition-all duration-125 rounded-md cursor-pointer">
                Analyze
            </button>
        </div>
    </form>
</ContainerCentered>
