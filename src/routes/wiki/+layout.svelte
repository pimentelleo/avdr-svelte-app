<script>
	import { page } from '$app/stores';
	console.log($page.url.pathname.split('/'));

	const baseUrl = $page.url.pathname.split('/')[1];
	const splitUrl = $page.url.pathname.split('/');
	const currentPage = splitUrl[splitUrl.length - 1];
	console.log(currentPage);
	const handleClick = (/** @type {Intl} */ tabValue) => () => (activeTabValue = tabValue);

	const tabSections = [
		'Slimefun',
		'Lands',
		'Squaremap',
		'Minetinkers',
		'Authme',
		'QuickShop',
		'TeleCraft'
	];
</script>

<div class="app">
	<div class="tabs">
		{#each tabSections as section}
			<div class={currentPage == section ? 'active' : 'inactive'}>
				<a href="/{baseUrl}/{section.toLowerCase()}">{section}</a>
			</div>
		{/each}
	</div>
	<div class="main-content">
		<slot />
	</div>
</div>

<style>
	.tab-active {
		background-color: yellow;
	}

	div.active > a {
		background-color: yellow;
	}

	.tab-inactive {
		background-color: pink;
	}

	.tabs > div > a:hover {
		background-color: green;
	}

	div > a {
		color: white;
	}
	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}
	.tabs {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #282828;
		flex-grow: 0;
		height: 14%;
	}

	.main-content {
		display: flex;
		justify-content: space-around;
		flex-grow: 1;
		overflow-y: auto;
	}
	.main-content::-webkit-scrollbar {
		display: none;
	}
</style>
