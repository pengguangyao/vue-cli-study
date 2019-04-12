

// const NotFound = () => import('@/components/NotFound')
// const LoadingComponent = () => import('@/components/LoadingComponent')
const User = () => import('@/components/User')
const Production = () => import('@/components/Production')
const Login = () => import('@/components/Login')
const App = () => import('@/App.vue')
const LoadingComponent = () => import('@/components/LoadingComponent')
const ErrorComponent = () => import('@/components/ErrorComponent')

export default {
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/base',
      component: App,
      children: [
        {
          path: '/control',
          component: User,
        },
        {
          path: '/success/production',
          component: Production,
        },
        {
          path: '/success/solution',
          component: LoadingComponent,
        },
        {
          path: '/success/news',
          component: ErrorComponent,
        },
      ]
    },
    {
      path: '*',
      redirect: '/login',
    }
  ]
}