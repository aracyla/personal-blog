import { ref } from "vue";
import {
    useI18n,
    useAsyncData,
    useLocalePath,
    useRouter,
    useHead,
} from "#imports";

export const useGetPost = (postId) => {
    const { locale } = useI18n();
    const localePath = useLocalePath();
    const router = useRouter();

    const post = ref(null);
    useAsyncData(
        `${postId}`,
        () => queryContent(`${locale.value}/${postId}`)
            .findOne()
    ).then(({ data }) => {
        if(!data.value) {
            console.error("No document with the provided id found");
            router.replace(localePath('/'));
        }
        else {
            post.value = data.value;
            useHead({
                title: `Aracy ~/HOME/${post.value.category}`,
                meta:[{
                    name: "description",
                    content: post.value.description,
                }],
            });
        }
    }).catch((err) => {
        console.error(err);
        router.replace(localePath('/'));
    })

    return post;
}
