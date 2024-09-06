import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'root',
      path: '',
      component: () => import('@/app/layouts/SidebarLayout.vue'),
      children: [
        {
          name: 'my-warehouse',
          path: '',
          component: () => import('@/pages/HomeView.vue'),
          meta: { navbar: 'myTasks' },
        }
      ]
    }
  ]
})

export default router
