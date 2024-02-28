<template>
  <div>
    <ol>
      <template v-for="post in posts" :key="`posts-${post.id}`">
        <li>
          <router-link :to="{ name: 'post-detail', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
        </li>
      </template>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { posts, onGetPost } from "@/mixins/MixinPost";

onMounted(() => {
  if (!posts.value.length) {
    (async () => {
      await onGetPost();
    })();
  }
});
</script>

<style scoped></style>
