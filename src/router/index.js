import { createWebHistory, createRouter, useRoute } from "vue-router";
import {Home, Page2, Page3, Page4 } from "@/components/pages";
import { useUserStore } from "@/stores/user";

const goHome = (to, from, next, user) => {
	if(from.name === "HOME") {
		user.currentPage = "HOME";
		user.isHideTab = false;
		next({name:"HOME"});
	} else {
		next();
	}
}

const routes = [
  {
    path: "/"
    , name: "HOME"
    , component: Home
    , meta: {
		isHideTab : false
	}
  }
  , {
    path: "/page2"
    , name: "page2"
    , component: Page2
    , meta: {
        isHideTab : true
    }
	, children: [
		{
			path: ':subPage'
			, name: "page2sub"
    		, component: Page2
			, meta: {
				isHideTab : true
			}
			,props: true
		}
	]

  }
  , {
    path: "/page3"
    , name: "page3"
    , component: Page3
	, meta: {
		isHideTab : true
	}
  }
  , {
    path: "/page4"
    , name: "page4"
    , component: Page4
	, meta: {
		isHideTab : true
	}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
	const user = useUserStore();
	user.currentPage = to.name;
	user.isHideTab = to.meta.isHideTab;
	console.log("fromName:",from.name, ", from.isHideTab:",from.meta.isHideTab);
	console.log("toName:",to.name, ", to.isHideTab:",to.meta.isHideTab);
	if(to.name=="page2") 
	{
		if(user.index == 1 || user.index == 2) 
		{
			next();
		}
		else 
		{
			goHome(to, from, next, user);
		}
	} 
	else if (to.name == "page3")
	{
		if(user.index == 3) 
		{
			next();
		}
		else 
		{
			goHome(to, from, next, user);
		}
	}
	else if (to.name == "page4")
	{
		if(user.index == 0) 
		{
			next();
		}
		else 
		{
			goHome(to, from, next, user);
		}
	} 
	else
	{
		next();
	}
	
	
})


export default router;