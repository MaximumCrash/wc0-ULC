<script context="module">
    import { writable } from "svelte/store";
</script>

<script>
	const showCalendly = () => {
		Calendly.initPopupWidget({url: 'https://calendly.com/maximumcrash/30min'});
	}
</script>

<button on:click={showCalendly}>
	<slot/>
</button>
