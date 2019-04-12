import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store';
import routes from './router';

//使用插件
Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueRouter);

//创建路由和store
export const appStore = new Vuex.Store(store);
export const router = new VueRouter(routes);

//路由守卫
router.beforeEach((to, from, next) => {
  appStore.commit('global/changePath',{path: to.path});
  next();
})

new Vue({
  el: '#app',
  router,
  store: appStore,
  template: '<router-view></router-view>',
})
