<template>
    <div class="devnotes">
        <h2 class="devnotes__title">DevNotes</h2>
        <p class="devnotes__page-desc">
            {{$t("devnotes")}}
        </p>
        <p class="devnotes__page-desc">
            {{$t("devnotesUpdated")}}
        </p>
        <hr />
        <PostList :posts="posts" />
    </div>
</template>

<script>
import { useHead } from "#imports";
import { useGetPosts } from "~/composables/server-side";

export default {
    setup() {
        const posts = useGetPosts("devnotes");
        useHead({
            title: "Aracy ~/HOME/devnotes",
            meta: [{
                name: "description",
                content: "notes about software development",
            }],
        });

        return {
            posts,
        };
    },
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/modules/vars.scss";

.devnotes {
    margin: 0;
    padding: 0;
    color: vars.$text-color;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;

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
