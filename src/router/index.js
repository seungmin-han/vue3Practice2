import { createWebHistory, createRouter, useRoute } from "vue-router";
import { Home, Page2, Page3, Page4 } from "@/components/pages";
import { useUserStore } from "@/stores/user";

const routes = [
    {
        path: "/",
        name: "HOME",
        component: Home,
        meta: {
            headerType: "A",
            headerClass: "red",
            isHideTab: false,
            auth: [0, 1, 2, 3],
        },
        beforeEnter(to) {
            const user = useUserStore();
            const userAuth = user.index;
            if (userAuth === 0) {
                to.meta.headerType = "A";
                to.meta.headerClass = "red";
            } else {
                to.meta.headerType = "C";
                to.meta.headerClass = "green";
            }
        },
    },
    {
        path: "/page2",
        name: "page2",
        component: Page2,
        meta: {
            headerType: "B",
            headerClass: "blue",
            isHideTab: true,
            auth: [1, 2],
        },
        children: [
            //얘는 메타가 상속됨
            {
                path: ":subPage",
                name: "page2sub",
                component: Page2,
                props: true,
            },
        ],
    },
    {
        path: "/page3",
        name: "page3",
        component: Page3,
        meta: {
            headerType: "B",
            headerClass: "blue",
            isHideTab: true,
            auth: [3],
        },
    },
    {
        path: "/page4",
        name: "page4",
        component: Page4,
        meta: {
            headerType: "B",
            headerClass: "blue",
            isHideTab: true,
            auth: [0],
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const user = useUserStore();
    const isAuth = to.meta.auth.includes(user.index);
    if (isAuth) {
        next();
    } else {
        next({ name: "HOME" });
    }
});

export default router;
