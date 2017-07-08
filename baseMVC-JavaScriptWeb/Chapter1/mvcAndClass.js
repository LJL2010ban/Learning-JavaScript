/**
 * Created by as on 2017/5/19.
 */
/*
* MVC
* - 是一种设计模式，它将应用划分为3个部分: 数据(模型)、展现层(视图)和用户交互层(控制器)
*
* - 模型
*   - 用来存放应用的所有数据对象。比如，可能有一个User模型，用以存放用户列表、他们的属性及所有与模型有关的逻辑。
* - 视图
*   - 视图层是呈现给用户的，用户与之产生交互。在JavaScript应用中，视图大都是由HTML、CSS和JavaScript模板组成的。
*     除了模板中简单的条件语句之外，视图不应当包含任何其他逻辑。
* - 控制器
*   - 模型与视图之间的纽带。控制器从视图获得时间和输入，对它们(很可能包含模型)进行处理，并相应地更新视图。
*     当页面加载时，控制器会给视图添加事件监听，比如监听表单提交或按钮点击。然后，当用户和你的应用产生交互
*     时，控制器中的事件出发去就开始工作了。
*     不用使用类库和框架也能实现控制器：
*     var Controller = {};
*     // 使用匿名函数来封装一个作用域
*     (Controller.users = function($){
*       var nameClick = function(){
*         //
*       };
*       // 在页面加载时绑定事件监听
*       $(function(){
*         $("#view .name").click(nameClick);
*       });
*     })(jQuery);
*     以上代码: 创建了users控制器，这个控制器放在Controller变量下的命名空间。然后，我们使用了一个匿名函数封装了
*     一个作用域，以避免对全局作用域造成污染。当页面加载时，程序给视图元素绑定了click事件的监听。
*
* 类
* - JavaScript中并没有真正的类，但JavaScript中有构造函数和new运算符。构造函数用来给实例对象初始化属性和值。
*   任何JavaScript函数都可以用作构造函数，构造函数必须使用new运算符作为前缀来创建新的实例。
*   - new运算符改变了函数的执行上下文，同事改变了return语句的行为。实际上，使用new和构造函数类似于传统的实现了类的语言
*     var Person = function(name){
*       this.name = name;
*     };
*     // 实例化一个Person
*     var alice = new Person('alice');
*     // 检查这个实例
*     assert( alice instanceof Person );
*
*     Note: 构造函数的命名通常使用驼峰命名法，首字母大写，以此与普通的函数区分开来。
* - 当使用new关键字来调用构造函数时，执行上下文从全局对象(window)变成一个空的上下文，这个上下文代表了新生成的实例。
*   默认情况下，如果你的构造函数中没有返回任何内容，就会返回this-当前的上下文。要不然就返回任意费原始类型的值。
*     var Class = function(){
*       var klass = function(){
*         this.init.apply(this, arguments);
*       };
*       klass.prototype.init = function(){};
*       return klass;
*     };
*     var Person = new Class;
*     Person.prototype.init = function(){
*       // 基于Person的实例做初始化
*     };
*     // 用法
*     var person = new Person;
*
* - 给类添加函数
*   - 在JavaScript中，在构造函数中给类添加函数和给对象添加属性是一样的:
*     Person.find = function(id){};
*     var person = Person.find(1);
*   - 想要给构造函数添加实例函数，则需要用到构造函数的prototype:
*     Person.prototype.breath = function(){};
*     var person = new Person;
*     person.breath();
*     一种常用的模式是给类的prototype起一个别名fn，写起来也更简单:
*       Person.fn = Person.prototype;
*       Person.fn.run = function(){};
* - 给"类"库添加方法
*   - 给类添加属性和给构造函数添加属性是一样的:
*     var Person = new Class();
*     // 直接给类添加静态方法
*     Person.find = function(){};
*     // 这样我们就可以直接调用他们
*     var person = Person.find(1);
*   - 给类的原型设置的属性在类的实例中也是可用的:
*     var Person = new Class;
*     // 在原型中定义函数
*     Person.prototype.save = function(){};
*     // 这样我们就可以在实例中调用 他们
*     var person = new Person();
*     person.save();
*   -
*     var Class = function(){
*       var klass = function(){
*         this.init.apply(this, arguments);
*       };
*       klass.prototype.init = function(){};
*       // 定义prototype的别名
*       klass.fn = klass.prototype;
*       // 定义类的别名
*       klass.fn.parent = klass;
*       // 给类添加属性
*       klass.extend = function(obj){
*         var extended = obj.extended;
*         for(var i in obj){
*           klass[i] = obj[i];
*         }
*         if(extended) extended(klass)
*       };
*
*       // 给实例添加属性
*       klass.include = function(obj){
*         var included = obj.included;
*         for(var i in obj){
*           klass.fn[i] = obj[i];
*         }
*         if(included) included(klass)
*       };
*
*       return klass;
*     };
*     此代码："类"库的增强版，我们使用extend()函数来生成一个类，这个函数的参数是一个对象。
*     通过迭代将对象的属性直接复制到类上:
*       var Person = new Class;
*       Person.extend({
*         find: function(id){},
*         exists: function(id){}
*       });
*
*       var person = Person.find(1);
*
*     include()函数的工作原理也是一样的，只不过不是将属性复制到类中，而是复制至类的原型中。换句话说，这里的属性是类实例的属性，
*     而不是类的静态属性。
*       var Person = new Class;
*       Person.include({
*         save: function(id){};
*         destroy: function(id){};
*       });
*
*       var person = new Person;
*       person.save();
*
* 基于原型的类继承
* - JavaScript是基于原型的编程语言，原型用来区别类和实例。
*   原型对象 - prototypical object
*   原型是一个"模板"对象，它上面的属性被用作初始化一个新对象。任何对象都可以作为另一个对象的原型对象，一次来共享属性。
*   当你读取一个对象的属性时，JavaScript首先会在本地对象中查找这个属性，如果没有找到，JavaScript开始在对象的原型中查找
*   ，若仍未找到还会继续查找原型的原型，知道查到Object.prototype。如果找到这个属性，则返回这个值，否则返回undefined。
*   换句话说，如果你给Array.prototype添加了属性，那么所有的JavaScript数组都具有了这些属性。
*   为了让子类继承弗雷的属性，首先需要定义一个构造函数。然后，你需要将父类的新实例赋值给构造函数的原型:
*     var Animal = function(){};
*     Animal.prototype.breath = function(){
*       console.log('breath');
*     };
*     var Dog = function(){};
*     // Dog继承了Animal
*     Dog.prototype = new Animal; // ? 这种继承方式很有意思？
*     Dog.prototype.wag = function(){
*       console.log('Wag tail');
*     };
*     // 检查继承是否生效
*     var dog = new Dog;
*     dog.wag();
*     dog.breath(); // 继承的属性
* 给“类”库添加继承
* - 通过传入一个可选的父类来创建新类:
*     var Class = function(parent){
*       var klass = function(){
*         this.init.apply(this, arguments);
*       };
*       //改变klass的原型
*       if(parent){
*         var subclass = function(){};
*         subclass.prototype = parent.prototype;
*         klass.prototype = new subclass;
*       }
*       klass.prototype.init = function(){};
*       // 定义别名
*       klass.fn = klass.prototype;
*       klass.fn.parent = klass;
*       klass._super = klass.__proto__;
*       // include\extend相关代码
*       return klass;
*     };
*     此上代码: 如果将parent传入Class构造函数，你们所有的子类则必然共享同一个原型。这种创建临时匿名函数的小技巧避免了
*     在继承类的时候创建实例，这里按时了只有实例的属性才会被继承，而非类的属性。
*     var Animal = new Class;
*     Animal.include({
*       breath: function(){
*         console.log('breath');
*       }
*     });
*
*     var Cat = new Class(Animal);
*     // 用法
*     var tommy = new Cate;
*     tommy.breath();
*
* 函数调用
* - 在JavaScript中，函数和其他东西一样都是对象。然而，和其他对象不同的是，函数是可以调用的。函数内上下文，如this的取值，
*   取决于调用它的位置和方法。
*   除了使用方括号调用函数之外，还有其他两种方法可以调用函数: apply()和call().两者的区别在于传入函数的参数的形式。
*   apply()参数有两个参数:第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。如:
*     function.apply(this, [1,2,3]);
*   call()函数的行为和apply()函数的并无不同，只是用法不一样。call()第一个参数是上下文，后续是事件传入的参数序列。换句话说，这里使用多参数
*   ----而不是类似apply()的数组。
*     function.call(this, 1, 2, 3);
* - jQuery在API的实现中就利用apply()和call()来更改上下文，比如在事件处理程序中或者使用each()来做迭代时。
*   $('.clicky').click(function(){
*     // this指向当前节点
*     $(this).hide();
*   });
*   $('p').each(function(){
*     // this指向本次迭代
*     $(this).remove();
*   });
*   为了访问原始上下文，可以将this的值存入一个局部变量中，这是一种常见的模式，如:
*     var clicky = {
*       wasClicked: function(){
*         //
*       },
*       addListener: function(){
*         var self = this;
*         $('.clicky').click(function(){
*           self.wasClicked()
*         });
*       }
*     };
*     clicky.addListener();
*   然而，我们可以使用apply来将这段代码变得更干净一些，通过将回调包装在另外一个匿名函数中，来保持原始的上下文:
*     var proxy = function(func, thisObject){
*       return (function(){
*         return func.apply(thisObject, arguments);
*       });
*     };
*     var clicky = {
*       wasClicked: function(){},
*       addListener: function(){
*         var self = this;
*         $('.clicky').click(proxy(this.wasClicked, this));
*       }
*     };
*
* 控制“类”库的作用域
* - 上文中提到的proxy函数是一个非常有用的模式，我们应当将其添加至我们的“类”库中。
*   我们在类和实例中都添加proxy函数，这样就可以在事件处理程序之外处理函数的时候和下面这段代码所示的场景中保持类的作用域:
*     var Class = function(parent){
*       var klass = function(){
*         this.init.apply(this, arguments);
*       };
*       klass.prototype.init = function(){};
*       klass.fn = klass.prototype;
*       // 添加一个proxy函数
*       klass.proxy = function(func){
*         var self = this;
*         return (function(){
*           return func.apply(self, arguments);
*         });
*       };
*       // 在实例中也添加这个函数
*       klass.fn.proxy = klass.proxy;
*       return klass;
*     };
*   现在我们可以使用proxy()函数来包装函数，以确保他们在正确的作用于中被调用:
*     var Button = new Class;
*     Button.include({
*       init: function(element){
*         this.element = jQuery(element);
*         // 代理这个click函数
*         this.element.click(this.proxy(this.click));
*       },
*       click: function(){}
*     });
*
*     Button.include({
*       init: function(element){
*         this.element = jQuery(element);
*         // 绑定这个click函数
*         this.element.click(this.click.bind(this));
*       },
*       click: function(){}
*     });
*
* 添加私有函数
* -
* */
