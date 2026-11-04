import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Tailwind CSS v4 is integrated through Vite, keeping the Astro setup lean.
export default defineConfig({
  site: 'https://balkrishnajha.com.np',
  vite: {
    plugins: [tailwindcss()],
  },
});
