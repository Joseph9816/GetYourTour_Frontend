import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/place",
    name: "Place",
    component: () =>
      import(/* webpackChunkName: "place" */ "../views/Place.vue"),
  },
  
  {
    path: "/administrator",
    name: "Administrator",
    component: () =>
      import(/* webpackChunkName: "administrator" */ "../views/Administrator.vue"),
  },

  {
    path: "/home",
    name: "Home2",
    component: Home2,
    /* paramas: {
      auth: {
        logged: false,
      },
      user: {
        name: "",
        last_name: "",
        email: "",
        id: ""
      }
    } */
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
    path: "/register",
    name: "register",
    component: () =>
    import(/* webpackChunkName: "register" */ "../views/Register.vue"),

    /* props: true,
    meta: { login: true },

    beforeEnter: (to, from, next) => {
        const auth = to.params.auth;

        if (!auth.logged) {
            next();
        } else {
            next("/");
        }
    } */
  },

  {
    path: "/storeTour",
    name: "store",
    component: () =>
    import(/* webpackChunkName: "storeTour" */ "../views/StoreTour.vue"),
  },
  
  {
    path: "/showTour",
    name: "show",
    component: () =>
    import(/* webpackChunkName: "showTour" */ "../views/ShowTour.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.login) {
        const auth = to.params.auth;

        if (auth && auth.logged) {
            next();
        } else {
            next("/");
        }
    } else {
        next();
    }
});

export default router;
