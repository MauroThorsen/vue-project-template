import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    meta: {
      hidden: true,
      role: ['customer', 'root']
    }
  }
]
const routerList = [...staticRouter]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routerList
})
export { routerList }
export default router
