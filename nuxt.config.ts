import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    css: [ 
        '@/assets/css/main.css',
    ],
    components: {
        dirs: ['~/components']
    },
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt'
    ],
    
})
