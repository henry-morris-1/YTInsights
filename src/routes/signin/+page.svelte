<script>
	import LaunchButton from "$lib/buttons/launch-button.svelte"
	import ContainerCentered from "$lib/containers/container-centered.svelte"
	import PasswordInput from "$lib/inputs/password-input.svelte"
    import SubmitButton from "$lib/buttons/submit-button.svelte"
    import TextInput from "$lib/inputs/text-input.svelte"
</script>

<ContainerCentered>
    <form class="flex flex-col gap-5">
        <TextInput id={'username'} label={'Username'} />
        <PasswordInput id={'password'} label={'Password'} />

        <SubmitButton>
            Sign in
        </SubmitButton>
    </form>
</ContainerCentered>