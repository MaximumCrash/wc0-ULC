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
		margin : unset;
	}

	:global(h1,h2,h3,h4) {
		font-family: "DM Serif Text";
	}

	:global(button) {
		background: rgb(17,19,33);
		backdrop-filter: blur(4px);
		padding: 15px;
		color: #f0f5ff;
		font-size: 1.1rem;
		font-family: Poppins;
		border: 1px solid #14f4ff;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.05s ease-in-out;
		transform: translateY(0) scale(1);
		transform-origin: center;

		&:hover {
			border-width: 2px;
			color: #f0f5ff;
			border: 1px solid #1182f3;
			background: rgb(24, 27, 46);
			transform: scale(0.95);
		}
	}
</style>