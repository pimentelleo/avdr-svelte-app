<script>
	/**
	 * @type {any}
	 */
	export let users;
</script>

<header>
	<div class="header-main">
		{#if Object.keys(users).length == 0}
			<div class="users-status">No users online</div>
		{:else}
			<div class="users-status">Online users: {users}</div>
		{/if}
	</div>
</header>

<style>
	header {
		background-color: #282828;
		overflow: hidden;
	}
	.users-status {
		color: #ffffff;
	}
</style>
