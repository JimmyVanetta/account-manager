import Accounts from '../views/Accounts.vue'
import Details from '../views/Details.vue'
import EmployeeDetail from '../components/forms/EmployeeDetail.vue'
import NotFound from '../views/NotFound.vue'

export const routes = [
    { 
        path: '/', 
        component: Accounts,
        name: 'Accounts' 
    },
    {
        path: '/details',
        component: Details,
        name: 'Details',
        props: true
    },
    {
        path: '/details/employee',
        component: EmployeeDetail,
        name: 'EmployeeDetail',
        props: true
    },
    {
        path: '*',
        name: 'Not Found',
        component: NotFound
      }
]