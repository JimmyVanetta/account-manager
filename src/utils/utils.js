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
    var yyyy = dateIn.getFullYear();
    var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
    var dd = dateIn.getDate();
    return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
}