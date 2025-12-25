<script setup lang="ts">
import Loader from "./components/loader.vue";
import Header from "./components/index.vue";
import Footer from "./components/cardfooter.vue"
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
    <Header />
    <router-view />
    <Footer/>
    </template>
  </div>
</template>
