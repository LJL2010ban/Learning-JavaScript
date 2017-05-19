/**
 * Created by as on 2017/5/15.
 */
function addEventHandler(element, eventType, handlerFunction) {
    if (element.addEventListener){
        element.addEventListener(eventType, handlerFunction, false);
    }else if (element.attachEvent){
        element.attachEvent('on' + eventType, handlerFunction);
    }
};

function removeEventHandler(element, eventType, handlerFunction) {
    if (element.removeEventListener){
        element.removeEventListener(eventType, handlerFunction, false);
    }else if (element.detachEvent){
        element.detachEvent('on' + eventType, handlerFunction);
    }
};
/*
*
* */
function appendText(e) {
    if (!e){
        var e = window.event;
    }
    var element = (e.target) ? e.target : e.srcElement;
    document.getElementById('div1').innerHTML += element.id + "<br/>";
};

/*
* removeOnClickA and removeOnClickB 分别删除ButtonA和ButtonB的appendText函数
* */
function removeOnClickA() {
    removeEventHandler(document.getElementById('buttonA'), 'click', appendText);
};

function removeOnClickB() {
    removeEventHandler(document.getElementById('buttonB'), 'click', appendText);
};

/*
* reset按钮会执行reset(), 而reset函数两次调用addEventHandler，把appendText函数添加到ButtonA and ButtonB的
* onClick事件处理器
* */
function reset() {
    addEventHandler(document.getElementById('buttonB'), 'click', removeOnClickA);
    addEventHandler(document.getElementById('buttonA'), 'click', removeOnClickB);
};

/*
* window.onload事件在HTML页面加载完成时设置脚本的初始状态
* */
window.onload = function () {
    addEventHandler(document.getElementById('button-a'), 'click', removeOnClickA);
    addEventHandler(document.getElementById('button-b'), 'click', removeOnClickB);
    addEventHandler(document.getElementById('reset'), 'click', reset);
    reset();
}



