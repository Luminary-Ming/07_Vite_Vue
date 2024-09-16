// 从路由的核心 js 中解构出 createRouter()  createWebHistory()  函数
import { createRouter, createWebHistory } from "vue-router";

// 导入 vue 文件
// 一级路由界面
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
// 二级路由对应的页面
import Hot from "@/views/news/Hot.vue";
import Net from "@/views/news/Net.vue";

// 创建路由实例
const router = createRouter({
    /* 
        路由模式（分为历史模式和哈希模式，真实项目中尽量使用哈希模式）
            历史模式：（默认）
                1. URL 样式：不会包含 # 符号，例如 http://example.com/foo。

                2. 工作原理：历史模式利用了 HTML5 History API 来实现 URL 的跳转而无需重新加载页面。
                   当使用 history.pushState API 来完成 URL 跳转时，浏览器不会立即向服务器发送请求，但会更新浏览器的历史记录。
                   当用户点击浏览器的后退或前进按钮时，会触发 popstate 事件，Vue Router 监听到这个事件后，
                   就会根据当前的历史记录状态来匹配对应的路由组件进行渲染。

                3. 优点：URL 看起来更美观，更符合 URL 重写的标准，有助于搜索引擎优化（SEO）。

                4. 缺点：需要服务器配置，以便在用户直接访问一个非根 URL 时，能够返回同一个 index.html 页面，否则用户会看到一个 404 错误页面。
                        这是因为，在用户直接访问非根 URL 时，浏览器会向服务器发送请求，而服务器默认会查找对应的资源文件，如果找不到就会返回 404 错误。
                    （说白了就是浏览器相当于把 http://example.com/foo 中的 /foo 当作了服务器中的一个 servlet 路径，实际上服务器中没有配置这个路径，所以会报错 404）

            哈希模式：
                1. URL 样式：URL 包含一个 # 符号，例如 http://example.com/#/foo。
                   这个 # 及其后面的内容就是哈希值，它不会被发送到服务器，因此不会引发页面的重新加载。

                2. 工作原理：哈希模式利用了 URL 的 hash（即 # 后面的部分）来实现前端路由。
                   当 URL 的 hash 发生变化时，会触发 hashchange 事件，Vue Router 监听到这个事件后，
                   就会根据当前的 hash 值来匹配对应的路由组件进行渲染。

                3. 优点：兼容性好，即使是旧版浏览器也支持 hashchange 事件。

                4. 缺点：URL 中包含 # 符号，影响美观，也不符合真正的 URL 重写，搜索引擎优化（SEO）可能受到一定影响。
            
                
            index.js 中配置哈希模式：

                import { createRouter, createWebHashHistory } from 'vue-router'

                const router = createRouter({
                history: createWebHashHistory(),
                routes: [
                    //...
                ],
                })
    */
    history: createWebHistory(import.meta.env.BASE_URL),
    // 配置路由规则（vue 文件和路径的映射关系）
    routes: [
        /*
            在 routes 中配置
            对应 vue 页面的路由路径（path）
            路由对应的 vue 文件（component）
        */
        // 访问根路径，重定向到 home 首页
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: "/home",
            // 路由命名（name）
            name: "home",
            component: Home,
        },

        // 一级路由
        {
            path: "/news",
            component: News,
            // 路由地址重定向:：访问时直接去跳转这个地址，不再去访问 path 中的地址
            redirect: "/news/hot",

            // 二级路由：对应的 vue 页面渲染的出口是在当前这个一级路由页面（New.vue）中去配置的
            children: [
                {
                    // 二级路由的地址：它是在一级路由地址下的
                    path: "/news/hot",
                    component: Hot,
                },
                {
                    path: "/news/net",
                    component: Net,
                },
            ],
        },
        {
            /*
                params 传递参数，必须要在路由后面添加参数名。
                    如果路由后面没有 /:username/:age/:sex，地址栏就没有参数，刷新一下，数据就会消失
            */
            path: "/about/:username/:age/:sex",
            name: "about",
            // 组件动态加载
            component: () => import("@/views/AboutUs.vue"),
        },
    ],
});

// 将创建出来的路由实例导出，在 main.js 中 app.use(router); 让 vue 实例使用路由实例
export default router;
