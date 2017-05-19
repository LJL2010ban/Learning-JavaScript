/**
 * Created by as on 2017/5/19.
 */
/*
* jQuery
*
* $(document).ready处理器相当于window.onload处理器
* $(document).ready(function(){
*   // jquery代码
* });
* - 与window.onload一样，完成两件事：
*   -- 确保在DOM可用之后，也就是确保代码中可能访问的元素都已经存在了，在执行代码，从而避免产生错误
*   -- 把语义层(HTML)和表现层(CSS)分离开，让代码更加清晰
*
* 选择页面元素
* - 在jQuery里，利用操作符$("")就可以选择HML元素。
*   $("span"); // 全部span元素
*   $("#elem"); // id为"elem"的HTML元素
*   $(".classname"); // 类为"classname"的HTML元素
*   $("div#elem"); // id为"elem"的<div>元素
*   $("ul li a.menu"); // 类为"menu"且嵌套在列表项里的锚点
*   $("p > span"); // p的直接子元素span
*   $("input[type=password]"); // 具有指定类型的输入元素
*   $("p:first"); // 页面上第一个段落
*   $("p:even"); // 页面上全部偶数段落
* - jQuery还有一些自己定制的选择符
*   $(":header"); // 标题元素（h1到h6）
*   $(":button"); // 全部按钮元素（输入框和按钮）
*   $(":radio"); // 单选框
*   $(":checkbox"); // 选择框
*   $(":checked"); // 选中状态的选择框或单选框
*
* 操作HTML内容
* - html()
*   这个方法能够获取元素或一组元素的HTML内容，类似于JavaScript的innerHTML：
*     var htmlConten = $("#elem").html();
*     // variable htmlContent now contains all HTML (including text) inside page element with id "elem"
*     $("#elem").html("<p>Here is some new content.</p>")
*     // 这样就会修改id为“elem”的页面元素的HTML内容
* - text()
*   如果只是想获得一个元素或一组元素的文本内容，除了使用html()外，还可以使用text()
*    var textContent = $("#elem").text();
*
* - attr()
*   当应用于一个元素时，这个方法返回特定属性的值。
*     var title = $("#elem").attr("title");
*   如果应用于一组元素，它只返回第一个元素的值.
*   利用这个方法还可以设置属性的值：
*     $("#elem").attr("title", "This is the new title");
*
* 显示和隐藏元素
* - 对于传统的JavaScript来说，显示和隐藏页面元素通常是利用元素style对象的display或visibility属性来实现的。
*   这种方法没有什么问题，但通常会导致比较长的代码:
*     document.getElementById("elem").style.visibility = 'visible';
*   利用jQuery的show()和hide()方法就可以只用较短的代码实现相同的功能，而且还具有额外一些功能。
*
*   -- show()
*      可以让单个元素或一组元素显示在页面上:
*        $("div").show(); // 显示全部<div>元素
*      另外，还可以添加一个参数来调整显示的过程。
*        $("#elem").show("fast", function(){
*          // 在元素显示之后进行某些操作
*        });
*        第一个参数“fast”决定了显示元素的速度。这个参数除了设置为slow或fast外，还可以用数字表示特定时间（单位毫秒）。
*        如果这个参数不设置，元素就会立即显示，没有任何动画。
*   -- hide()
*      用来隐藏页面元素。和show一样可选参数。
*   -- toggle()
*      这个方法会改变一个元素或一组元素的当前显示状态，也就是把处于显示状态的元素隐藏起来，把隐藏状态的元素显示出来。
*      $("#elem").toggle(1000, function(
*        // 在元素显示或隐藏之后进行某些操作
*      ));
*
* 元素动画
*
* - 淡入淡出
*   -- 淡出操作
*      $("#elem").fadeOut("slow", function(){ // 在淡出之后进行一些操作 });
*   -- 淡入操作
*      $("#elem").fadeTo(500, function(){ // 在淡入之后进行一些操作 });
*   -- 还可以让元素只进行部分淡入或淡出：
*      $("#elem").fadeTo(3000, 5, function(){ // 在淡入或淡出之后进行一些操作 });
*
* 滑动
* - jQuery实现元素滑动的方法与实现淡入淡出的方法如出一辙，他们的参数具有同样的规则，可以实现单个或一组元素的向上或向下滑动
*   $("#elem").slideDown(150, function(){ // 向下滑动之后进行一些操作 });
*   $("#elem").slideUp("slow", function(){ // 向上滑动之后进行一些操作 });
* - 为了实现根据元素目前位置自动决定是向上滑动还是向下滑动，jQuery还提供了slideToggle()方法。
*   $("#elem").slideToggle(1000, function(){ // 向上或向下滑动之后进行一些操作 });
*
* 动画
* - 实现动画的方法很简单，利用jQuery指定元素要使用CSS样式表，jQuery就以渐变方式应用CSS样式，而不是像普通的CSS或
*   JavaScript那样直接应用，从而实现动画的效果。
*   animate()方法 - 可以应用于很多CSS属性
*   $("#elem").animate({
*     width : "400px",
*     height : "500px",}, 1500, function(){
*       $(this).fadeOut("slow");
*     });
*
* 命令链
* - jQuery大多数方法都返回一个jQuery对象，可以用于再掉用其他方法，这是jQuery的另一个方便之处。如:
*     $("#elem")..fadeOut().fadeIn();
*     // 上面这行代码会先淡出指定的元素，然后淡入显示他们。
*   命令链的长度没有什么限制，从而可以对同一组元素连续进行很多操作
*     $("#elem").text("Hello from jQuery").fadeOut().fadeIn();
*
* 处理事件
* - 在jQuery里可以用多种方式给单个元素或一组元素添加事件处理器。首先，最直接的方法时这样的:
*     $("a").click(function(){ // 当锚点元素被点击时要执行的代码 });
*   或者像下面这样使用命名的函数:
*     function hello(){ alert("Hello from jQuery"); };
*     $("a").click(hello);
*
* - jQuery以跨浏览器的方式包装了attachEvent和addEvnetListener方法，从而便于添加多个事件处理器:
*     $("a").on('click', hello);
*
* 使用jQuery实现Ajax
* - 由于不同浏览器以不同方式实现XMLHttpRequest对象，Ajax编程显得有些复杂。
* - load()
*   -- 如果只是需要从服务器获取一个文档在页面元素里显示它，那么只需要使用load()方法就可以了。
*      比如下面的代码片段会获取newContent.html，并且把它的内容添加到id为"elem"的元素:
*        $(function(){
*          $("#elem").load("newContent.html");
*        });
*      在使用load()方法时，除了指定URL外，还可以传递一个选择符，从而只返回相应的页面内容:
*        $(function(){
*          $("#elem").load("newContent.html #info");
*        });
* - get() and post()
*   -- 这两个方法很类似，只是调用不同的请求类型而已。调用值两个方法时不需要选择某个jQuery对象（比如某个或一组页面元素），
*      而是直接调用: $.get()或$.post().
*        $.get("serverScritp.php", {param1: "value1", param2:"value2"},
*          function(data){ alert("server responded: " + data);}
*        );
* - ajax()
*   - ajax()方法具有很大的灵活性，几乎可以设置关于ajax调用及如何处理相应的哥哥方面。
*
* */
