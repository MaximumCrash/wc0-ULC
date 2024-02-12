<script>
	import BlurBg from "$lib/blurBG.svelte";
</script>

<BlurBg/>

<div class="content">
	<slot></slot>
</div>

<style>
	:global(body) {
		margin : 0;
		background : #0c0111;
		color: #f0eaf3;
	}

	:global(p) {
		font-family: "Poppins";
	}

	:global(h1,h2,h3,h4) {
		font-family: "DM Serif Text";
	}
</style>