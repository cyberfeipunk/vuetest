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
