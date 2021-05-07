import CurrentAccounts from '../views/CurrentAccounts.vue'
import Details from '../views/Details.vue'

export const routes = [
    { 
        path: '/', 
        component: CurrentAccounts,
        name: 'CurrentAccounts' 
    },
    {
        path: '/details',
        component: Details,
        name: 'Details',
    },
]