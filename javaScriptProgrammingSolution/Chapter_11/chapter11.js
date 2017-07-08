/**
 * Created by as on 2017/6/6.
 */
/*
* 客户端JavaScript实践
*
* - 样式
*   *样式的变更方法
*     通过className属性更改class名
*     通过classList属性更改class名
*     更改style属性
*     直接更改样式表
*   - 通过classList属性更改class名
*     this.classList.toggle('foo-after');
*     可以使用classList属性的方法
*     contains(clazz)      判断在class名中是否含有clazz
*     add(clazz)           向class名中添加clazz
*     remove(clazz)        从class名中删除clazz
*     toggle(clazz)        如果在class名中含有clazz则将它删除，否则想class中添加clazz
*   *更改Style属性
* - 位置设定
*   *position属性
*     static、fixed、absolute、relative
*     *static
*       是position的默认值。将根据HTML中所写的标签来决定元素的配置。这种情况下无法通过top或left
*       之类的属性来指定元素的位置。
*     *fixed
*       如果将position属性指定为fixed，则将会以浏览器窗口为基准来确定元素的相对位置。
*       由于是相对于浏览器窗口的位置，因此即使对页面进行了滚动操作，元素在画面上的位置也不会发生
*       变化。也就是说元素将始终保持在同一位置。
*     *absolute
*       如果将position属性指定为了absolute，则可以对该元素与含有该元素的元素之间的相对位置进行设定。
*       通常情况下都是元素与body元素之间的相对位置，不过如果嵌套了static值的其他元素，则将以该元素为基准
*       确定相对位置。
* */
