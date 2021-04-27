import Landing from './components/Landing.vue'
import AddAccount from './components/AddAccount.vue'
import CurrentAccounts from './components/CurrentAccounts.vue'
import GetAccount from './components/GetAccount.vue'
import EditAccount from './components/EditAccount.vue'

export const routes = [
    { 
        path: '/', 
        component: Landing,
        name: 'Landing' 
    },
    { 
        path: '/accounts', 
        component: CurrentAccounts,
        name: 'CurrentAccounts' 
    },
    { 
        path: '/accounts/add',  
        component: AddAccount,
        name: 'AddAccount' 
    },
    {
        path: '/accounts/:accountId',
        component: GetAccount,
        name: 'GetAccount',
        props: true
    },
    {
        path: '/accounts/:accountId/edit',
        component: EditAccount,
        name: 'EditAccount',
        props: true
    }
]