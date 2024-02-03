// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@sidebase/nuxt-session', [
        "@pinia/nuxt",
        {
            autoImports: ["defineStore", "acceptHMRUpdate"],
        },
    ]],
    pinia: {
        storesDirs: ["./stores/**", "./custom-folder/stores/**"],
    },
    nitro: {
        compressPublicAssets: true,
    },
    colorMode: {
        preference: 'light'
    },
    imports: {
        dirs: [
            "composables",
        ],
    },
})
