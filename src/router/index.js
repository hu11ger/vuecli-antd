import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Login = () => import("views/Login.vue");
const Layout = () => import("views/Layout.vue");
const Home = () => import("views/home/Home.vue");
const Userlist = () => import("views/user/UserList.vue");
const Workorder = () => import("views/work/WorkOrder.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/userlist",
        component: Userlist,
      },
      {
        path: "/workorder",
        component: Workorder,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
