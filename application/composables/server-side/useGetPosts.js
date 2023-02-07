import { ref } from "vue";
import {
    useI18n,
    useAsyncData,
} from "#imports";

export const useGetPosts = (category) => {
    const posts = ref([]);
    const { locale } = useI18n();
    const env = process.env.NODE_ENV;
    useAsyncData(
        `posts-${category}`,
        () => queryContent(`${locale.value}`)
            .where({ category })
            .only(["title", "excerpt", "date", "_path", "category", "tags"])
            .find()
    ).then(({ data }) => {
        posts.value = (env === "development") ?
            data.value :
            data.value.filter((post) => !post.title.startWith("_"));
    });

    return posts;
};
