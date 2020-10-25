import { createApp, reactive } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import "primevue/resources/themes/bootstrap4-dark-purple/theme.css";
import "primevue/resources/themes/bootstrap4-light-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Card from "primevue/card";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const app = createApp(App);

app.use(store).use(router);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Card", Card);
app.component("Dropdown", Dropdown);

app.config.globalProperties.$appState = reactive({
  inputStyle: "outlined",
  darkTheme: false
});
app.config.globalProperties.$primevue = { ripple: true };

app.mount("#app");
