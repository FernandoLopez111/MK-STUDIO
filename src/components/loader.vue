
<template>
  <section>
    <div class="loader-container">
      
       <div class="wave top-wave"></div>

       <div class="wave bottom-wave"></div> 

       LOGO 
      <img src="../assets/logoMK_black.svg" alt="Logo" class="logo" /> 
    </div>
  </section>
</template> 

<style scoped>
.loader-container {
  position: fixed;
  inset: 0;
 z-index: 9999;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: pulse 1.8s infinite ease-in-out;
}

/* OLA BASE */
.wave {
  position: absolute;
  width: 150%;
  height: 55%;
  left: -25%;
  animation: waveMove 4s linear infinite;
  will-change: transform;
}

.top-wave {
  top: -30%;
  transform: rotate(-10deg);
  background: black;
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
}

.bottom-wave {
  bottom: -30%;
  transform: rotate(-10deg);
  animation-direction: reverse;
  background: #d4af37;
  border-top-left-radius: 50% 30%;
  border-top-right-radius: 50% 30%;
}

@keyframes waveMove {
  from {
    transform: translateX(0) rotate(-10deg);
  }
  to {
    transform: translateX(-30%) rotate(-10deg);
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
