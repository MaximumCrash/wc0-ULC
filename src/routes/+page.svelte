<script>
	import About from "$lib/sections/about.svelte";
import Home from "$lib/sections/home.svelte";
</script>

<svelte:head>
	<!-- Calendly Integration -->
	<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
	<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
</svelte:head>

<Home/>
<About/>