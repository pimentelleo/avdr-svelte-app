<script>
	import { page } from '$app/stores';
	import steve from '$lib/steve.svg';
</script>

<div class="wrapper">
	<aside>
		<ul>
			<li><img src={steve} alt="Home" /><a href="/">Home</a></li>
			<li><img src={steve} alt="Regras" /><a href="/rules">Regras</a></li>
			<li><img src={steve} alt="Conexões" /><a href="/connections">Conexões</a></li>
			<li><img src={steve} alt="Plugins" /><a href="/plugins">Plugins</a></li>
			<li><img src={steve} alt="Registro" /><a href="/register">Registro</a></li>
			<li><img src={steve} alt="Wiki" /><a href="/wiki">Wiki</a></li>
			<li><img src={steve} alt="Settings" /><a href="/settings">Settings</a></li>
		</ul>
	</aside>
</div>

<style>
	a {
		color: white;
		font-size: 40px;
	}
	img {
		width: 20%;
		height: auto;
	}
	li {
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

	li > a {
		border-radius: 1rem;
	}
</style>
