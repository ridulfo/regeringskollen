<script lang="ts">
	import { getBetankande } from '../fetchers';
	import ReportCard from '../components/ReportCard.svelte';
	import { createQuery } from '@tanstack/svelte-query';

	const query = createQuery({
		queryKey: ['reports'],
		queryFn: () =>
			Promise.all(Array.from({ length: 5 }, (_, i) => i + 1).map(getBetankande)).then((res) =>
				res.flatMap((r) => r.dokumentlista.dokument)
			),
		staleTime: 1000 * 60 * 60 * 24, // 24 hours
		cacheTime: 1000 * 60 * 60 * 24 // 24 hours
	});
	$: reports = $query.data || [];
</script>

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
