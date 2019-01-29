import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  data:{
    name:'vuetest'
  }
})

var data1 = [
  {name:'t1',description:"todos of 1"},
  {name:'t2',description:"todos of 2"},
];



var app1 = new Vue({
  el:"#app1",
  data:{
    title:"这是测试",
    todos:data1,
  },
  methods:{
    f1:function(){
      this.todos[0].name="0k";
    }
  }
});

Vue.component("todo-item",{
  props:['todo'],
  template:"<li>这是{{name}}</li>",
});
import ComponentB from "./components/ComponentB";
var app3 = new Vue({
  el: "#app3",
  components:{'cb':ComponentB},
  data:{
    title:"这是一个测试",
    todos:data1
  }
});

var sourceOfTruth ={source1:5};
var app4 = new Vue({
  el:'#app4',
  data:sourceOfTruth
});

var app5 = new Vue({
  el:'#app5',
  data:sourceOfTruth
});

sourceOfTruth.source1 = 7;

app5.source1 = 8;

const NotFound = {template:'<p>page not found</p>'};
const Home = {template:'<p>Home Page</p>'};
const About = {template:'<p>About Page</p>'};
const Test = {template:'<p>Test Page<slot></slot></p>'};
const Test1 = {"div":{}};

const routes = {"/":Home,"/about":About,"/test.html":Test};
var app6 = new Vue({
  el:"#app6",
  data:{
    currentRoute:window.location.pathname
  },
  computed:{
    ViewComponent(){
      return routes[this.currentRoute] || NotFound;
    }
  },
  render: function(h) { return h(this.ViewComponent,'aaaaaaaa')}
});

import hvue from "./components/hvue";
var app7 = new Vue({
  el:"#app7",
  components:{'hvue':hvue}
});
