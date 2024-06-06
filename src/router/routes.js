import Index from '@/views/pages/Index.vue'
import Templates from '@/views/templates/templates.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Templates,
    children: [
      {
        path: '/',
        name: 'home-page',
        component: Index,
        meta: [
          {title: 'Refill.Universe'}
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
