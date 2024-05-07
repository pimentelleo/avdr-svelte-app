<script>
	/**
	 * @type {any}
	 */
	import RadioPlayer from '../lib/RadioPlayer.svelte';

	export let users;

	console.log('header info users' + ' ' + JSON.stringify(users));
</script>

<header>
	<div class="header-main">
		{#if Object.keys(users.item).length == 0}
			<div class="users-status">No users online</div>
		{:else}
			<div class="users-status">
				Online users: {#each users.item as user}
					<div class="user-card">{user.username}</div>
				{/each}
			</div>
		{/if}
	</div>
	<RadioPlayer />
</header>

<style>
	header {
		background-color: #282828;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
	}
	.users-status {
		color: #ffffff;
		display: flex;
		gap: 10px;
	}
	.user-card {
		background-color: #131313;
		border-radius: 4px;
		color: #ffffff;
		padding: 8px 6px 6px 6px;
		margin: 0;
		text-align: center;
		line-height: 0.1em;
	}
</style>
