<script>
	import Avatar from "./avatar.svelte"
    import Coin from "./coin.svelte"
</script>

<header class="z-1000 sticky top-0 left-0 right-0 h-20 p-5 flex gap-4 justify-between backdrop-blur-md">
    <div>

    </div>
    <div>

    </div>
    <div class="flex gap-6">
        <div class="flex gap-3 items-center">
            <div class="text-end leading-4">
                <div class="text-xl font-bold leading-5">250</div>
                Credits
            </div>
            <div class="h-full p-1 aspect-square">
                <Coin />
            </div>
        </div>
        <Avatar username="username" pfpSrc="https://cdn.pfps.gg/pfps/56355-greg.jpeg" />
    </div>
    
</header>