<template>
    <PostRenderer :post="post" />
</template>

<script>
import { 
    useRoute,
} from "#imports";
import { useGetPost } from "~/composables/server-side";

export default {
    setup() {
        const route = useRoute();
        const { postId } = route.params;
        const post = useGetPost(postId);

        return {
            post
        };
    }
}
</script>
