<script lang="ts">
  import type { Dokument } from "../types/betankande";
  import ReportReadMore from "./ReportReadMore.svelte";

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
  <button on:click={() => (showModal = true)}>Read more</button>
  <ReportReadMore
    reportUrl={"https:" + document.dokument_url_html}
    {showModal}
    {closeModal}
  />
</div>

<style>
  .report-summary {
    height: 50%;
    width: 80%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
  }
  .report-summary h3 {
    margin-top: 0;
  }
  .metadata {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
