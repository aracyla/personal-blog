<template>
    <nav class="navbar">
        <div class="navbar__content">
            <NuxtLink 
                class="navbar__logo"
                :to="localePath('/')" >
                <span class="navbar__logo--at">@</span>
                <span class="navbar__logo--txt">ARACYLA </span>
                <span class="navbar__logo--tilde">~</span>/HOME/
            </NuxtLink>
            <ul class="navbar__items">
                <li 
                    class="navbar__item"
                    v-for="(route, i) in routes"
                    :key="i">
                    <NuxtLink 
                        v-if="route.type === 'route'"
                        :to="localePath(route.path)">
                        <span> 
                            {{route.text}}
                        </span>
                    </NuxtLink>
                    <a
                        v-if="route.type === 'link'"
                        target="_blank"
                        :href="route.path">
                        <span :class="`navbar__icon navbar__icon--${route.icon}`">
                            <TheIcon
                                :name="route.icon"
                                height="30px" />
                        </span>
                    </a>
                    <a
                        v-if="route.type === 'email'"
                        @click="triggerMailTo()">
                        <span
                            :class="`navbar__icon navbar__icon--${route.icon}`">
                            <TheIcon
                                :name="route.icon"
                                height="30px"/>
                        </span>
                    </a>
                </li>
                <li> 
                    <select 
                        v-model="locale"
                        class="navbar__language-select"
                        @change="onLanguageChange()">
                        <option value="en">EN</option>
                        <option value="pt-br">PT-BR</option>
                    </select> 
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { 
    useI18n, 
    useLocalePath,
    useRouter,
    useRoute,
    useRuntimeConfig,
} from "#imports";

const ROUTES = [{
    text: "DevNotes",
    path: "/devnotes",
    icon: "",
    type: "route"
}, {
    text: "!NotDevNotes",
    path: "/notdevnotes",
    icon: "",
    type: "route"
}, {
    text: "Projects",
    path: "/projects",
    icon: "",
    type: "route"
}, {
    text: "Github",
    path: "https://github.com/aracyla",
    icon: "github",
    type: "link",
}, {
    text: "E-Mail",
    path: "wrongemail@gmail.com",
    icon: "mail",
    type: "email",
}];

export default {
    setup() {
        const routes = ROUTES;
        const { locale } = useI18n();
        const localePath = useLocalePath();
        const router = useRouter();
        const route = useRoute();
        const runtimeConfig = useRuntimeConfig();

        const onLanguageChange = () => {
            router.replace(localePath(route.path))
        };

        const triggerMailTo = () => {
            window.location.href = `mailto:${atob(runtimeConfig.emailContact)}?subject=${atob(runtimeConfig.emailSubject)}`;
        };

        return {
            routes,
            locale,
            localePath,
            onLanguageChange,
            triggerMailTo,
        };
    },
};
</script>

<style lang="scss" scoped>
@use "./../assets/styles/modules/vars.scss";
@use "./../assets/styles/modules/mixins.scss";

$navbar-color: #777;
$navbar-bg-color: vars.$primary;
$navbar-font-size: vars.$text-size;
$navbar-max-width: vars.$max-content-width;

.navbar {
    background-color: $navbar-bg-color;
    color: $navbar-color;
    font-size: $navbar-font-size;
    height: 60px;
    line-height: 60px;
    
    &__content {
        display: flex;
        height: 100%;
        margin: auto;
        max-width: $navbar-max-width;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        padding: 0 20px;
        transition: color .5s ease;
        font-size: $navbar-font-size;
        text-align: left;
        color: #777; 

        & span {
            font-family: logo-font;
        }

        &:hover {
            color: #999;
        }

        &--at {
            color: vars.$secondary;
        }

        &--txt {
            color: white;
            @include mixins.is-link;
        }

        &--tilde {
            color: vars.$secondary;
        }
    }

    &__items {
        display: flex;
        align-items: center;

        & li {
            display: inline-block;
            width: auto;
            padding: 0 10px;
            max-height: 60px;
            background-color: $navbar-bg-color;

            & a {
                color: $navbar-color;
                @include mixins.is-link;
            }
            
            &:last-child {
                padding-right: 20px;
            }
        }
    }

    &__icon {
        display: flex;

        &--github {
            margin-left: -15px;
            margin-top: -5px;
        }

        &--mail {
            margin-left: -29px;
        }
    }

    &__language-select {
        background-color: $navbar-bg-color;
    }
}
</style>
