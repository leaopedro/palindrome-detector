/**
 * Created by Peter on 15/09/2016.
 */
module.exports ={
    replaceAll: function(str, find, replace) {
        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        }
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    },
    removeSymbols: function (str) {
        return str.replace(/[ `~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    },
    reverse: function(s) {
        return s.split('').reverse().join('');
    }
};