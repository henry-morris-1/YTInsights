<script>
	import SubmitButton from "$lib/buttons/submit-button.svelte";
	import FileUpload from "$lib/inputs/file-upload.svelte";
	import NumberInput from "$lib/inputs/number-input.svelte";
    import TextInput from "$lib/inputs/text-input.svelte";
</script>

<form class="flex flex-col gap-5">
    <FileUpload id={'thumbnail'} label={'Thumbnail Image'} />
    <TextInput id={'title'} label={'Title'} />
    <TextInput id={'tags'} label={'Tags (Comma Separated)'} />
    <TextInput id={'topic'} label={'Video Topic'} />
    <NumberInput id={'subCount'} label={'Subscriber Count'} />

    <div class="flex justify-end">
        <SubmitButton />
    </div>
</form>