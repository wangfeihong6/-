import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)
//路由信息数组
const routes = [
  {
    //登录页
    path:'/',
    meta:{title:'登录管理系统'},
    component:()=>import('../views/Login')
  },
  {
    path:'/layout',
    meta:{title:'主页'},
    component:()=>import('../views/layout'),
    //嵌套路由 
    children:[
      {
        path:'role',
        meta:{title:'role'},
        component:()=>import('../views/role/Role.vue'),
      },
      {
        path:'/',
        meta:{title:'个人中心'},
        component:()=>import('../views/user/Mine.vue'),
      },
      {
        path:'admin',
        meta:{title:'账号管理'},
        component:()=>import('../views/admin/admin.vue')
      },
      {
        path:"roomtype",
        meta:{title:'客房类型'},
        component:()=>import('../views/roomType/roomtype.vue')
      },
      {
        path:'home',
        meta:{title:'首页'},
        component:()=>import('../views/user/Home.vue')
      },
      {
        path:'email',
        meta:{title:'电子邮件'},
        component:()=>import('../views/user/Email.vue')
      },
      {
        path:'message',
        meta:{title:'系统信息'},
        component:()=>import('../views/user/Message.vue')
      },
      {
        path:'mine',
        meta:{title:'个人中心'},
        component:()=>import('../views/user/Mine.vue')
      },
      {
        path:'reserPwd',
        meta:{title:'修改密码'},
        component:()=>import('../views/user/ResetPwd.vue')
      },
      {
        path:'guest',
        meta:{title:'客户管理'},
        component:()=>import('../views/guest/guest.vue')
      }
    ]
  },
  {
    path:'*',
    component:()=>import('../views/Error404.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  // base:process.env.BASE_URL,
  routes,
})


router.beforeEach((to,from,next)=>{
  // console.log(to);

  if(to.meta && to.meta.title){
    document.title=to.meta.title
  }
  next()
})
export default router