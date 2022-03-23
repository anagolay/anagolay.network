<script lang='ts'>
    import NavBar from "../components/navBar.svelte";

    let theme:string = 'dark'
    function switchTheme (e:Event) {
        e.preventDefault
        const styles = document.documentElement.style
        const colors = theme === 'dark'? {
            '--main': '#D5DBDB',
            '--secondary': '#EAEDED',
            '--terciary': '#FBFCFC',
            '--primary': '#1E8449',
            '--text': '#0B0400'
        }:{
            '--main': '#052233',
            '--secondary': '#093954',
            '--terciary': '#054F77',
            '--primary': '#8CFF00',
            '--text': '#F4FBFF'
        }
        theme = theme === 'dark' ? 'light' : 'dark'
        for ( let key of Object.keys(colors) ){
            styles.setProperty(key, colors[key]);
        }
    }
</script>

<head>
    <link rel="icon" href='%svelte%/src/assets/logo.png' />
</head>

<NavBar theme={theme} switchTheme={switchTheme}/>
<main class='flex justify-center'>
<div class="flex flex-col items-center w-full">
    <h1 class="text-3xl font-bold underline p-5">
        Welcome!
    </h1>

    <button class='bg-gray-400 text-gray-500 px-2 py-1 m-2 rounded-full' on:click={switchTheme} disabled>
        Switch theme
    </button>
    <p class='text-xs w-2/4 text-center'>Now you can switch theme using the upper right button</p>
</div>

</main>
