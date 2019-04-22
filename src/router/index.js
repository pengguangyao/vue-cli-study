

// const NotFound = () => import('@/components/NotFound')
// const LoadingComponent = () => import('@/components/LoadingComponent')
const User = () => import('@/components/User')
const Production = () => import('@/components/Production')
const Login = () => import('@/components/Login')
const App = () => import('@/App.vue')
const LoadingComponent = () => import('@/components/LoadingComponent')
const ErrorComponent = () => import('@/components/ErrorComponent')
const Main = () => import('@/components/main')
export default [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Main,
    redirect: '/control',
    children: [
      {
        path: '/control',
        name: 'control',
        component: User,
      }
    ]
  },
  {
    path: '/success',
    name: 'success',
    component: Main,
    children: [
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
      {
        path: '/exception/404',
        component: LoadingComponent,
      },
    ]
  },
  {
    path: '*',
    redirect: '/login',
  }
]