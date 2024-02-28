<template>
  <div>
    <ul>
      <template v-for="route in routes.filter(item => item.meta?.isNav)" :key="`route-${route.name}`">
        <li>
          <router-link :to="{ name: route.name }">{{
            route.meta?.label
          }}</router-link>
        </li>
      </template>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const {
  options: { routes },
} = useRouter();

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
