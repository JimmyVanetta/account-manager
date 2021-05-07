import CurrentAccounts from '../views/CurrentAccounts.vue'
import GetAccount from '../views/GetAccount.vue'
// import AddAccount from '../components/AddAccount.vue'
// import EditAccount from '../components/EditAccount.vue'
// import AddEmployee from '../components/AddEmployee.vue'
// import CurrentEmployees from '../components/CurrentEmployees.vue'
// import GetEmployee from '../components/GetEmployee.vue'
// import EditEmployee from '../components/EditEmployee.vue'

export const routes = [
    { 
        path: '/', 
        component: CurrentAccounts,
        name: 'CurrentAccounts' 
    },
    {
        path: '/account-detail',
        component: GetAccount,
        name: 'GetAccount',
        props: true
    },
    // { 
    //     path: '/accounts/add',  
    //     component: AddAccount,
    //     name: 'AddAccount' 
    // },
    // {
    //     path: '/accounts/:accountId/edit',
    //     component: EditAccount,
    //     name: 'EditAccount',
    //     props: true
    // },
    // {
    //     path: '/accounts/:accountId/employees',
    //     component: CurrentEmployees,
    //     name: 'CurrentEmployees',
    //     props: true
    // },
    // {
    //     path: '/accounts/:accountId/employees/add',
    //     component: AddEmployee,
    //     name: 'AddEmployee',
    //     props: true
    // },
    // {
    //     path: '/accounts/:accountId/employees/:employeeId/detail',
    //     component: GetEmployee,
    //     name: 'GetEmployee',
    //     props: true
    // },
    // {
    //     path: '/accounts/:accountId/employees/:employeeId/edit',
    //     component: EditEmployee,
    //     name: 'EditEmployee',
    //     props: true
    // }
]