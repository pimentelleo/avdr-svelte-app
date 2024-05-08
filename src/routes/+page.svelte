<script>
	import minecraftLogo from '$lib/minecraft-logo.min.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="A Vila dos Renegados - Minecraft Server" />
</svelte:head>

<div class="main-section">
	<div class="content">
		<img src={minecraftLogo} alt="A Vila dos Renegados" />

		<div class="server-title">A vila dos Renegados - A Minecraft Server</div>
		<div class="server-description">
			<p>Um servidor survival com dinamicas de mmorpg e factory assembly</p>
		</div>
		<div class="server-plugins">
			<h1>Principais plugins do Servidor:</h1>
			<p>Slimefun4 - Plugin que adiciona os sistemas de fábrica no servidor</p>
			<p>Lands - Gerenciamento de terrenos e nações</p>
			<p>QuickshopReremake - Crie suas lojinhas, venda seus itens e gerencie seus estoques!</p>
			<p>
				Minetinkers - Suas armas e ferramentas agora tem slots! E podem receber modificadores que
				alteram ou melhoram suas funcionalidades!
			</p>
		</div>
	</div>
</div>

<style>
	.main-section {
		width: auto;
		flex-grow: 1;
		background-color: #303030;
		height: 0%;
	}
	.content {
		background-color: black;
		display: flex;
		flex-direction: column;
		align-content: center;
		padding: 0;
		height: 100%;
	}
	img {
		width: 400px;
	}
	p {
		color: #ffffff;
	}
	h1 {
		color: #ffffff;
	}
	.server-title {
		flex-grow: 1;
		color: #ffffff;
	}
	.server-description {
		flex-grow: 1;
		color: #ffffff;
	}
	.server-plugins {
		display: flex;
		flex-direction: column;
		align-content: center;
		flex-grow: 1;
	}
</style>
