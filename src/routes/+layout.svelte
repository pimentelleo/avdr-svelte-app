<script>
	import NavBar from './NavBar.svelte';
	import './style.css';
	import { page } from '$app/stores';

	const baseUrl = $page.url.pathname.split('/')[1];
</script>

<div class="app">
	<NavBar />

	<div class="main-content">
		<slot />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.main-content {
		display: flex;
		justify-content: space-around;
		width: 0%;
		flex-grow: 1;
		overflow-y: auto;
	}
</style>
