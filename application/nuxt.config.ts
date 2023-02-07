import enMessages from "./messages/en";
import ptBrMessages from "./messages/pt-br";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "nuxt-svgo",
        "@nuxtjs/i18n"
    ],
    content: {
    },
    app: {
        head: {
            charset: "utf-16",
            viewport: "width=500, initial-scale=1",
            title: "Aracy ~/HOME",
            meta: [{ 
                name: "description", 
                content: "content"
            }],
            link: [{
                rel: "icon",
                type: "image/svg+xml",
                href: "/main-icon.svg",
            }],
        },
    },
    css: [
        "normalize.scss/normalize.scss",
        "~/assets/styles/modules/global.scss",
    ],
    router: {
    },
    runtimeConfig: {
        public: {
            emailContact: "YXJhY3lsYWRldkBnbWFpbC5jb20=",
            emailSubject: "RnJvbSB3ZWJzaXRlOiA="
        },
    },
    i18n: {
        locales: ["en", "pt-br"],
        defaultLocale: "en",
        vueI18n: {
            messages: {
                en: enMessages,
                "pt-br": ptBrMessages,
            }
        }
    },
});
