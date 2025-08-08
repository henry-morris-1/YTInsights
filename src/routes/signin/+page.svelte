<script>
	import LaunchButton from "$lib/buttons/launch-button.svelte"
	import ContainerCentered from "$lib/containers/container-centered.svelte"
	import FileUpload from "$lib/inputs/file-upload.svelte"
	import NumberInput from "$lib/inputs/number-input.svelte"
    import OrHorizontalRule from "$lib/separators/or-horizontal-rule.svelte"
	import PasswordInput from "$lib/inputs/password-input.svelte"
    import TextInput from "$lib/inputs/text-input.svelte"
</script>

<ContainerCentered>
    <div class="flex flex-col gap-5 items-center">
        <form class="flex flex-col gap-5">
            <TextInput id={'username'} label={'Username'} />
            <PasswordInput id={'password'} label={'Password'} />

            <button class="px-3 py-2 flex justify-center bg-red-400 hover:bg-red-500 transition-all duration-125 rounded-md cursor-pointer">
                Sign In
            </button>
        </form>

        <OrHorizontalRule />
        <LaunchButton href={'/register'}>Create an Account</LaunchButton>
    </div>
</ContainerCentered>