import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'
import './utils/mock'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import i18n from './utils/i18n'
import components from '@/components'

// 移动调试
import VConsole from 'vconsole'
Vue.use(new VConsole());

console.log('env配置: ', process.env);
components.forEach(comp => {
  Vue.use(comp)
});

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$http = axios;

Vue.config.productionTip = false

// (function(w) {
//   var _doc = w.document;
//   var _docEle = _doc.documentElement;
//   var _docWidth = _docEle.getBoundingClientRect().width;
//   var _scale = _docWidth / 750;
//   _docEle.style.fontSize = (_scale * 100) + 'px';
//   Vue.prototype.relativeRate = _scale;
//   w.onload = function() {
//       var nWidth;
//       if (_docWidth !== (nWidth = document.documentElement.getBoundingClientRect().width)) {
//           document.documentElement.style.fontSize = (nWidth / 750 * 100) + 'px';
//       };
//   }
// })(window);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
