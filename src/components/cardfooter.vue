<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  window.history.replaceState(
    {},
    "",
    window.location.pathname + window.location.search
  );
};
</script>

<template>
  <footer class="footer">
    <div class="social">
      <a
        target="_blank"
        href="https://www.facebook.com/KMstudionails?__cft__[0]=AZUTHLiO0DaesKqYThVpNeMnd8DsOJLCkA7WrZTre3ebctP8HqOPRgP0wd47lo4Dq7FgmfJ49gR1PuGTSh0I591mJBEK57Du9eEk9u6sgxiM4aCKU2EKcZhD-A_l5tkfDY29y4FdQcDvusHxGZjjkz1W3xO_VHskdNTSUn_bjMc-ZhzYCKqF5Hfm9S3c7i1DMXzLrClYTvKOAIvT22qZE9B-&__tn__=-]C%2CP-R"
        ><FontAwesomeIcon :icon="['fab', 'facebook']"></FontAwesomeIcon
      ></a>
      <a
        target="_blank"
        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fnailsroomkm1%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExSGJmVlc4ZDYza3d1ZVo3NQEerSRCm2jqWcRuzNdeVgumjH0ZctuE2JNcONiQJ7XekJc1s9LM2W-418_60UQ_aem_KQkW4-osy8xbIR0Hp_GjzQ&h=AT0xC_DBhwzzidTOkd42cRTk1CL0xRuwQSy0Oj_l1BBSVm-RMoZrCdNBAbdN4Z-zceFFlrLSZZwUjBsfypW33HvCf6FFda8kfTBqXDiwtprDzvrlgQBCFR8cTPNO1zVxt3vdRg"
        ><FontAwesomeIcon :icon="['fab', 'instagram']"></FontAwesomeIcon
      ></a>
      <a>
        <FontAwesomeIcon
          @click="goToTop"
          :icon="['fas', 'arrow-up-from-bracket']"
        />
      </a>
    </div>
    <ul class="list">
      <li class="active">
        <router-link to="#nosotros">Nuestro Objetivo</router-link>
      </li>
      <li class="active">
        <router-link to="#conoce-mas">Nuestros Servicios</router-link>
      </li>
      <li class="active">
        <router-link to="#contacto">Contactanos</router-link>
      </li>
    </ul>

    <p class="copyright">Copyright by Marielos Lopez @2025</p>
  </footer>
</template>
