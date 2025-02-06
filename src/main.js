import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import BaseCard from "./components/UI/BaseCard.vue";
import TabButton from "./components/UI/TabButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("tab-button", TabButton);
app.component("base-dialog", BaseDialog);
app.mount("#app");
