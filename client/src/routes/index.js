import Start from '@/components/pages/StartPage'
import Tasks from '@/components/pages/TasksPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  }
]

export default routes
