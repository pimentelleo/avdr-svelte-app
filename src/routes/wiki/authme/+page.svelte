<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
<div class="main-section">
	<div class="main-content">
		<h1>Squaremap</h1>
		<p>Plugin que gera o mapa web disponível em http://map.vilarenegados.duckdns.org</p>
		<div class="square-map">
			<object
				title="square-map"
				type="text/html"
				data="https://map.vilarenegados.duckdns.org/"
				width="1000px"
				height="600px"
			>
			</object>
		</div>
	</div>
</div>

<style>
	.main-section {
		width: auto;
		flex-grow: 1;
		background-color: grey;
	}
	h1 {
		background-color: red;
	}
	.main-content {
		display: flex;
		background-color: yellow;
	}
	.square-map {
		max-width: 50%;
		max-height: 20%;
	}
</style>
