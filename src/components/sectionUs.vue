<template>
  <section class="We-Us" id="nosotros">
    <div class="We-Us-container">
      <img
        src="../img/Sister.jpeg"
        alt="Sobre Nosotros"
        class="We-img"
        data-aos="fade-right"
        data-aos-delay="400"
      />
      <div class="We-content" data-aos="fade-left" data-aos-delay="200">
        <h2 class="We-title">Nuestro Objetivo</h2>
        <p class="We-text">
          Cuidamos tus manos y pies, transformándolos en verdaderas obras de
          arte. Cada manicure, pedicure y aplicación de acrílicos está pensado
          para resaltar tu estilo y personalidad, con un servicio profesional
          que te hará sentir única. Porque en MK Studio no solo embellecemos tus
          uñas, creamos experiencias llenas de glamour y detalle en cada
          visita..
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.We-Us {
  background-color: #121212;
  color: #fff;
  padding: 70px 40px;
  margin-top: 6rem;
  padding: var(--spacing-xl) 0;
}

.We-Us-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10px, auto;
  gap: 3rem;
}

.We-img {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  flex-shrink: 0;
  object-fit: cover;
}

.We-content {
  flex: 1;
  min-width: 280px;
  max-width: 600px;
  transition: all 0.3s ease;
}

.We-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: goldenrod;
}

.We-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}
@media (max-width: 768px) {
  .We-Us-container {
    flex-direction: column;
    text-align: center;
  }

  .We-content {
    margin-top: 1.5rem;
  }

  .We-title {
    font-size: 1.8rem;
  }

  .We-text {
    font-size: 1rem;
  }
}
</style>
