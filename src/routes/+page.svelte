<script>
	import Home from "$lib/sections/home.svelte";
	import { ready } from "$lib/calendly.svelte";
</script>

<svelte:head>
	<!-- Calendly Integration -->
	<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async on:load={ () => ready.set(true) }></script>
	<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
</svelte:head>

<Home/>