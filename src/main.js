import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.isMobile = window.innerWidth <= 767;

app.mount("#app");
