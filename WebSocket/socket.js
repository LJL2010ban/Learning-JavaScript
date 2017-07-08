/**
 * Created by as on 2017/6/11.
 */
/*
* WebSocket入门
*
* WebSocket协议定义了两种URL方案，WS和WSS分别代表客户端和服务端之间未加密和加密的通信。
* WS(WebSocket)类似于HttpURL，而WSS(WebSocket Security)URL表示链接是基于安全传输
* 层(TLS/SSL)和http的链接是同样的安全机制。
*
* WebSocket的构造函数需要一个URL参数和一个可选的协议参数(一个或者多个协议的名字)
*   协议参数如：XMPP(Extensible Messaging and Presence Protocol)
*             SOAP(Simple Object Access Protocol)或者自定义协议。
* URL参数需要以WS://或者WSS://开头
* */
// create new WebSocket connection
var ws = new WebSocket("ws://www.websocket.org")

// Connecting to the server with one protocol called myProtocol
var ws = new WebSocket("ws://echo.websocket.org", "myProtocol");
// myProtocol是假设的一个定义好的且符合标准的协议

// 传递一个协议的数组
var echoSocket = new WebSocket("ws://echo.websocket.org", ["com.kaazing.echo","example.imaginary.protocol"]);
// 服务端会选择其中一个使用
echoSocket.onopen = function (e) {
    // Check the protocol chosen by the server
    console.log(echoSocket.protocol);
};
