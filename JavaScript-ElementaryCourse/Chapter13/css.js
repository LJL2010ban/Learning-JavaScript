/**
 * Created by as on 2017/5/16.
 */
/*
* CSS
* - CSS致力于把HTML的样式与其标签功能分离
* <p id="para1">Here is some text.</p>
* #para1{
*     font-weight: bold;
*     font-size: 12pt;
*     color: black;
* }
* 多个页面元素共享样式声明
* div, #para1{
*     ...
* }
*
* className
*
* */

function toggle() {
    var myElement = document.getElementById("id1");
    if (myElement.style.backgroundColor == 'red'){
        myElement.style.backgroundColor = 'yellow';
        myElement.style.color = 'black';
    } else {
        myElement.style.backgroundColor = 'red';
        myElement.style.color = 'white';
    }
}

function toggleClass() {
    var myElement = document.getElementById("id1");
    if (myElement.className == "classA"){
        myElement.className = "classB";
    } else {
        myElement.className = "classA";
    }

}
window.onload = function () {
    document.getElementById("btn1").onclick = toggleClass;
    //document.getElementById("btn1").onclick = toggle;
}


