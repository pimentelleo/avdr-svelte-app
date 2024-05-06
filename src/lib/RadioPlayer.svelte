<script>
	let paused = false;
	let volume = 0.4;
	const pauseRadio = () => {
		paused = !paused;
	};
</script>

<div class="radio-player">
	<audio bind:paused bind:volume id="plaza-radio">
		<source src="https://radio.plaza.one/mp3" />
	</audio>
	<button on:click={pauseRadio}>
		{paused ? 'Play' : 'Pause'}
	</button>
	{Math.floor(volume * 100)}
	<input type="range" bind:value={volume} max="1" step="0.01" />
</div>

<style>
	.radio-player {
		display: flex;
		justify-content: space-around;
		width: 30%;
	}
	input[type='range']::webkit-slider-thumb {
		border-radius: 4px;
	}
</style>
