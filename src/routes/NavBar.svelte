<script>
	import { page } from '$app/stores';
	import steve from '$lib/steve.svg';
	import craftTable from '$lib/craft-table.svg';
	import minecraft from '$lib/minecraft.svg';
	import minecraftLava from '$lib/minecraft-lava.svg';
	import bookshelf from '$lib/bookshelf.svg';
	let selectedPage = '';
	/**
	 * @param {string} page
	 */
	function setActivePage(page) {
		Promise.resolve(true).then(() => (selectedPage = page));
	}

	const navSections = [
		{
			sectionName: 'Home',
			sectionRoute: '',
			sectionIcon: minecraft
		},
		{
			sectionName: 'Rules',
			sectionRoute: 'rules',
			sectionIcon: steve
		},
		{
			sectionName: 'Connect',
			sectionRoute: 'connect',
			sectionIcon: craftTable
		},
		{
			sectionName: 'Wiki',
			sectionRoute: 'wiki',
			sectionIcon: bookshelf
		},
		{
			sectionName: 'Register',
			sectionRoute: 'register',
			sectionIcon: minecraftLava
		}
	];
</script>

<div class="wrapper">
	<div class="sidebar">
		{#each navSections as nav}
			<div>
				<img src={nav.sectionIcon} alt={nav.sectionName} />
				<a href="/{nav.sectionRoute}">
					{nav.sectionName}
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		text-align: center;
		height: 100%;
		overflow-y: auto;
		align-items: right;
		margin-top: 20%;
		gap: 50px;
	}

	a {
		color: white;
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
	.wrapper {
		display: flex;
		height: 100%;
		background-color: #1e1e1e;
		width: 18%;
		gap: 10px;
	}
	/* All Mobile Sizes (devices and browser) */
	@media only screen and (max-width: 767px) {
		.wrapper {
			display: flex;
			height: 100%;
			background-color: #1e1e1e;
			width: 29%;
		}
		.sidebar {
			justify-content: space-evenly;
		}
	}
</style>
