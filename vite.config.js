import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import preprocessor from "@modular-css/svelte";
import mcssVite from "@modular-css/vite";

// Set up the svelte preprocessor and get a reference to the
// mcss processor so we can pass it into the vite plugin
const { preprocess, processor } = preprocessor({
    // Default is .css but we need .mcss because of vite
    include : /.mcss$/i,

    // Other processor options
    // ...
});


export default defineConfig({
	plugins: [
		sveltekit(),
		mcssVite({
            processor,
        }),
	]
});
