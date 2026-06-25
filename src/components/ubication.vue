<template>
  <section id="contacto" class="contact">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Contacto</h2>
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-item" data-aos="fade-down" data-aos-delay="200">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="location-dot" />
            </div>
            <div class="contact-details">
              <h3>Dirección</h3>
              <p>5ta calle oriente 2, Sonsonate 2301</p>
            </div>
          </div>
          <div class="contact-item" data-aos="fade-down" data-aos-delay="400">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="phone" />
            </div>
            <div class="contact-details">
              <h3>Teléfono</h3>
              <a href="tel:+50379438284">+503 7943 8284</a>
            </div>
          </div>
          <div class="contact-item" data-aos="fade-down" data-aos-delay="600">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="envelope" />
            </div>
            <div class="contact-details">
              <a href="mailto:karinarbonilla1822@gmail.com"
                >karinarbonilla1822@gmail.com</a
              >
            </div>
          </div>
        </div>
        <div class="contact-map" data-aos="fade-down" data-aos-delay="400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8912569090185!2d-89.71730909517817!3d13.725032915092385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62b7e5ee012b45%3A0xa0e4adcead244628!2sMK%20Studio%20Belleza!5e0!3m2!1ses!2ssv!4v1780792240147!5m2!1ses!2ssv"
            allowfullscreen="false"
            loading="lazy"
            alt="map"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "../routes/font-awesome";
import Aos from "aos";
Aos.init({
  once: true, // solo anima una vez
  offset: 50,
  duration: 800,
  easing: "ease-in-out",
});
</script>
<style>
.contact {
  padding: 40px 20px;
  background-color: white;
}

.contact-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
  max-width: 100%;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fafafa;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(212, 160, 23, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
}

.contact-icon .icon {
  font-size: 1.8rem;
  color: #d4a017;
}

.contact-details h3 {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 6px;
  font-weight: 600;
}
.contact-details p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
}

.contact-map {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 12px;
  overflow: hidden;
}
.contact-map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 990px) {
  .contact-map {
    padding-top: 75%;
  }
  .contact-container {
    grid-template-columns: 1fr;
    align-items: center;
  }

  .contact-item {
    justify-content: flex-start;
    text-align: left;
  }

  .contact-map {
    margin-top: 10px;
  }
}
@media (max-width: 580px) {
  .contact-map {
    padding-top: 60%;
  }
}
</style>
