import {createRouter, createWebHistory} from "vue-router";
import SetupRouterGuard from "./routerGuard";
import PageRoutes from "./routes";


const ViewRouter = createRouter({
    history: createWebHistory(),
    routes:[
      {
        path:'/',
        
        component:()=>import('@/pages/Layout.vue'),
        children:[
           ...PageRoutes
        ]
      },
      {
        path:'/login',
        component:()=>import('@/pages/Login.vue'),
      },
      {
        path:'/:pathMatch(.*)*',
        component:()=>import('@/pages/NotFound.vue'),
      },
    ]
})

SetupRouterGuard(ViewRouter)

export default ViewRouter