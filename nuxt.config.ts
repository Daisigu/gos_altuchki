// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', [
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
    imports: {
        dirs: [
            "composables",
        ],
    },
})
