import { guid } from '../utils/utils'
import { eGuid } from '../utils/utils'

let jtId = guid()
let htId = guid()
let ctId = guid()

const mockAccounts = [
    {
        
        "id" : jtId,
       "name": "Jimmy's Towing",
        "contact": "Jimmy",
        "phone": "419-685-7591",
        "address": "3698 E Normandy Park Dr",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "isObsolete": false,
        "verified": false,
        "created": new Date()
    },
    {
        "id" : htId,
        "name": "Heidi's Towing",
        "contact": "Heidi",
        "phone": "419-685-7591",
        "address": "3698 E Normandy Park Dr",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "isObsolete": false,
        "verified": false,
        "created": new Date()
    },
    {
        "id" : ctId,
        "name": "Carry's Towing",
        "contact": "Carry",
        "phone": "419-555-0123",
        "address": "3698 E Normandy Park Dr",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "isObsolete": false,
        "verified": false,
        "created": new Date()
    }
]
const mockEmployees = [
    {
        "id": eGuid(),
        "accountId": jtId,
        "name": "Jimmy",
        "age": "32",
        "phone": "419-685-7591",
        "address": "3698 E Normandy Park Dr V3",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "hired": new Date()
    },
    {
        "id": eGuid(),
        "accountId": htId,
        "name": "Heidi",
        "age": "31",
        "phone": "419-685-7591",
        "address": "3698 E Normandy Park Dr V2",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "hired": new Date()
    },
    {
        "id": eGuid(),
        "accountId": ctId,
        "name": "Carrie",
        "age": "32",
        "phone": "419-555-0123",
        "address": "3698 E Normandy Park Dr v1",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "hired": new Date()
    }
]
export default {
    getAllAccounts (cb) {
        setTimeout(() => cb(mockAccounts), 100)
    },
    getAllEmployees (cb) {
        setTimeout(() => cb(mockEmployees), 100)
    }
}