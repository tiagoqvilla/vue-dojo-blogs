<template>
    <div class="tag">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length">
            <PostList :posts="postsWithTags"></PostList>
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import {computed, ref} from 'vue'
import { useRoute } from 'vue-router'

import Spinner from '@/components/Spinner.vue'
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
import TagCloud from '@/components/TagCloud.vue'

export default {
    components: {PostList, Spinner},
    setup() {
        const route = useRoute();
        const tag = route.params.tag;
        const { posts, error, load } = getPosts();

        load();

        const postsWithTags = computed(() => posts.value.filter((post) => post.tags.includes(tag)));
        console.log(postsWithTags);
        return { posts, error, postsWithTags };
    },
    components: { PostList, Spinner, TagCloud }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>