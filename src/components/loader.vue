<template>
  <div class="loader-container">
    <div class="loader">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<style>
/* Centrado pantalla */
.loader-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffff; /* Cambia si deseas fondo claro */
}

/* Contenedor */
.loader {
  display: flex;
  gap: 20px;
}

/* Items */
.item {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: radial-gradient(circle, gold, goldenrod);
  box-shadow: 0 0 12px gold, 0 0 25px goldenrod;
  animation: bounce 0.8s infinite alternate ease;
  opacity: 0.85;
}

/* Delay per item */
.item:nth-child(2) {
  animation-delay: 0.2s;
}
.item:nth-child(3) {
  animation-delay: 0.4s;
}

/* Animation */
@keyframes bounce {
  0% {
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-22px) scale(1.05);
    opacity: 1;
  }
}
</style>
