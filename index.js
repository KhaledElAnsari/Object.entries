Object.entries = Object.entries ? Object.entries : function(obj) {
    var objType = Object.prototype.toString.call(obj);
    if(objType === "[object Array]" || objType === "[object Object]") {
        var entriesArray = [];
        for(var key in obj) {
            entriesArray.push([key, obj[key]]);
        }
        
        return objType === "[object Array]" ? entriesArray : entriesArray.sort(function(a, b) {return a[1]-b[1];});
    }
    else {
        if(obj === null || typeof obj === "undefined") {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        else {
            return [];
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Object.entries;
}