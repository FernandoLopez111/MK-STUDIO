<script setup lang="ts">
import Header from "./components/index.vue";
import Footer from "./components/cardfooter.vue"
import loader from "./components/loader.vue";

</script>

<template>
    <Header />
    <loader/>
    <router-view />
    <Footer/>
</template>
