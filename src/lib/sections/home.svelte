<script>
	import Logo from "$lib/logo.svelte";
	import Calendly from "$lib/calendly.svelte";

	import homeIMG from "$lib/img/home.jpg";
	import chevronIMG from "$lib/img/chevron.svg";

	import css from "$styles/home.mcss";
    import Image from "$lib/components/image.svelte";
    import CTA from "$lib/components/cta.svelte";
    import Cta from "$lib/components/cta.svelte";
</script>

<section class={css.home} id="#">
	<div class={css.content}>
		<Logo class={css.logo}/>
		<p class={css.intro}>
			Boldly step into the future of work and discover a world of
			unlimited potential and infinite possibilities. Here, the fusion
			of innovative ideas and transformative change sets the stage
			for a new era in the workplace.
		</p>

		<Calendly>
				Schedule a Call Today
		</Calendly>
	</div>

	<Image imgClass={css.heroImage} src={homeIMG} alt="Michelle Jones Johnson looking towards the viewer confidently.">
		<div class={css.heroInfo}>
			<p class={css.heroTitle}>
				President, Founder
			</p>
			<p class={css.heroName}>
				Michelle Jones-Johnson
			</p>
		</div>
	</Image>

	<div class={css.cta}>
		<div class={css.ctaborder}>
			<p class={css.ctatext}>Discover the journey...</p>

			<img src={chevronIMG} class={css.arrow} alt="scroll call to action"/>


		</div>
	</div>
</section>