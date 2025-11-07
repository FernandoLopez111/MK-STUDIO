<template>
  <header class="header">
    <router-link to="/" @click="handleLogoClick" class="active"
      ><img src="../assets/logoMK_black.svg" class="icono" id="icono"
    /></router-link>
    <FontAwesomeIcon
      icon="bars"
      id="bars"
      class="text-xl"
      @click="toggleMenu"
      :class="{ user: true, active: isMenuOpen }"
    />

    <nav class="navbar" :class="{ active: isMenuOpen }">
     
      <a
        class="active nav-link"
        href="#nosotros"
        @click.prevent="scrollToSection('nosotros')"
        ><FontAwesomeIcon :icon="['fas', 'bullseye']"/> Nuestro Objetivo</a
      >

      <a
        class="active nav-link"
        href="#conoce-mas"
        @click.prevent="scrollToSection('conoce-mas')"
        ><FontAwesomeIcon :icon="['fas', 'tag']"/> Nuestros Servicios</a
      >

      <a
        class="active nav-link"
        href="#contacto"
        @click.prevent="scrollToSection('contacto')"
        ><FontAwesomeIcon :icon="['fas', 'address-card']"/> Contacto</a
      >

      <span class="active-nav"></span>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "../routes/font-awesome";
import { useRoute } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";

const route = useRoute();

const handleLogoClick = (event: Event) => {
  if (route.path === "/" && route.hash) {
    event.preventDefault();
    window.location.href = "/";
  }
};
const scrollToSection = (sectionId: string): void => {
  isMenuOpen.value = false;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState({}, "", `#${sectionId}`);
  }
};

const clearHashOnLoad = (): void => {
  if (window.location.hash) {
    const tempHash = window.location.hash;

    window.history.replaceState(
      {},
      "",
      window.location.pathname + window.location.search
    );

    window.scrollTo(0, 0);

    console.log(`Hash ${tempHash} eliminado al cargar`);
  }
};

const handleBeforeUnload = (): void => {
  if (window.location.hash) {
    window.history.replaceState(
      {},
      "",
      window.location.pathname + window.location.search
    );
  }
};

onMounted(() => {
  clearHashOnLoad();
  window.addEventListener("beforeunload", handleBeforeUnload);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
