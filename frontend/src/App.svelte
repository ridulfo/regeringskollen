<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import { getBetankande } from "./fetchers";
  import ReportCard from "./components/ReportCard.svelte";

  const query = createQuery({
    queryKey: ["reports"],
    queryFn: () => getBetankande(),
  });
  $: reports = $query.data?.dokumentlista.dokument || [];
</script>

<h1>Regeringskollen</h1>
<h3>Källa: Sveriges riksdag</h3>

<div class="reports-container">
  {#each reports as report}
    <ReportCard document={report} />
  {/each}
</div>

<style>
  .reports-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
  }
</style>
