<script setup lang="ts">
import Loader from "./components/loader.vue";
import { ref, onMounted } from "vue";
const showLoader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 2000);
});
</script>

<template>
  <div>
    <Loader v-if="showLoader" />

    <template v-else>
      <router-view />
    </template>
  </div>
</template>
