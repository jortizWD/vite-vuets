import { createRouter, createWebHistory } from "vue-router";
import VHomeVue from "../pages/VHome.vue";
import VPostVue from "../pages/VPost/VPost.vue";
import VPostArchiveVue from "../pages/VPost/VPostArchive.vue";
import VPostDetailVue from "../pages/VPost/VPostDetail.vue";

const routes: any = [
  {
    path: "/",
    name: "home",
    meta: {
      label: "Home",
      isNav: true
    },
    component: VHomeVue
  },
  {
    path: "/about-us",
    name: "about-us",
    meta: {
      label: "About Us",
      isNav: true
    },
    component: () => import("../pages/VAboutUs.vue")
  },
  {
    path: "/post",
    name: "post",
    meta: {
      label: "Post",
      isNav: true
    },
    redirect: { name: "post-archive" },
    component: VPostVue,
    children: [
      {
        path: "",
        name: "post-archive",
        component: VPostArchiveVue
      },
      {
        path: ":id",
        name: "post-detail",
        component: VPostDetailVue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;