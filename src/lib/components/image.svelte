<script>
	import css from "$styles/image.mcss";

	export let src = "";
	export let alt = "";
	let className = "";
	export let imgClass = "";

	export { className as class };
</script>

<div class={`${css.image}${className}`}>
	<img {src} {alt} class={imgClass} />
	<slot/>
</div>