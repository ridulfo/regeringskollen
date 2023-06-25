<script lang="ts">
	import type { Dokument } from '../types/betankande';
	import ReportReadMore from './ReportReadMore.svelte';

	export let document: Dokument;
	let showModal = false;
	const closeModal = () => (showModal = false);
</script>

<div class="report-summary">
	<h3>{document.titel}</h3>
	<b>{document.debattnamn}</b>
	<div class="metadata">
		<span>Date: {document.datum}</span>
	</div>
	<p>{@html document.notis}</p>
	<button on:click={() => (showModal = true)}>Läs dokument</button>
	<ReportReadMore reportUrl={'https:' + document.dokument_url_html} {showModal} {closeModal} />
</div>

<style>
	.report-summary {
		background-color: #fff;
		height: 50%;
		width: 80%;
		border: 1px solid black;
		border-radius: 2px;
		padding: 1rem;
		-webkit-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 10px 10px 0px 0px rgba(0, 0, 0, 0.75);
	}
	.report-summary h3 {
		margin-top: 0;
	}
	.metadata {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	button {
    font-family: Playfair Display, serif;
		background-color: #fff;
		border: 1px solid black;
		border-radius: 2px;
		padding: 0.5rem;
		cursor: pointer;
		-webkit-box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
	}
</style>
