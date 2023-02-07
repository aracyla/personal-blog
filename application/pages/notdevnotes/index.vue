<template>
    <div class="notdevnotes">
        <h2 class="notdevnotes__title">!NotDevNotes</h2>
        <p class="notdevnotes__page-desc">
            {{$t("notdevnotes")}}
        </p>
        <p class="notdevnotes__page-desc">
            {{$t("notdevnotesUpdated")}}
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
        const posts = useGetPosts("notdevnotes");
        useHead({
            title: "Aracy ~/HOME/notdevnotes",
            meta: [{
                name: "description",
                content: "notes about everything aside software development",
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

.notdevnotes {
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
