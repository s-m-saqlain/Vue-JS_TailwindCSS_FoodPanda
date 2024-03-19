import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../Pages/Home.vue'
import Login from '../Pages/Login.vue'
import Registeration from '../Pages/Registeration.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Login', component: Login },
  { path: '/Registeration', component: Registeration },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;