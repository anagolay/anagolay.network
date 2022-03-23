<script lang='ts'>
    export let theme:string
    export let switchTheme:Function
 
    let toggleMenu:boolean = true
    function toggleSideBar(e:Event){
        e.preventDefault()
        toggleMenu= !toggleMenu
    }
    let links:{caption:string, url:string}[] = [
        {caption: 'Technology', url: '/technology'},
        {caption: 'How it works', url: '/'},
        {caption: 'The team', url: '/'},
        {caption: 'Community', url: '/'},
    ]
</script>

<nav class='flex items-center justify-evenly bg-main w-full text-sm columns-2 py-5'>
    <button class='md:hidden p-1 mx-2 top-0 left-0 bg-secondary rounded-md' on:click={toggleSideBar}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
    </button>
    <div class="flex justify-center items-center mx-auto h-10">
        <img class="object-contain mx-2 h-full grayscale brightness-400 " src={theme==='dark'? 'logo-dark.png' : 'logo.png'} alt='Anagolay logo'>
        <p class='text-lg tracking-widest'>ANAGOLAY</p>
    </div>
    <div class={`flex flex-col absolute top-16 bottom-0  ${toggleMenu?'-left-36 w-36 py-auto translate-x-36 duration-300':''} py-5  text-center right-full bg-main mx-auto 
        md:flex-row md:relative md:top-auto md:h-full md:py-0 md:right-auto md:left-auto md:w-fit md:translate-x-0`}>
        {#each links as link}
            <a href={link.url} class='px-2 my-2 md:my-auto min-w-fit hover:underline' on:click={toggleSideBar}>
                {link.caption}
            </a>
        {/each}
        <button class="bg-secondary px-6 mx-5 my-2 rounded-full flex items-center justify-center md:my-1" on:click={toggleSideBar}>
            FAQ
        </button>
    </div>
    <button class='flex p-1 mx-2 bg-secondary rounded-md'
        title={`Switch to ${theme==='dark'?'light':'dark'} mode`}
        on:click={(event)=>switchTheme(event)}>
        {#if theme==='dark'}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        {/if}
    </button>
</nav>






<style>
</style>