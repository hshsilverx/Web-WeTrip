import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import backIndex from '@/components/backIndex'
import banner from '@/components/banner'
import indexContent from '@/components/indexContent'
import adminList from '@/components/adminList'
import orderList from '@/components/orderList'
import routeList from '@/components/routeList'
import searchList from '@/components/searchList'
import route from '@/components/route'
import region from '@/components/region'
import personalInfo from'@/components/personalInfo'
import countdown from '@/components/countdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      path: '/',
      name: 'Login',
      component: Login
    },{
      path:'/backIndex',
      name:'backIndex',
      component: backIndex,
      children:[
        {
          path: 'banner', //条幅
          component: banner
        },{
          path: 'indexContent', //首页统计
          component: indexContent
        },{
          path: 'adminList', //后台用户
          component: adminList
        },{
          path:'orderList',//new订单管理
          component: orderList
        },{
          path:'routeList',
          component: routeList
        },{
          path:'searchList',
          component:searchList
        },{
          path:'route',
          component:route
        },{
          path:'region',
          component:region
        },{
          path:'personalInfo',
          component:personalInfo
        },{
          path:'countdown',
          component:countdown
        },
        {
          path: '*',           //其他路径都跳转到首页
          redirect: 'indexContent'
        }
      ]
    }
  ]
})
