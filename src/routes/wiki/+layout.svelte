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
	let cur = tabSections[0];
</script>

<div class="app">
	<div class="tabs">
		{#each tabSections as section}
			<div class:selected={cur === section}>
				<a on:click={() => (cur = section)} href="/{baseUrl}/{section.toLowerCase()}">{section}</a>
			</div>
		{/each}
	</div>
	<div class="main-content">
		<slot />
	</div>
</div>

<style>
	.tabs > div {
		cursor: pointer;
		margin-top: 10px;
	}
	.tabs > div.selected {
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
		border-bottom-width: 8px;
		border-bottom-color: #118645;
		border-bottom-width: 4px;
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
		align-items: self-start;
		background-color: #282828;
		flex-grow: 0;
		height: 10%;
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
