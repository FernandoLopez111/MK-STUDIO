<template>
  <section class="home" id="home" data-aos="fade-in" data-aos-duration="1500">
    <div class="content">
      <h1>MK STUDIO BELLEZA</h1>
      <p>
        Nos comprometemos por ofrecer un trabajo de calidad, dedicación y
        precisión. Nos esforzamos por que cada uno de los servicios sean únicos
        y refleje la satisfacción de quienes confian en nosotros.
      </p>

      <router-link class="btn" to="#conoce-mas">Conoce Más</router-link>
    </div>
  </section>

  <section class="no" id="nosotros">
    <SectionUs />
  </section>

  <section class="no" id="conoce-mas">
    <CardSlide />
  </section>

  <section class="no" id="contacto">
    <ubication />
  </section>

  <a
    href="https://wa.me/50379438284?text=Hola,%20me%20interesan%20tus%20servicios"
    class="whatsapp-btn"
    target="_blank"
  >
    <FontAwesomeIcon
      :icon="['fab', 'whatsapp']"
      class="fab fa-whatsapp"
    ></FontAwesomeIcon>
  </a>
</template>

<style>
.home {
  min-height: 100vh;
  height: auto;
  padding: 6rem 9% 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../img/hands.jpg") no-repeat center center/cover;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 87px;
}
.content {
  max-width: 800px;
  padding: var(--spacing-md);
}
.content h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
}

.content p {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: var(--spacing-lg);
}
</style>

<script setup lang="ts">
import CardSlide from "../components/CardSlide.vue";
import ubication from "../components/ubication.vue";
import SectionUs from "../components/sectionUs.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
});
</script>
<style>
.whatsapp-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
  z-index: 3000; 
}


.whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.7);
}
</style>
