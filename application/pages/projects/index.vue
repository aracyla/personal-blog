<template>
    <div class="projects">
        <h2 class="projects__title">Projects</h2>
        <p class="projects__page-desc">
            {{$t("projects")}}
        </p>
        <hr />
        <PostList :posts="posts" />
    </div>
</template>

<script>
import { useHead } from "#imports";
import {
    useGetPosts,
} from "~/composables/server-side";

export default {
    setup() {
        const posts = useGetPosts("projects");
        useHead({
            title: "Aracy ~/HOME/projects",
            meta: [{
                name: "description",
                content: "notes about projects that I've been involved",
            }],
        });

        return {
            posts,
        };
    }
}
</script>

<style lang="scss" scoped>
@use "~/assets/styles/modules/vars.scss";

.projects {
    margin: 0;
    padding: 0;
    color: vars.$text-color;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;

    &__title {
        margin: 0;
        font-size: vars.$h2-size;
        font-weight: lighter;
        margin-bottom: 20px;
    }

    &__page-desc {
        max-width: 70%;
        line-height: 1.5rem;
    }

    & hr {
        width: 70%;
        border: 1px solid #555;
        margin-left: 0px;
        margin-bottom: 70px;
    }
}
</style>
