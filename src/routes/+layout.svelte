<script>
	/** @type {import('./$types').PageData} */

	import '../app.pcss';
	import NavBar from './NavBar.svelte';
	import Header from './Header.svelte';
	import './style.css';
	import { page } from '$app/stores';
	import { Alert, DarkMode } from 'flowbite-svelte';

	export let data;
	console.log(data);
	const baseUrl = $page.url.pathname.split('/')[1];
</script>

<audio autoplay id="plaza-radio">
	<source src="http://radio.plaza.one/mp3" />
</audio>
<div class="app">
	<NavBar></NavBar>

	<div class="main-content">
		<Header users={data} />
		<slot />
	</div>
</div>

<style>
	@import url('https://fonts.cdnfonts.com/css/minecraft-4');

	.app {
		display: flex;
		flex-direction: row;
		height: 100%;
		font-family: 'Minecraft', sans-serif;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 0%;
		flex-grow: 1;
		overflow-y: auto;
	}
</style>
