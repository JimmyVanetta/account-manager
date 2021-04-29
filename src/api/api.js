import { guid } from '../utils/utils.js'

const mockData = [
    {
        "id" : guid(),
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
        "id" : guid(),
        "name": "Heidi's Towing",
        "contact": "Heidi",
        "phone": "419-908-1060",
        "address": "3698 E Normandy Park Dr",
        "city": "Medina",
        "state": "Ohio",
        "zip": "44256",
        "isObsolete": false,
        "verified": false,
        "created": new Date()
    },
    {
        "id" : guid(),
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
export default {
    getAllAccounts (cb) {
        setTimeout(() => cb(mockData), 100)
    }
}
