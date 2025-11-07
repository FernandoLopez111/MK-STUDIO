import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./routes";

// Limpiar hash y desplazar al inicio antes de montar la app
if (window.location.hash) {
  window.history.replaceState({}, '', window.location.pathname + window.location.search)
  window.scrollTo(0, 0)
}

createApp(App).use(routes).mount("#app");


