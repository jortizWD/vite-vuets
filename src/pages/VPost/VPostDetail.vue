<template>
  <div v-if="post" class="flex flex-col gap-5">
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <p>
      {{ post.body }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { IPost } from "./IPost";

import { useStore } from 'vuex';
const store = useStore();

const posts = computed(() => store.state.posts)

const route = useRoute();

const post = ref<IPost | null>(null);

watch(() => route.params.id, () => {
  onGetDetail();
});

const onGetDetail = () => {
  const {
    params: { id },
  } = route;
  const result = posts.value.find((item:any) => item.id == id)
  if(result){
    post.value = result;
  }else {
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
  }
}

onMounted(() => {
  onGetDetail();
});
</script>

<style scoped></style>
