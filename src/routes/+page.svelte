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
				Minetinkers - Armas e ferramentas agora com slots! Com modificadores para adicionar aos
				slots
			</p>
		</div>
	</div>
</div>

<style>
	.main-section {
		width: auto;
		flex-grow: 1;
		background-color: #303030;
		display: flex;
	}
	.content {
		background-color: black;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		align-items: center;
	}
	img {
		width: 400px;
		margin-top: 16px;
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
		align-items: center;

		flex-grow: 1;
	}
</style>
