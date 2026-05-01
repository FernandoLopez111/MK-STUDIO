<template>
  <teleport to="body">
    <div :class="['loader-container', { hidden: !loading }]">
      <div class="wave top-wave"></div>
      <div class="wave bottom-wave"></div>
      <img
        src="../assets/logoMK_black.svg"
        loading="lazy"
        alt="Logo"
        class="logo"
      />
    </div>
  </teleport>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>

<style scoped>
.loader-container {
  position: fixed;
  inset: 0;
  z-index: 99999;
  overflow: hidden;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.4s ease;
}

.loader-container.hidden {
  opacity: 0;
  pointer-events: none;
}

.logo {
  position: relative;
  width: 140px;
  z-index: 10;
  animation: pulse 1.8s infinite ease-in-out;
}

/* OLA BASE */
.wave {
  position: absolute;
  width: 110%;
  height: 50%;
  left: -5%;
  animation: waveMove 4s linear infinite;
  will-change: transform;
}

.top-wave {
  top: -25%;
  background: black;
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
}

.bottom-wave {
  bottom: -25%;
  background: #d4af37;
  animation-direction: reverse;
  border-top-left-radius: 50% 30%;
  border-top-right-radius: 50% 30%;
}

@keyframes waveMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-20%);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.85;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.85;
  }
}
</style>
