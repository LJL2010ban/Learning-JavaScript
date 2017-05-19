/**
 * Created by as on 2017/5/18.
 */
/*
* Ajax
*       ------------------------------
*       ---------- 服务器 -------------
*       ----*-*----*-*---*-*--*-*-----
*       ---*---*--*---*-*--*-*---*----
*       ---------- Ajax --------------
*       ------------------------------
*       ---------- 页面 ---------------
* Ajax 和 页面都位于浏览器层
* - Ajax在页面和服务器之间建立了一个额外的“处理层”。
*   这个处理层被称之为Ajax引擎活Ajax框架。它解释来自用户的请求，在后台以异步的方式“安静”地处理
*   服务器通信。这就意味着对于用户操作，服务器其你去与响应不再需要同步一致了，而只是在便于用户使用或
*   程序正确操作需要时才发生；浏览器不会停止响应来的等服务器完成对最后一个请求的处理，而是允许用户在
*   当前页面浏览、点击和输入数据。
*
* XMLHttpRequest 对象
*
* open() 方法
* 让XMLHttpRequest对象做好与服务器通信的准备，它至少需要两个参数：
* - 需要制定要使用的HTTP方法，通常是GET或POST
* - 请求的目标URL。如果是使用GET类型的请求，URL需要进行适当的编码，其中要包含全部的参数及其值。
* -- 出于安全考虑，XMLHttpRequest对象只允许与自己所在域的URL进行通信。如果尝试与远程域进行连接，
*    会得到“拒绝许可”的错误消息。
*
* send() 方法
* -- 在使用open方法准备好XMLHttpRequest对象之后，就可以利用send()方法发送请求了。它接收一个参数。
*    如果请求使用的是GET，那么请求的内容就必须编码到目标URL，然后调用send()方法时就可以使用参数null：
*    objectname.send(null);
*    如果发送POST请求，请求的内容(也需要适当编码)会以蚕食方式传递给send()方法:
*    objectname.setRequestHeader('Content-Type', 'application/x-www-form-urllencoded');
*
* Note: 当用户请求访问特定Web页面时，浏览器首先会尝试从缓存里加载页面，而不是立即提交新的HTTP请求。
*       然而Ajax请求是关于与服务器通信的，而不是从缓存里重新加载信息。当我们向服务器发出一个异步请求时，
*       要求每次都生成一个新的HTTP请求。
*       解决这个问题的技巧就是在请求数据里添加一个参数，给他赋予一个随机的无意义的值。在使用GET请求时，这就意味着
*       要在URL末尾添加新的“参数=值”对。
*       只要URL里的随机内容每次都是不一样的，就能让浏览器觉得这是一个发给新地址的请求，从而生成一个新的HTTP请求。
*
* 监视服务器状态
* - readyState属性
*   - 这个属性反映了从服务器返回的关于请求状态的信息。onreadystatechange属性会监视这个属性
*     后者的变化会导致前者的值变为true，从而导致执行指定的函数（范例里是responseAjax()）
*   - 属性值：
*     - 0=未初始化
*     - 1=正在加载
*     - 2=加载完成
*     - 3=交互
*     - 4=完成
*   - 当第一次提交请求时，readyState的值是0， 表示“未初始化”。
*   - 当服务器开始处理请求时，服务器把数据加载到XMLHttpRequest对象，readyState属性值相应地变成1，再变成2
*   - 当readyState的值变为3时，含义是“交互”，表示对象已经得到充分处理，可以与之进行一定的交互，但是并没有彻底处理完
*   - 当服务器请求彻底处理完成时，这个对象能够进行下一步处理了，readyState属性的值最终变成4.
*
* 回调函数
*
* responseText and responseXML属性
* - responseText 以文本形式表示从服务器返回的信息
* */

function callAjax() {
    // declare a variable to hold some information to pass to the server
    var lastname = 'Smith';
    // build the URL of the server script we wish to call
    var url = "myserverscript.php?surname=" + lastname;
    // ask our XMLHttpRequest object to open a server connection
    myRequest.open("GET", url, true);
    // prepare a function responseAjax() to run when the response has arrived
    myRequest.onreadystatechange = responseAjax;
    // and finally send the request.
    myRequest.send(null);
}

// 使用随机数解决缓存问题
function getXMLHttpRequest() {
    try {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e) {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    catch (e) {
        return new XMLHttpRequest();
    }
}

var myRequest = getXMLHttpRequest();

function callAjax2() {
    // declare a variable to hold some information to pass to the serve
    var lastname = 'Smith';
    // build the URL of the server script we wish to call
    var url = "myserverscript.php?surname=" + lastname;
    // generate a random number
    var myRandom = parseInt(Math.random() * 99999999);
    // ask our XMLHttpRequest object to open a server connection
    myRequest.open("GET", url + "&rand" + myRandom, true);
    // prepare a function responseAjax() to run when the response has arrived
    myRequest.onreadystatechange = responseAjax;
    // and finally send the request
    myRequest.send(null);
}

function responseAjax() {
    // we are only interested in readyState of 4, i.e. "loaded"
    if (myRequest.readyState == 4){
        // if server HTTP response is "OK"
        if (myRequest.status == 200){
            alert("The server said: " + myRequest.responseText);
        } else {
            // issue an error message for any other HTTP response
            alert("An error has occurred: " + myRequest.statusText);
        }
    }
}