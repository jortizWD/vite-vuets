<template>
  <div>
    <ol>
      <template v-for="post in posts" :key="`posts-${post.id}`">
        <li>
          <router-link :to="{name: 'post-detail', params: {id: post.id} }">
            {{ post.title }}
          </router-link>
        </li>
      </template>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IPost } from './IPost';

const posts = ref<IPost[]>([]);

onMounted(() => {
  (async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json());

      posts.value = res;

    }catch(e){
      console.error(e);
    }
  })()
})

</script>

<style scoped>

</style>