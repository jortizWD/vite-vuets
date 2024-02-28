import { computed } from "vue";

import store from "@/store"

export const posts = computed(() => store.state.posts);

export const onGetPost = async () => {
  await store.dispatch('getPots');
}