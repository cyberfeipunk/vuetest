import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';


import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.scss';

import store from './store/index.js'

import App from './App'

import store1 from './store1'


Vue.use(ElementUI);
Vue.use(Vuex);


var app = new Vue({
  el:'#app',
  data:{
    title:'eltest'
  },
  store,
  components:{ App,store1 },

});

