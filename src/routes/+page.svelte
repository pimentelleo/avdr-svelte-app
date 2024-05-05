<script>
	import minecraftLogo from '$lib/minecraft-logo.min.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="A Vila dos Renegados - Minecraft Server" />
</svelte:head>

<div class="main-section">
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

<style>
	.main-section {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		/* width: 100%; */
		flex: 2;
		/* margin-bottom: 0; */
		overflow: auto;
		margin-top: 3%;
		color: #ffffff;
	}
	img {
		width: 400px;
	}
	p {
		color: #ffffff;
	}
	.server-title {
		flex-grow: 1;
	}
	.server-description {
		flex-grow: 1;
	}
	.server-plugins {
		flex-grow: 1;
	}
</style>
