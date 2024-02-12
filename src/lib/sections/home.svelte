<script>
	import Logo from "$lib/logo.svelte";
	import Calendly from "$lib/calendly.svelte";

	import homeIMG from "$lib/img/home.jpg";

	import css from "$styles/home.mcss";
</script>

<section class={css.home}>
	<div class={css.content}>
		<Logo/>
		<p>
			Boldly step into the future of work and discover a world of
			unlimited potential and infinite possibilities. Here, the fusion
			of innovative ideas and transformative change sets the stage
			for a new era in the workplace.
		</p>

		<Calendly>
				Schedule a Call Today
		</Calendly>
	</div>

	<img class={css.heroImage} src={homeIMG} alt="Michelle Jones Johnson looking towards the viewer confidently."/>

	<div class={css.cta}>
		<p>Discover the journey...</p>
		<div class={css.border}>
			<div class={css.arrow}>

			</div>
		</div>
	</div>
</section>