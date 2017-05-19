/**
 * Created by as on 2017/5/19.
 */
/*
* 库
* 功能
* - 封装DOM方法。
* - 动画
* - 拖放
* - AJax
*
* 常见库介绍
* - Prototype 框架
*   -- 优势 扩展DOM和Ajax处理，在JSON支持与创建和继承类方面也做的不错。
* - Dojo
*   -- 能够简化创建程序和用户界面的工作，功能包括扩展的字符串和数学函数，还有动画和Ajax。
* - Yahoo！ UI
*   -- 功能包括动画，DOM，事件管理及一些方便的用户界面元素，比如日历和滑块。
* - MooTools
*   -- 提供易于理解的、文档清晰的API，能够帮助 我们创建功能强大的、灵活的夸浏览器程序
* - jQuery
*   -- 简化了多种开发工作，比如HTML文档转换、事件处理、动画和Ajax调用，适合快速开发交互站点。
* */

/*
* prototype.js 介绍
* <script src="prototype.js"></script>
*
* $()函数
* - $()基本就是getElementById()方法的快捷方式。通常情况下，为了返回特定元素的值，需要使用类似下面的表达式：
*   var mydata = document.getElementById('someElementId');
*   $()函数以元素ID作为参数，把上述表达式简化为：
*   var mydata = $('someElementId');
*   更进一步，$()可以接受多个元素ID作为参数，返回相应元素值组成的数组：
*   mydataArray= $('id1','id2','id3');
*
* $F()函数
* - 以表单的输入元素或它的ID作为参数，返回它包含的值。比如下面的HTML脚本：
*   <input type="text" id="input1" name="input1" />
*   <select id="input2" name="input2">
*       <option value="0">Option A</option>
*       <option value="1">Option B</option>
*       <option value="2">Option C</option>
*   </select>
*
*   $F('input1')就可以返回文本框的值，使用$F('input2')就可以返回选择框里当前选中值。
*
* Form对象
* - 包含的一些方法能够简化HTML表单操作
*   调用getElements()方法可以返回一个数组，其中包含表单的输入字段：
*    inputs = Form.getElements('thisform');
*   serialize()方法可以把输入名称和值转换为URL兼容的序列：
*    inputlist = Form.serialize('thisform');
*
*  Try.these()函数
*  - 提供了一种简洁的方式封装（try...catch）了这些方法，实现跨浏览器的解决方案：
*    return Try.these(function1(), function2(), function3(), ...);
*    其中的函数会依次执行，当错误发生时，程序会跳转到下一个函数。如果全部函数都正确执行，操作就会停止，返回值是true。
*    用这种方式创建XMLHttpRequest实例：
*    return Try.these(
*      function() {return new ActiveXObject('Msxml2.XMLHTTP')},
*      function() {return new ActiveXObject('Microsoft.XMLHTTP')},
*      function() {return new XMLHttpRequeset()}
*    )
*
* Ajax对象包装XMLHttpRequest
*  prototype定义了一个Ajax对象，用于简化Ajax程序时的代码。它的一些类封装的代码可以发送服务器请求、监视请求的过程、处理返回数据
*  Ajax.Request
*  var myAjax = new Ajax.Request(url, {method:'post', parameters:mydata, onComplete: responseFunction});
*  - url 表示服务器资源的地址
*  - method 可以是post或get
*  - mydata 是包含请求参数的序列化字符串
*  - responseFunction 是处理服务器响应的回调函数的名称
*  onComplete参数对应于XMLHttpRequest的readyState属性的若干值之一。它相当于readyState=4，也就是完成状态。
*  onLoading - 加载中
*  onLoaded - 已经加载
*  onInteractive - 交互
*
*  Ajax.Updater 指定要更新的元素
*  var myAjax = new Ajax.Updater(elementID, url, options);
*
* */
