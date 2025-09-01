<script>
	import ContainerCentered from "$lib/containers/container-centered.svelte"
	import FileUpload from "$lib/inputs/file-upload.svelte"
	import NumberInput from "$lib/inputs/number-input.svelte"
    import SubmitButton from "$lib/buttons/submit-button.svelte"
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

        <SubmitButton>
            Analyze
        </SubmitButton>
    </form>
</ContainerCentered>
