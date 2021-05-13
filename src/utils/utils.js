// unique id for account
export const guid = function () {
    function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    }
    return s4() + s4()
}
// unique id for employee
export const eGuid = function () {
    function s4 () {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
        }
    return s4()
}
// format stored date to mm/dd/yyyy
export const formatDate = function (dateIn) {
    var dat = new Date(dateIn)
    
    var mm = dat.getMonth() + 1; // getMonth() is zero-based
    mm = '0' + mm.toString()
    var dd = dat.getDate();
    var yyyy = dat.getFullYear();

    return mm + '/' + dd + '/' + yyyy
}