import Accounts from '../views/Accounts.vue'
import Details from '../views/Details.vue'

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
]