import { createRouter, createWebHistory } from 'vue-router'

import errorScreen from '../views/error.vue'
import mainScreen from '../views/main-screen.vue'

const routes = [
	{
		path: '/:pathMatch(.*)*',
		name: '404', 
		component: errorScreen
	},{
		name: 'home',
		path: '/',
		component: mainScreen
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
})

export default router
