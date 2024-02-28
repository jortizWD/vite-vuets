<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>
      {{ post.body }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { IPost } from "./IPost";

const route = useRoute();

const post = ref<IPost | null>(null);

onMounted(() => {
  const {
    params: { id },
  } = route;

  (async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      ).then((res) => res.json());

      post.value = res;
    } catch (e) {
      console.error(e);
    }
  })();
});
</script>

<style scoped></style>
