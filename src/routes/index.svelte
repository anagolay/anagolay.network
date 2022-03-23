<script lang='ts'>
import NavBar from "../components/navBar.svelte";
import logo from '../assets/logo.png'
import darkLogo from '../assets/logo-dark.png'

    let theme:String = 'dark'
    function switchTheme () {
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

<!-- <div class="flex w-full justify-around items-center fixed bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-5">
    <div class="theme-switcher">
        <button class="theme-switcher-button theme-switcher-light bg-gray-200 border-gray-200 border-2 dark:bg-black dark:border-black p-2 focus:outline-none" title="Light"><i class="fas fa-sun pointer-events-none"></i> Light</button><button class="theme-switcher-button theme-switcher-dark bg-gray-200 border-gray-200 border-2 dark:bg-black dark:border-black p-2 focus:outline-none" title="Dark"><i class="fas fa-moon pointer-events-none"></i> Dark</button><button class="theme-switcher-button theme-switcher-auto bg-gray-200 border-gray-200 dark:bg-black border-2 dark:border-black p-2 focus:outline-none" title="Auto"><i class="fas fa-adjust pointer-events-none"></i> Auto</button>
    </div>
</div>
<div class="flex w-full h-screen justify-center items-center bg-white dark:bg-gray-800">
    <h1 class="text-5xl text-gray-900 dark:text-white">Hello World!</h1>
</div> -->
<NavBar src={theme==='dark'? darkLogo : logo}/>
<main class='flex justify-center'>
<div class="flex flex-col">
    <h1 class="text-3xl font-bold underline p-5">
        Welcome!
    </h1>

    <button class='is-primary px-2 py-1 m-2 rounded-full' on:click={switchTheme}>
        Switch theme
    </button>
</div>

</main>
