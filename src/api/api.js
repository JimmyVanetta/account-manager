import utils from '../utils/utils.js'

const preAccounts = [
    {
        "id" : utils.guid,
       "name": "Jimmy's Towing",
        "contact": "Jimmy",
        "phone": "419-685-7591",
        "address": "3698 ",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256"
    }
    // {
    //     // account object
    // },
    // {
    //     // account object
    // }
]
export default {
    prePopulate () {
        return preAccounts
    }
}
