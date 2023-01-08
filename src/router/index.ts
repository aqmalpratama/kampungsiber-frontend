import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/pages/HomePage.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/pages/HomePage.vue"),
  },
  {
    path: "/folder/:id",
    component: () => import("../views/FolderPage.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/pages/SigninPage.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/pages/SignupPage.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/pages/DashboardPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:any/:id",
    name: "profile",
    component: () => import("../views/pages/ProfilePage.vue"),
  },
  {
    path: "/booking-consultation",
    component: () => import("../views/pages/BookingPage.vue"),
  },
  {
    path: "/booking-consultation/:id",
    name: "BookingInfo",
    component: () => import("../views/pages/BookingInfoPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function parseJwt(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    const jwtPayLoad = parseJwt(token);
    if (jwtPayLoad.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      next({ name: "home" });
    }
  }
  if (to.name === "signin" && token) {
    next({ name: "dashboard" });
  } else if (to.name === "dashboard" && !token) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
