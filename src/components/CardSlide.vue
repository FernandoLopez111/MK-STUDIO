<template>
  <section class="services" id="conoce-mas">
    <h2 class="section-title"  data-aos="fade-up">Nuestros Servicios</h2>
    <div class="container-card">
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <div class="image">
          <img src="../img/pedicure.jpg" alt="Servicio de belleza" />
        </div>
        <div class="contenido-card">
          <h3 class="subtitle">Pedicure Spa</h3>
          <p>
            Disfruta de una experiencia de limpieza profunda, exfoliación e
            hidratación que reavitaliza tus pies.
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <div class="image">
          <img src="../img/manicure.jpeg" alt="Servicio de belleza" />
        </div>
        <div class="contenido-card">
          <h3 class="subtitle">Manicure Spa</h3>

          <p>
            Cuida tus manos con un tratamiento relajante que te hidrata, suaviza
            y da brillo a tus uñas.
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <div class="image">
          <img src="../img/manos.jpg" alt="Servicio de belleza" />
        </div>
        <div class="contenido-card">
          <h3 class="subtitle">Uñas Acrilicas</h3>

          <p>
            Dale vida a tus manos con uñas resistentes, elegantes y
            personalizdas a tu gusto.
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <div class="image">
          <img src="../img/Lifting.jpeg" alt="Servicio de belleza" />
        </div>
        <div class="contenido-card">
          <h3 class="subtitle">Lifting de Pestañas</h3>

          <p>
            Realza tu mirada con pestañas naturales, largas, rizadas y con gran
            definición sin necesidad de extensión.
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <div class="image">
          <img src="../img/laminado.jpeg" alt="Servicio de belleza" />
        </div>
        <div class="contenido-card">
          <h3 class="subtitle">Laminado y Pigmento</h3>

          <p>
            Dale forma y realza tus cejas con efecto natural y tono uniforme que
            resalta tu rostro.
          </p>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <div class="image">
          <img src="../img/Acripie.jpeg" alt="Servicio de belleza" />
        </div>
        <div class="contenido-card">
          <h3 class="subtitle">Acripie</h3>

          <p>
            Pedicure con acabado acrílico que embellece y protege tus uñas,
            dejándolas impecables por más tiempo.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.services {
  padding: var(--spacing-xl) 0;
}

.container-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 325px;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0px 2px 4px goldenrod;
  transition: all 400ms ease-out;
  margin: 20px;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(218, 165, 32, 0.5);
  transform: translateY(-6px);
}
.image {
  height: 200px;
  overflow: hidden;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}
.card:hover .image img {
  transform: scale(1.1);
}

.card .contenido-card {
  padding: 16px;
}

.card .contenido-card h3 {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.card .contenido-card .price {
  font-weight: 700;
  color: goldenrod;
  margin-bottom: var(--spacing-sm);
}
.card .contenido-card p {
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
}

@media (max-width: 1100px) {
  .container-card {
    flex-wrap: wrap;
  }

  .card {
    margin: 15px;
  }
}

@media (max-width: 768px) {
  .card {
    width: 60%;
    margin: 10px;
  }
  .section-title {
    font-size: 3rem;
  }

  .card img {
    height: 190px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 3rem;
  }
  .container-card {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 70%; /* Ocupa casi todo el ancho */
    margin: 10px 0; /* Espaciado vertical entre cards */
  }

  .card img {
    height: 190px;
  }

  .card .contenido-card p {
    font-size: 14px;
  }
}
</style>
