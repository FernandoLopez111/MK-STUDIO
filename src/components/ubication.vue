<template>
  <section id="contacto" class="contact">
    <div class="container">
      <h2 class="section-title"  data-aos="fade-up">Contacto</h2>
      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-item" data-aos="fade-right" data-aos-delay="200">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="location-dot" />
            </div>
            <div class="contact-details">
              <h3>Dirección</h3>
              <p>
                5Av Sur y 20 calle Pt Local #3 Colonia San Rafael una cuadra al
                poniente de la entrada sur de mega plaza Sonsonate , Sonsonate,
                El Salvador, 503
              </p>
            </div>
          </div>
          <div class="contact-item" data-aos="fade-right" data-aos-delay="400">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="phone" />
            </div>
            <div class="contact-details">
              <h3>Teléfono</h3>
              <p>+503 7943 8284</p>
            </div>
          </div>
          <div class="contact-item" data-aos="fade-right" data-aos-delay="600">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="envelope" />
            </div>
            <div class="contact-details">
              <h3>Correo Electronico</h3>
              <p>karinarbonilla1822@gmial.com</p>
            </div>
          </div>
          <div class="contact-item" data-aos="fade-right" data-aos-delay="800">
            <div class="contact-icon">
              <FontAwesomeIcon class="icon" icon="clock" />
            </div>
            <div class="contact-details">
              <h3>Horario</h3>
              <p>Lunes a Viernes: 9:00 - 6:00<br />Sábados: 9:00 - 4:00</p>
              <p>Domingos:Cita Previa</p>
            </div>
          </div>
        </div>
        <div class="contact-map" data-aos="fade-left" data-aos-delay="400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.0520352236904!2d-89.7323333!3d13.715298299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62b79b6c6a35ed%3A0xf23612ca4e6b4e02!2sMega%20Plaza%20Sonsonate.!5e0!3m2!1ses-419!2ssv!4v1759690786008!5m2!1ses-419!2ssv"
            allowfullscreen="false"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "../routes/font-awesome";
</script>
<style>
.contact {
  padding: 80px 20px;
  background-color: beige;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  max-width: 1100px;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
    min-height: 350px; 

}
.contact-map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-container iframe:hover {
  transform: scale(1.02);
}

@media (max-width: 990px) {
  .contact-map{
    min-height: 300px;
  }
  .contact-container {
    grid-template-columns: 3fr;
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
@media (max-width: 480px) {
  .contact-map {
    min-height: 250px; 
  }
}
</style>
