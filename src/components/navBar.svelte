<script lang='ts'>
    export let src:string = ''
</script>

<nav class='flex items-center justify-between bg-main w-screen p-1 text-sm'>
    <div class="col flex items-center h-10 pl-20">
        <img class="object-contain mx-2 h-10 grayscale brightness-400 " src={src} alt='Anagolay logo'>
        <p class='text-base tracking-widest'>ANAGOLAY</p>
    </div>
    <div class="input-group">
        <a href='/' class='px-3 hover:underline'>Technology</a>
        <a href='/' class='px-3 hover:underline'>How it Works</a>
        <a href='/' class='px-3 hover:underline'>The team</a>
        <a href='/' class='px-3 hover:underline'>Community</a>
        <button class="bg-secondary px-10 py-1 mx-5 rounded-full">FAQ</button>
    </div>

</nav>






<style>
</style>