/**
 * Created by as on 2017/5/18.
 */
/*
* 创建简单的Ajax库
* */

// 库的实现
function getXMLHttpRequest() {
    try {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e){
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    catch (e){
        return new XMLHttpRequest();
    }
}

var req = getXMLHttpRequest();

// GET 和 POST 请求
function requestGET(url, query, req) {
    var myRandom = parseInt(Math.random() * 99999999);
    if (query == ''){
        var callUrl = url + '?rand=' + myRandom;
    } else {
        var callUrl = url + '?' + query + '&rand=' +myRandom;
    }
    req.open("GET", callUrl, true);
    req.send(null);
}

// POST
function requestPOST(url, query, req) {
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(query);
}

/*
* url: 目标URL
* query: 经过编码的查询字符串
* callback: 回调函数名称
* reqtype: POST或GET
* getxml: 1表示获取XML数据，0表示文本数据
* */
function doAjax(url, query, callback, reqtype, getxml) {
    var myreq = getXMLHttpRequest();
    myreq.onreadystatechange = function () {
        if (myreq.readyState == 4){
            if (myreq.status == 200){
                var item = myreq.responseText;
                if (getxml == 1){
                    item = myreq.responseXML
                }
                eval(callback + '(item)');// 回调函数
            }
        }
    }
    if (reqtype.toUpperCase() == "POST"){
        requestPOST(url, query, myreq);
    }else {
        requestGET(url, query, myreq);
    }
}