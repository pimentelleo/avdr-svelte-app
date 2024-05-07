<script>
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import headphones from '$lib/minecraft-lava.svg';
	import play from '$lib/play.svg';
	import pause from '$lib/pause.svg';
	import textureGrey from '$lib/btn-texture-grey.png';
	import Button from './buttons/Button.svelte';

	let paused = true;
	let volume = 0.4;
	const pauseRadio = () => {
		paused = !paused;
	};
	let radioGui = false;
	const openRadioGui = () => {
		radioGui = !radioGui;
	};
</script>

<audio autoplay bind:paused bind:volume id="plaza-radio">
	<source src="https://radio.plaza.one/mp3" />
</audio>
<div class="radio-main">
	{#if radioGui}
		<div transition:slide={{ delay: 250, duration: 300, easing: quartOut, axis: 'x' }}>
			<div class="radio-player">
				<div class="button-border">
					<div class="volume-level" style="background-image: url({textureGrey})">
						{Math.floor(volume * 100)}
					</div>
				</div>
				<input type="range" bind:value={volume} max="1" step="0.01" />
				<div class="button-border">
					<button
						class="play-pause"
						style="background-image: url({textureGrey})"
						on:click={pauseRadio}
					>
						{paused ? 'Play' : 'Pause'}
					</button>
				</div>
			</div>
		</div>
	{/if}
	<button class="radio-button" on:click={openRadioGui}> MUSIC </button>
</div>

<style>
	.radio-main {
		display: flex;
		gap: 4px;
	}

	.radio-button {
		background-color: #128947;
		border-top-color: #35ce49;
		border-bottom-color: #0b4e2d;
		border-width: 2px;
		border-left-width: 0;
		border-right-width: 0;
		width: 60px;
	}
	.radio-player {
		display: flex;
		justify-content: space-around;
		width: 30%;
	}
	.play-pause {
		border-top-color: #b2b2b2;
		border-bottom-color: #434343;
		border-left-color: #b2b2b2;
		border-right-color: #434343;
		border-width: 1px;
		width: 55px;
	}
	.volume-level {
		border-top-color: #b2b2b2;
		border-bottom-color: #434343;
		border-left-color: #b2b2b2;
		border-right-color: #434343;
		border-width: 1px;
		width: 30px;
		text-align: center;
	}
	.button-border {
		border-color: black;
		border-width: 1px;
		width: 100%;
	}

	input[type='range'] {
		-webkit-appearance: none !important;
		background-color: #2c2c2c;
		border-color: black;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none !important;
		height: 26px;
		width: 14px;
		border-radius: 0;
		border-width: 2px;
		border-color: black;
		background-color: #737373;
		box-shadow: 0 0 1px 0 black;
	}
</style>
