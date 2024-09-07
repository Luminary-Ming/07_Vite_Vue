// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";

// 引入路由
import router from "./router";

const app = createApp(App);

// 将路由实例绑定到 vue 实例上，这样在任何 vue 实例存在的地方都可以使用路由对象
app.use(router);

app.mount("#app");
