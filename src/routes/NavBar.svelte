<script>
	import { page } from '$app/stores';
	import steve from '$lib/steve.svg';

	const navSections = ['', 'Rules', 'Wiki'];
</script>

<div class="wrapper">
	<div class="sidebar">
		{#each navSections as nav}
			<div><img src={steve} alt="Home" /><a href="/{nav.toLowerCase()}">{nav}</a></div>
		{/each}
	</div>
</div>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		text-align: center;
		height: 100%;
	}

	a {
		color: white;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		font-style: normal;
		font-size: 14;
	}
	img {
		width: 20%;
		height: auto;
	}
	.sidebar > div {
		display: flex;
		position: center;
		gap: 20px;
		align-items: center;
		align-content: center;
		margin-left: 10%;
	}
	.sidebar {
		align-items: right;
		flex: 1 0 10%;
	}
	.wrapper {
		display: flex;
		height: 100%;
		background-color: #1e1e1e;
		width: 18%;
	}
</style>
