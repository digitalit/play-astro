import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), vue()]
});