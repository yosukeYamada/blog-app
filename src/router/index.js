import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/registerArticle",
    name: "ArticleRegister",
    component: () => import("../views/ArticleRegister.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/articleDetail/:articleId",
    name: "ArticleDetail",
    component: () => import("../views/ArticleDetail.vue"),
  },
  {
    path:"/articleUpdate/:articleId",
    name:"ArticleUpdate",
    component:()=>import("../views/ArticleUpdate.vue")
  },
  {
    path: "/myPage",
    name: "MyPage",
    component: () => import("../views/MyPage.vue"),
    children: [
      {
        path: "top",
        component: () => import("../components/myPage/Top.vue"),
      },
      {
        path: "registerArticle",
        component: () => import("../components/article/ArticleRegister.vue"),
      },
      {
        path: "articleHistory",
        component: () => import("../components/article/ArticleHistory.vue"),
      },
      {
        path:"setting",
        component:()=>import("../components/myPage/Setting.vue")
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
