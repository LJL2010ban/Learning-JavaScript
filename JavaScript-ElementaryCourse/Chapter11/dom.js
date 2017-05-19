/**
 * Created by as on 2017/5/16.
 */
/*
* DOM节点类型
* - 每种节点类型都有一个关联的数值，保存在属性nodeType里。
* *** noteType *** *** 节点类型 ***
* *** 1        *** *** 元素    ***
* *** 2        *** *** 属性    ***
* *** 3        *** *** 文本(包含空白) ***
* *** 4        *** *** CDATA区域 ***
* *** 5        *** *** 实体引用 ***
* *** 6        *** *** 实体    ***
* *** 7        *** *** 执行指令 ***
* *** 8        *** *** HTML注释 ***
* *** 9        *** *** 文档    ***
* *** 10       *** *** 文档类型(DTD) ***
* *** 11       *** *** 文档个片段 ***
* *** 12       *** *** 标签    ***
* */

/*
* childNodes属性
* - 每个节点都有一个childNodes属性。这个类似数组的属性包含了当前节点全部直接子节点的集合，让我们可以访问这些子节点的信息
* - firstChild and lastChild
*
* parentNode属性
* - 保存节点的父节点
*
* nextSibling and previousSibling
* - 分别返回节点的前一个和后一个兄弟节点， 如果不存在相应的节点，则返回null
*
* 节点值
* - DOM节点的nodeValue属性返回保存在节点里的值，我们一般用它返回文本节点里的内容
*
* getElementsByTagName()选择元素
* - 可以获取特定的全部标签，保存在一个数组里
* */
var plElement = document.getElementById("toDoNotes");
// 这样使用一直报错
//alert(plElement.nodeType);
var text = '';
/*for (var i = 0; i < plElement.childNodes.length; i++){
    if (plElement.childNodes[i].nodeType == 3){
        text += plElement.childNodes[i].nodeValue;
    }
}
alert(text);*/
function nodeValue() {
    var pElement = document.getElementById("toDoNotes");
    for (var i = 0; i < pElement.childNodes.length; i++){
        if (pElement.childNodes[i].nodeType == 3){
            text += pElement.childNodes[i].nodeValue;
        }
    }
    alert(pElement.nodeName+pElement.nodeType+ text);
}

// olElement.childNodes 包含了<ol>元素的子节点
function countListItems() {
    var olElement = document.getElementById("toDoList");
    var count = 0;
    for (var i = 0; i < olElement.childNodes.length; i++){
        if (olElement.childNodes[i].nodeType == 1){
            count++;
        }
    }
    alert("The ordered list contains " + count + " items");
}

/*
* 为什么在函数里面是行得通的，但是在函数外面确是不可以的呢？
*
* 因为函数是通过window.onload进行事件驱动的，onload函数是在整个页面加载完成之后才开始执行，
* 而函数外面的则不是，所以会报错，找不到对应的方法等。。。。
* */

/*
var plElement = document.getElementById("toDoList");
var listN = plElement.getElementsByTagName("li");
alert(listN.length);
*/

function countListItemsByTagName() {
    var olElement = document.getElementById("toDoList");
    var list1 = olElement.getElementsByTagName("li");
    /*var count = 0;
    for (var i = 0; i < olElement.childNodes.length; i++){
        if (olElement.childNodes[i].nodeType == 1){
            count++;
        }
    }*/
    alert("The ordered list contains " + list1.length + " items");
}
window.onload = nodeValue;