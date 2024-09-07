// 导入 css 文件
import "./assets/main.css";

// 导入 Vue 框架，并且从中解构出 createApp 函数
import { createApp } from "vue";

// 导入 Vue 文件
import App from "./App.vue";

// 将 Vue 实例挂载到对应的 app 根标签上
createApp(App).mount("#app");
