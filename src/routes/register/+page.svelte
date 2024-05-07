<script>
	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;
	console.log(form);
	console.log(data);
</script>

<div class="main-section">
	<div>
		<form method="POST">
			<label>
				Username
				{#if form?.userAlreadyExists}
					<input
						class="input-error"
						name="username"
						type="text"
						placeholder="Username already exists!"
						required
					/>
				{:else}
					<input
						class="input-main"
						name="username"
						type="text"
						placeholder="Enter your username"
						required
					/>
				{/if}
			</label>
			<label>
				Email
				{#if form?.emailAlreadyUsing}
					<input
						class="input-error"
						name="email"
						type="email"
						placeholder="Email is being used!"
						required
					/>
				{:else}
					<input
						class="input-main"
						name="email"
						type="email"
						placeholder="Enter your email"
						required
					/>
				{/if}
			</label>
			<label>
				Password
				<input
					class="input-main"
					name="password"
					type="password"
					placeholder="Enter your password"
					required
				/>
			</label>
			<label>
				Repeat password
				<input
					class="input-main"
					name="password"
					type="password"
					placeholder="Repeat your password"
					required
				/>
			</label>
			<div class="button-border">
				<button><div class="button-text">Register</div></button>
			</div>
		</form>
	</div>
</div>

<style>
	.main-section {
		width: auto;
		flex-grow: 1;
		background-color: #303030;
	}
	form {
		/* left: 50%; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		width: 100%;
		gap: 20px;
		margin-top: 10%;
	}
	label {
		display: flex;
		flex-direction: column;
		color: #ffffff;
		font-style: normal;
		font-size: small;
	}
	.input-main {
		background-color: #131313;
		border-radius: 4px;
		color: #ffffff;
		padding: 10px 10px 10px 10px;
		border: 0;
	}

	.input-error {
		background-color: #131313;
		border-radius: 4px;
		color: #ffffff;
		border-color: red;
		border: 2;
		padding: 10px 10px 10px 10px;
	}
	::placeholder {
		color: #ffffff7f;
		font-size: small;
	}
	.button-border {
		border-color: black;
		border-width: 1px;
		width: 200px;
	}
	.button-text {
		color: #ffffff;
		text-shadow: 0px 2px #0b522b;
		font-size: medium;
		margin: 0px 0px 3px 0px;
	}
	button {
		width: 100%;
		height: 100%;

		background-color: #128947;
		border-top-color: #35ce49;
		border-bottom-color: #0b4e2d;
		border-width: 2px;
		border-left-width: 0;
		border-right-width: 0;
	}
</style>
