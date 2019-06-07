import Vue from "vue";
import Router from "vue-router";
import Posts from "./views/Posts.vue";

import ViewPost from "./views/ViewPost";
import SignUp from "./views/SignUp";
import Login from "./views/Login.vue";
import Profile from "./views/Profile";
import CreatePost from "./views/CreatePost";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Posts
    },
    {
      path: "/post/:id",
      name: "viewpost",
      component: ViewPost
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/create-post",
      name: "createPost",
      component: CreatePost,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
