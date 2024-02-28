<template>
  <div class="grid grid-cols-3 gap-10">
    <aside>
      <ul>
        <template v-for="item in recientes" :key="`post-${item.id}`">
          <li>
            <router-link :to="{ name: 'post-detail', params: { id: item.id } }">
              {{ item.title }}
            </router-link>
          </li>
        </template>
      </ul>
    </aside>
    <div class="col-span-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { posts } from "@/mixins/MixinPost";
import { computed } from "vue";
const recientes = computed(() => posts.value.slice(0, 3));
</script>

<style scoped></style>
