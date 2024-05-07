<script>
	import textureGrey from '$lib/btn-texture-grey.png';

	let buttonType = 'green';
	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

{#if buttonType == 'green'}
	<div class="button-border">
		<button on:click on:mouseover on:mouseleave on:focus>
			<slot />
		</button>
	</div>
{/if}

{#if buttonType == 'grey'}
	<div class="button-border">
		<button
			class="grey"
			on:click
			on:mouseover
			on:mouseleave
			on:focus
			style="background-image: url({textureGrey})"
		>
			<slot />
		</button>
	</div>
{/if}

<style>
	.button-border {
		border-color: black;
		border-width: 1px;
	}
	button {
		background-color: #128947;
		border-top-color: #35ce49;
		border-bottom-color: #0b4e2d;
		border-width: 2px;
		border-left-width: 0;
		border-right-width: 0;
	}
</style>
