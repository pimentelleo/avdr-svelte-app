<script>
	import { page } from '$app/stores';
	import steve from '$lib/steve.svg';
</script>

<div class="wrapper">
	<aside>
		<div>
			<div><img src={steve} alt="Home" /><a href="/">Home</a></div>
			<div><img src={steve} alt="Regras" /><a href="/rules">Regras</a></div>
			<div><img src={steve} alt="Conexões" /><a href="/connections">Conexões</a></div>
			<div><img src={steve} alt="Plugins" /><a href="/plugins">Plugins</a></div>
			<div><img src={steve} alt="Registro" /><a href="/register">Registro</a></div>
			<div><img src={steve} alt="Wiki" /><a href="/wiki">Wiki</a></div>
			<div><img src={steve} alt="Settings" /><a href="/settings">Settings</a></div>
		</div>
	</aside>
</div>

<style>
	aside > div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		height: 100%;
	}

	a {
		color: white;
		font-size: 40px;
	}
	img {
		width: 20%;
		height: auto;
	}
	aside > div > div {
		display: flex;
		align-items: center;
		align-content: center;
	}
	aside {
		flex: 1 0 10%;
	}
	.wrapper {
		display: flex;
		height: 100%;
		background-color: #1e1e1e;
		width: 25%;
	}
</style>
