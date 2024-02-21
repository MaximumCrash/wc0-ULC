<script>
	import logoIMG from "$lib/img/logo.svg";

	import css from "$styles/logo.mcss";

	let className = false;
	export {
		className as class
	};
</script>

<div class={`${css.logo} ${className ?? ""}`}>
	<img class={css.image} src={logoIMG} alt="Unveiled Leadership Logo"/>

	<div class={css.copy}>
		<p class={css.name}>
			Unveiled Leadership
		</p>
		<p class={css.tagline}>
			Bold Leadership | Infinite Possibilities
		</p>
	</div>
</div>