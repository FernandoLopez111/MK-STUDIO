<template>
  <div class="loader-container">
    <!-- OLA SUPERIOR -->
    <div class="wave top-wave"></div>

    <!-- OLA INFERIOR -->
    <div class="wave bottom-wave"></div>

    <!-- LOGO -->
    <img src="/dist/assets/logoMK_black-8cadc74c.svg" alt="Logo" class="logo" />
  </div>
</template>

<style scoped>
/* CONTENEDOR */
.loader-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* LOGO CENTRADO */
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: pulse 1.8s infinite ease-in-out;
}

/* OLA BASE */
.wave {
  position: absolute;
  width: 200%;
  height: 55%;
  left: -50%;
  background-repeat: repeat-x;
  animation: waveMove 4s linear infinite;
  transform-origin: center;
}

/* OLA SUPERIOR */
.top-wave {
  top: -25%;
  transform: rotate(-10deg);
  background: linear-gradient(90deg, black 0%, black 50%, black 100%);
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
}

/* OLA INFERIOR */
.bottom-wave {
  bottom: -25%;
  transform: rotate(-10deg);
  animation-direction: reverse;
  background: linear-gradient(90deg, #d4af37 0%, #d4af37 50%, #d4af37 100%);
  border-top-left-radius: 50% 30%;
  border-top-right-radius: 50% 30%;
}

/* ANIMACIONES */
@keyframes waveMove {
  from {
    transform: translateX(0) rotate(-12deg);
  }
  to {
    transform: translateX(-50%) rotate(-12deg);
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.85;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.85;
  }
}
</style>
