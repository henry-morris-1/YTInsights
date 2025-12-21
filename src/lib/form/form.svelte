<script>
    import ContainerCentered from "$lib/containers/container-centered.svelte"
	import FileUpload from "$lib/form/inputs/file-upload.svelte"
	import NumberInput from "$lib/form/inputs/number-input.svelte"
    import SubmitButton from "$lib/buttons/submit-button.svelte"
    import TextInput from "$lib/form/inputs/text-input.svelte"
</script>

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