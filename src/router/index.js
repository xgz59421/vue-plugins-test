import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = []
const files = require.context('./modules', true, /\.js$/)

files.keys().forEach(key => {
  if (key != './element.js') routes = routes.concat(files(key).default)
});

routes.sort((a, b) => {
  return a.index - b.index
})

const router = new VueRouter({
  routes
})

export default router