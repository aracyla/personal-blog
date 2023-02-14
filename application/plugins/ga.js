import { useRouter } from "#imports";
import VueGtag, { trackRouter } from "vue-gtag-next";

export default ((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: "G-TH95LK2MDM",
        },
    });
    trackRouter(useRouter());
});
