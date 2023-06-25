<script lang="ts">
	export let onClick: () => void;
</script>

<button on:click={onClick}><slot /></button>

<style>
	button {
		font-family: Playfair Display, serif;
		color: #000;
		background-color: #fff;
		border: 1px solid black;
		border-radius: 2px;
		padding: 0.5rem;
		cursor: pointer;
		-webkit-box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
	}
	button:hover {
		translate: 2px 2px;
		-webkit-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.75);
	}
</style>
