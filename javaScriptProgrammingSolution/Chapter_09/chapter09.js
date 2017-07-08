/**
 * Created by as on 2017/6/3.
 */
/*
* DOM Document Object Model, 文档对象模型
*
* - DOM定义
*   DOM是一种API，起作用为在程序中使用HTML文档以及XML文档。
* - DOM Level1
*   是由core与html这两个模块组成的。
*   // 方法名                 // 说明
*   getElementsByTagName        根据指定的标签名来获取元素
*   createElement               创建新元素
*   appendChild                 插入元素
* - DOM Level2
*   CSS也是在DOM Level 2中定义的模块。
*   // DOM Level2所包含的模块一览
*   core                        Level 1 Core的扩展
*   HTML                        Level 1 HTML的扩展
*   Views                       对于文档显示状态相关的功能提供支持
*   Events                      对捕获、冒泡、取消等时间系统提供支持
*   Styles                      对与样式相关的功能提供支持
*   Travesal and Range          对DOM树的变量以及范围的指定提供支持
*
* - DOM Level 3
*   // DOM Level3所包含的模块一览
*   Core                        Level 2 Core的扩展
*   Load and Save               对文档内容的读取与写入提供支持
*   Validation                  对文档内容合法性的验证提供支持
*   XPath                       对XPath相关的功能提供支持
*   Events                      Level 2 Events的扩展。对键盘事件提供支持
*
* - DOM的表述方式
*   接口名.方法名()
*   接口名.属性名
* - DOM基础
*   - 标签、元素、节点
*     标签是一种用于标记的字符串，其作用为对文档的结构进行指定。
*     节点具有nodeType这一属性，如果其值为ELEMENT_NODE(1),则该节点是一个元素。
*     // 在HTML文档中使用的节点
*     // 节点               // 节点类型常量               // 节点类型的值            // 接口
*     元素节点               ELEMENT_NODE                1                       Element
*     属性节点               ATTRIBUTE_NODE              2                       Attr
*     文本节点               TEXT_NODE                   3                       Text
*     注释节点               COMMENT_NODE                8                       Comment
*     文档节点               DOCUMENT_NODE               9                       Document
* - DOM操作
*   通过选择某个DOM元素并改写其属性，或创建一个新的DOM元素，就能够给予用户视觉反馈，以实现交互功能。
* - Document对象
*   Document对象是DOM数结构中的根节点。documente是window对象的一个属性。不过，由于window对象是一个全局变量，因此在对其属性
*   进行访问时可以将window省略不写。
*
* - 节点的选择
*
*
* */
