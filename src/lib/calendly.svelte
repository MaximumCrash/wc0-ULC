<script context="module">
    import { writable } from "svelte/store";

	export let ready = writable(false);
</script>

<script>
	const showCalendly = () => {
		if ($ready && Calendly) {
			Calendly.initPopupWidget({url: 'https://calendly.com/maximumcrash/30min'});
		}
	}
</script>


{#if $ready}
<button on:click={showCalendly}>
	<slot/>
</button>
{/if}
