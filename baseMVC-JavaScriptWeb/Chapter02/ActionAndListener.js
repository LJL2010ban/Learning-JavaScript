/**
 * Created by as on 2017/5/20.
 */
/*
* 事件和监听
*
* 监听事件
* - 绑定事件监听的函数叫addEventListener(),它有三个参数: type(比如click)、listener(比如callback)及useCapture。
*   使用前两个参数可以给一个DOM元素绑定一个函数，当特定的事件(比如单击)被触发时执行这个函数:
*     var button = document.getElementById("createButton");
*     button.addEventListener("click", function(){}, false);
*   可以使用removeEventListener()来移除事件监听，参数和传入addEventListener()的一样。
*   Note: 如果监听的是匿名函数，没有任何引用指向它，在不销毁这个元素的前提下，这个监听是无法被移除的:
*     var div = document.getElementById("div");
*     var listener = function(event){};
*     div.addEventListener("click", listener, false);
*     div.removeEventListener("click", listener, false);
*
* */