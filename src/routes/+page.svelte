<svelte:head>
	<title>Home</title>
	<meta name="description" content="A Vila dos Renegados - Minecraft Server" />
</svelte:head>

<div class="main-section">
	<div class="server-title">Titulo do servidor</div>
	<div class="server-description">Descrição do servidor</div>
	<div class="server-plugins">Plugins do servidor</div>
</div>

<style>
	.main-section {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: space-between;
		/* width: 100%; */
		flex: 2;
		background-color: pink;
		/* margin-bottom: 0; */
		overflow: auto;
	}
	.server-title {
		background-color: magenta;
		flex-grow: 1;
	}
	.server-description {
		background-color: red;
		flex-grow: 1;
	}
	.server-plugins {
		background-color: orange;
		flex-grow: 1;
	}
</style>
