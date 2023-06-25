<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	export const prerender = true;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});

	$: isStart = $page.url.pathname === '/';
	$: isAbout = $page.url.pathname === '/about';
</script>

<QueryClientProvider client={queryClient}>
	<div class="app">
		<div class="header">
			<div class="title">
				<h1><a href="/">riksdagskollen</a></h1>
				<h5 class="source">källa: sveriges riksdag</h5>
			</div>
			<nav>
				<a href="/" style={isStart ? 'text-decoration:none' : ''}>start</a>
				<a href="/about" style={isAbout ? 'text-decoration:none' : ''}>om</a>
				<a href="https://github.com/ridulfo/riksdagskollen">källkod</a>
			</nav>
		</div>
		<slot />
	</div>
</QueryClientProvider>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 1rem;
	}
	.title {
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	h1,
	.source {
		margin: 0;
		display: inline-block;
	}
	h1 a {
		text-decoration: none;
		color: #000;
	}
	.source {
		line-height: 80%;
		font-weight: 100;
	}

	nav {
		text-decoration: none;
		display: flex;
		flex: row;
		justify-content: space-between;
		width: 110%;
	}
	nav a {
		text-decoration: underline;
		color: #000;
		font-size: 1.5rem;
	}
</style>
