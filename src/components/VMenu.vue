<template>
  <ul>
    <template
      v-for="route in routes.filter((item) => item.meta?.isNav)"
      :key="`route-${route.name}`"
    >
      <li>
        <router-link :to="{ name: route.name }">{{
          route.meta?.label
        }}</router-link>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const {
  options: { routes },
} = useRouter();
</script>

<style scoped></style>
