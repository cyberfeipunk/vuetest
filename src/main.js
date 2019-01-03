import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: App }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

new Vue({
    router
}).$mount('#app')


const app1nav = {
  template:`
  <div>
  <ul>
  <li><router-link to="/app1/c1/1">app-c1</router-link></li>
  <li><router-link to="/app1/c2">app-c2</router-link></li>
  </ul>
  <div>
  `
}
const app1_home = {
  template:`
    <div class="app1">
      <app1nav></app1nav>
      <router-view></router-view>
      <router-view name="c22" />
    </div>
  `,
  components:{ app1nav }
}
const c1 = {
  template:`
    <div>
      <h3>this is c1 this id is {{$route.params.id}}</h3>
    </div>
  `
}

const c2 = {
  template:`
    <div>
      <h3>this is c2</h3>
    </div>
  `
}

const c22 = {
  template:`
    <div>
      <h3>this is c22</h3>
    </div>
  `
}

const router1 = new VueRouter({
  mode: 'history',
  routes:[
    {
       path:'/app1',
       component:app1_home,
       children:[
         {
           path:'c1/:id',
           component:c1
         },{
           name:'c2',
           path:'c2',
           components:{
              default:c2,
              c22:c22
           }

         }
       ]
    }
  ]
});
const userid = 123
router1.push({path:`/app1/c1/${userid}`})
router1.push({name:`c2`})
new Vue({
  router:router1,
  el:'#app1'
});
