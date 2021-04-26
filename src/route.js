import Landing from './components/Landing.vue'
import AddAccount from './components/AddAccount.vue'
import CurrentAccounts from './components/CurrentAccounts.vue'
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
        path: '/accounts/edit/:accountId',
        component: EditAccount,
        name: 'EditAccounts',
        props: true,
    }
]