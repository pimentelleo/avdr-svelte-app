<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
<div class="main-section">
	<div class="main-content">
		<h1>Squaremap</h1>
		<p>Plugin que gera o mapa web disponível em https://map.vilarenegados.duckdns.org</p>
		<div class="square-map">
			<object
				title="square-map"
				type="text/html"
				data="https://map.vilarenegados.duckdns.org/"
				width="100%"
				height="100%"
			>
			</object>
		</div>
	</div>
</div>

<style>
	.main-section {
		flex-grow: 1;
		height: 100%;
	}
	.main-content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background-color: grey;
		height: 100%;
		width: 100%;
	}
	.square-map {
		background-color: red;
		flex-grow: 2;
		position: center;
		margin: 0;
		align-self: auto;
		width: 80%;
	}
</style>
