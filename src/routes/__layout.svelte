<script lang='ts'>
    import "../app.css";
    import NavBar from "../components/navBar.svelte";

    // import { browser } from '$app/env';
    // import { writable } from 'svelte/store';
    
    // const defaultValue = 'summer';
    // const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;
    
    // export const theme = writable<string>('dark');
    
    // theme.subscribe((value) => {
    // if (browser) {
    //     window.localStorage.setItem('theme', value);
    // }
    // });
    
    // export { theme as default };

    let theme:string = 'dark'
    function switchTheme (e:Event) {
        e.preventDefault()
        const styles = document.documentElement.style
        const colors = theme === 'dark'? {
            '--main': '#D5DBDB',
            '--secondary': '#EAEDED',
            '--terciary': '#FBFCFC',
            '--primary': '#1E8449',
            '--text': '#054F77'
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

<NavBar theme={theme} switchTheme={switchTheme}/>
<slot />