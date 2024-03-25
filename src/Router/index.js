import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../Pages/Home.vue'
import Login from '../Pages/Login.vue'
import Registeration from '../Pages/Registeration.vue'
import Profile from '../Pages/Profile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Login', component: Login },
  { path: '/Registeration', component: Registeration },
  { path: '/Profile', component: Profile},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;