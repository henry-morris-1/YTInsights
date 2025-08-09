<style>
    @property --angle {
        syntax: '<angle>';
        inherits: false;
        initial-value: 0deg;
    }
    @keyframes rotate {
        from { --angle: 90deg; }
        to { --angle: 270deg; }
    }
    .animate-rotate {
        animation: rotate 1s linear infinite;
    }
</style>

<div class="w-full h-full aspect-square [container-type:size] flex items-center justify-center perspective-distant transform-3d">
    <div class="absolute inset-0 bg-yellow-500 rounded-full animate-rotate [transform:translateX(calc(5cqw_*_sin(calc(var(--angle)_+_180deg))))_translateZ(calc(5cqw_*_cos(calc(var(--angle)_+_180deg))))_rotateY(calc(var(--angle)_+_180deg))]"></div>
    <div class="absolute inset-0 bg-yellow-700 rounded-full animate-rotate [transform:translateX(calc(5cqw_*_sin(var(--angle))))_translateZ(calc(5cqw_*_cos(var(--angle))))_rotateY(var(--angle))]"></div>
    <div class="absolute inset-y-0 w-[10cqh] bg-yellow-700 [transform:rotateY(var(--angle))]"></div>
</div>