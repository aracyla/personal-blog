<template>
    <article class="post">
        <ContentRenderer :value="post">
            <h2 class="post__title">{{ post?.title }}</h2>
            <h6 class="post__date">{{ post?.date }}</h6>
            <hr />
            <ContentRendererMarkdown 
                v-if="post"
                :value="post" />
        </ContentRenderer>
    </article>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
@use "~/assets/styles/modules/vars.scss";

.post {
    margin: 0;
    color: vars.$text-color;
    min-height: calc(100vh - 60px);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;

    &__title {
        margin: 0;
        font-size: vars.$h2-size;
        font-weight: lighter;
        margin-top: 50px;
    }

    &__date {
        margin: 0;
        margin-top: 8px;
        margin-bottom: 10px;
        color: #555;

    }

    & hr {
        width: 80%;
        margin-left: 0;
        border: 1px solid #555;
        margin-bottom: 30px;
    }
}
</style>
