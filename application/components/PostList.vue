<template>
    <div class="posts">
        <ul class="posts__list">
            <li
                v-for="(post, index) in posts"
                :key="index"
                class="posts__list-item">
                <img :src="`/images/${getPostId(post._path).replace(/^_/, '')}/thumb.jpg`" />
                <div>
                    <h5>
                        <NuxtLink :to="`${post.category}/${getPostId(post._path)}`">
                            {{post.title}}
                        </NuxtLink>
                    </h5>
                    <h6>{{ formatDate(post.date)}}</h6>
                    <p>
                        {{post.excerpt}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {
} from "#imports";

export default {
    props: {
        posts: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const getPostId = (postFilePath) => {
            return postFilePath.split("/")[2];
        };

        const formatDate = (stringDate) => {
            const date = new Date(
                stringDate
                    .replace("-", "/")
                    .replace(/T.*/, "")
            );
            return date.toLocaleDateString();
        };
                
        return {
            getPostId,
            formatDate,
        };
    },
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/modules/vars.scss";

.posts {
    &__list {
        list-style-type: none;
        width: calc(80% - 40px);
        margin: auto;
        margin-top: 0;
        padding: 0;
    }

    &__list-item {
        display: flex;
        align-items: center;

        &:not(:first-of-type) {
            padding-top: 40px;
        }

        &:not(:last-of-type) {
            padding-bottom: 40px;
            border-bottom: 1px solid #555;
        }

        & > img {
            width: 180px;
            height: 160px;
        }

        & > div {
            height: 160px;
            width: 100%;

            & > h5 {
                font-weight: bold;
                font-size: vars.$h5-size;
                margin-top: 0px;
                margin-left: 20px;
                margin-bottom: 0px;

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }

            & > h6 {
                font-weight: ligher;
                font-size: vars.$text-size--sm;
                margin-top: 4px;
                margin-bottom: 0px;
                text-align: right;
                color: #555;
            }

            & > p {
                margin-top: 3px;
                margin-left: 20px;
                font-weight: lighter;
            }
        }
    }
}
</style>
