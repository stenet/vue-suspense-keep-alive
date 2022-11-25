import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './views/page1.vue'
import Page2 from './views/page2.vue'
import Page3 from './views/page3.vue'
import Page4 from './views/page4.vue'
import Page5 from './views/page5.vue'

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'page1',
        component: Page1,
      },
      {
        path: '/page2',
        name: 'page2',
        component: Page2,
      },
      {
        path: '/page3',
        name: 'page3',
        component: Page3,
      },
      {
        path: '/page4',
        name: 'page4',
        component: Page4,
      },
      {
        path: '/page5',
        name: 'page5',
        component: Page5,
      },
    ],
  })
