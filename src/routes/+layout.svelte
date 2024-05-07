<script>
	/** @type {import('./$types').PageData} */
	/** @type {import('./$types').LayoutData} */

	import '../app.pcss';
	import NavBar from './NavBar.svelte';
	import Header from './Header.svelte';
	import './style.css';
	import { page } from '$app/stores';

	export let data;
	console.log(data);
	const baseUrl = $page.url.pathname.split('/')[1];
</script>

<div class="app">
	<NavBar></NavBar>

	<div class="main-content">
		<Header users={data} />
		<slot />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Minecraft';
		font-style: normal;
		font-weight: normal;
		src: url('$lib/fonts/minecraftten.woff') format('woff2');
	}

	@font-face {
		font-family: 'Minecraft Ten';
		font-style: normal;
		font-weight: normal;
		src: url('$lib/fonts/minecrafttext.woff') format('woff2');
	}

	.app {
		display: flex;
		flex-direction: row;
		height: 100%;
		font-family: 'Minecraft';
	}

	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 0%;
		flex-grow: 1;
		overflow-y: auto;
		background-color: #303030;
	}
	/* All Mobile Sizes (devices and browser) */
	@media only screen and (max-width: 767px) {
		.main-content {
			background-color: #303030;
		}
	}
</style>
