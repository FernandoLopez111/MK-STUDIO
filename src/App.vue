<script setup lang="ts">
import Index from "../src/components/index.vue";
import Footer from "../src/components/cardfooter.vue";
import Loader from "./components/loader.vue"
import { ref, onMounted } from "vue";
const showLoader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false;
  }, 2000); // ⏳ tiempo en milisegundos (2 segundos)
});
</script>

<template>
  <div>
    <!-- Loader -->
    <Loader v-if="showLoader" />

    <!-- Página -->
    <div v-else id="app" class="flex flex-col min-h-screen">
      <!-- Navbar -->
      <Index />

      <!-- Contenido dinámico -->
      <main class="flex-grow">
        <router-view />
      </main>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

