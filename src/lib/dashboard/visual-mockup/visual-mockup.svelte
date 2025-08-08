<script>
    import EllipsisVertical from "@lucide/svelte/icons/ellipsis-vertical"

    let { title, channelName, imgUrl, videoLength, views } = $props()
</script>

<div class="max-w-full max-h-full gap-[2%] flex [container-type:size] aspect-4/1 font-yt select-none">
    <div class="w-[42%]">
        <div class="relative [container:size] aspect-video">
            <img src={imgUrl} alt="thumbnail" class="h-full w-full rounded-[2cqw] object-cover" />
            <div class="absolute bottom-0 right-0 m-[1cqw] px-[1cqw] py-[0.25cqw] rounded-[1cqw] bg-black/60 text-[3cqw] font-medium">
                {videoLength}
            </div>
        </div>
    </div>
    <div class="relative w-[56%]">
        <div class="pe-[22cqh] text-[14cqh] font-medium leading-[1.43] max-h-[40%] line-clamp-2 text-ellipsis">
            <span>{title}</span>
        </div>
        <div class="text-[12cqh] leading-[1.5] text-[rgba(170,170,170)]">
            <div class="mt-[2cqh]">{channelName}</div>
            <div class="mt-[2cqh]">
                {views} views <span class="mx-[2cqh] text-[10cqh]">•</span> 1 day ago
            </div>
            <div class="flex mt-[2cqh] font-medium">
                <span class="px-[4cqh] bg-white/10 rounded-[2cqh]">New</span>
            </div>
        </div>
        <div class="absolute top-0 right-0 w-[22cqh] h-[22cqh] flex items-center justify-end">
            <EllipsisVertical class="w-full h-full" />
        </div>
    </div>
</div>