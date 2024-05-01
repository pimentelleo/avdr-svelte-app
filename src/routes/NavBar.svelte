<script>
	import { page } from '$app/stores';
	import steve from '$lib/steve.svg';
	import craftTable from '$lib/craft-table.svg';
	import minecraft from '$lib/minecraft.svg';
	import minecraftLava from '$lib/minecraft-lava.svg';
	import bookshelf from '$lib/bookshelf.svg';

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
		justify-content: space-around;
		align-items: center;
		align-content: center;
		text-align: center;
		height: 100%;
		overflow-y: auto;
		align-items: right;
		flex: 1 0 10%;
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
