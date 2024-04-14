<script>
	import { page } from '$app/stores';
</script>

<div class="app">
	<div class="tabs">
		<div><a href="/wiki/slimefun">Slimefun</a></div>
		<div><a href="/wiki/lands">Lands</a></div>
		<div><a href="/wiki/squaremap">Squaremap</a></div>
		<div><a href="wiki/minetinkers">Minetinkers</a></div>
		<div><a href="wiki/authme">Authme</a></div>
		<div><a href="wiki/quickshop">QuickShop</a></div>
		<div><a href="wiki/telecraft">TeleCraft</a></div>
	</div>
	<div class="main-content">
		<slot />
	</div>
</div>

<style>
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
		height: 10%;
	}

	.main-content {
		display: flex;
		justify-content: space-around;
		flex-grow: 2;
		overflow-y: auto;
	}
</style>
