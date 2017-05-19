/**
 * Created by as on 2017/5/16.
 */
/*
* DOM
* - 节点创建 createElement()
*   -- 节点创建之后是出于某种“不确定状态”，它的确存在，但不属于DOM树的任何位置，也就不会出现在浏览器窗口里。
*
* - createTextNode()
*   -- 参数不是nodeName,而是元素需要的文本内容
*
* - cloneNode()
*   -- 这个方法以一个布尔值作为参数，当参数为true时，表示不仅要复制节点，还要复制他的全部自己节点。
* */

//var newDiv = document.createElement("div");
//var newTextNode = document.createTextNode("Here is some text content.");

//var myDiv1 = document.getElementById("id1");
//var newDiv1 = myDiv1.cloneNode(true);

/*
* 操作子节点
*
* - appendChild()
*   -- 把新节点添加到DOM树的最简单方法也许就是把它作为现有节点的一个子节点。
*      这只需要获取父节点，然后调用appendChild()方法。
*
* - insertBefore()
*   -- appendChild()总是把新的子节点添加到子节点列表的末尾，
*      insertBefore()方法可以指定一个子节点，然后把新节点插入到它前面。
*
* - replaceChild()
*   -- 可以把父元素现有的一个子节点替换称为另一个节点。他有两个参数，一个是新的子节点，一个是现有子节点。
*
* - removeChild()
*
* - setAttribute() 修改元素属性
*
*
* 动态加载JavaScript文件
*
* - 使用createElement()动态创建<script>元素
* */

//var newText = document.createTextNode("Here is some text content.");
//var myDiv2 = document.getElementsByName("id2");
//myDiv2.appendChild(newText);

/*
*
* */
function replaceHeading() {
    var newH2 = document.createElement("h2");
    var newH2Text = document.createTextNode("Welcome!");
    newH2.appendChild(newH2Text);
    var myDiv = document.getElementById("id1");
    var oldP = document.getElementById("para1");
    myDiv.replaceChild(newH2, oldP);
}

window.onload = function () {
    document.getElementById("btn").onclick = replaceHeading;
}