import { createWebHistory, createRouter, useRoute } from "vue-router";
import {Home, Page2, Page3, Page4 } from "@/components/pages";
// import Home from "@/components/pages/Home.vue";
// import Page2 from "@/components/pages/page2.vue";

const routes = [
  {
    path: "/"
    , name: "HOME"
    , component: Home
    , props: true
  }
  , {
    path: "/page2/:index/:page"
    , name: "page2"
    , component: Page2
    , beforeEnter: function (to, from, next) {
        const idx = to.params.index;
        const pg = to.params.page;
        console.log("index:",idx);
        console.log("page:",pg);
        if(idx == 1 || idx == 2) next();
    }
    , props: true
  }
  , {
    path: "/page2/:index/:page/:subPage"
    , name: "page2sub"
    , component: Page2
    , beforeEnter: function (to, from, next) {
        const idx = to.params.index;
        const pg = to.params.page;
        const subPg = to.params.subPage;
        // console.log("index:",idx);
        // console.log("page:",pg);
        // console.log("sub:", subPg);
        next();
        // if(idx == 1 || idx == 2) next({name:'page2sub',params:to.params});
    }
    , props: true
  }
  , {
    path: "/page3/:index/:page/:currentTab"
    , name: "page3"
    , component: Page3
    , beforeEnter: function (to, from, next) {
      const idx = to.params.index;
      const pg = to.params.page;
      console.log("index:",idx);
      console.log("page:",pg);
      if(idx == 3) next();
    }
    , props: true
  }
  , {
    path: "/page4/:index/:page"
    , name: "page4"
    , component: Page4
    , beforeEnter: function (to, from, next) {
      const idx = to.params.index;
      const pg = to.params.page;
      console.log("index:",idx);
      console.log("page:",pg);
      if(idx == 0) next();
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;