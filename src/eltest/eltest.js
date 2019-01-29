import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App'

import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.scss';

Vue.use(ElementUI);
var app = new Vue({
  el:'#app',
  data:{
    title:'eltest'
  },
  components:{ App }
});

