/**
 * Created by as on 2017/5/15.
 */
// test
var str = 'Here is a (short) piece of text.';
document.write(str + '<br/>' + escape(str));
/*
 * Here is a (short) piece of text.
 * Here%20is%20a%20%28short%29%20piece%20of%20text.
 * 可以看到空格被表示为%20， 左括号是%28，右括号是%29
 * 除*、@、-、_、+、.、/之外的特殊符号都会被编码
 *
 * Cookie组成
 * document.cookie里面的信息看上去就像由成对的名称和值组成的字符串，没对数据的形式是name=value;
 * cookieName and cookieValue 就是在cookie字符串里看到的name=value李的名称和值
 * domain属性像浏览器指明cookie属于哪个域。这个属性是可选的，在没有指定时，默认值是设置cookie的页面所在的域
 *       这个属性的作用在于控制子域对cookie操作
 * path - 指定可以使用的cookie目录。属性可选，常用的默认路径是/, 表示cookie可以在整个域里使用。
 * secure - 属性可选，几乎很少使用。
 * expires - 每个cookie都有个失效日期，过期就自动删除了。expires属性要以UTC时间表示。如果没有设置这个属性，
 *           cookie的声明期就和当前浏览器会话一样长，会在浏览器关闭时自动删除。
 *
 * */

function createCookie(name, value, days, path, domain, secure) {
    if (days){
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = date.toUTCString();
    }
    else var expires = "";
    cookieString = name + "=" + escape(value);
    if (expires) cookieString += "; expires=" + expires;
    if (path) cookieString += "; path=" + escape(path);
    if (domain) cookieString += "; domain=" + escape(domain);
    if (secure) cookieString += "; secure";
    document.cookie = cookieString;
}
/*
createCookie("username", "Sam Jones", 5);
createCookie("location", "USA", 5);
createCookie("status", "fullmember", 5);
*/
function getCookie(name) {
    var nameEquals = name + "=";
    var crumbs = document.cookie.split(';');
    for (var i = 0; i < crumbs.length; i++){
        var crumb = crumbs[i];
        if (crumb.indexOf(nameEquals) == 0){
            return unescape(crumb.substring(nameEquals.length, crumb.length));
        }
    }
    return null;
}

function deleteCookie(name) {
    createCookie(name, "", -1);
}
