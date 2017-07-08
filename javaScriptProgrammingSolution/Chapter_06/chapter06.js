/**
 * Created by as on 2017/5/25.
 */
/*
* 函数和闭包
*
* - 函数调用的分类
*   // 函数调用的分类
*      名称                        说明
*      方法调用                     通过接收方对象对函数进行调用(包括apply与call调用)
*      构造函数调用                  通过new表达式对函数进行调用
*      函数调用                     以上两种方式之外的函数调用
*   // 函数声明语句后置
*     通过函数声明语句声明的函数，可以在进行声明的代码行之前就对其调用。
*     function doit(){
*       fn();  // 在声明函数fn之前对其进行调用
*       function fn(){print('called');};
*     }
*     // 调用函数
*     doit(); // output: called
*     通过匿名函数表达式进行定义的情况结果将会不同
*     function doit(){
*       fn();
*       var fn = function(){print('called');};
*     }
*     // 调用函数
*     doit(); // output: TypeError: fn is not a function
* - 参数与局部变量
*   - arguments对象
*     可以通过在函数内使用arguments对象来访问实参。
*     function fn(){
*       print(arguments.length);
*       print(arguments[0], arguments[1], arguments[2]);
*     }
*     // 函数调用
*     fn(6);  // output: 1 6 undefined undefined  arguments.length为实参的数量，值为1. arguments[0]的值为6
*     fn(6,7); // output: 2 6 7 undefined  arguments[0]=6,arguments[1]=7
*   - 递归函数
*     递归函数是一种在函数内对自身进行调用的函数。
*     // n的阶乘
*     function factorial(n){
*       if(n <= 1){
*         return 1;
*       } else{
*         return n*factorial(n-1);
*       }
*     }
*     一般情况下，最好避免在JavaScript中使用递归，其效率在JavaScript中并不高。
*     能够通过arguments.callee来获取正在执行的Function对象的引用。这一引用可以通过没有名字的函数(即匿名函数)来实现递归函数时使用。
*     (function(n){if(n<=1)return 1; else return n*arguments.callee(n-1);})(5); // output : 120
*   - 作用域
*     作用域指的是名称(变量名与函数名)的有效范围。
*     全局作用域 与 函数作用域
*     全局作用域是函数之外(代码最外层)的作用域。在函数之外进行的声明的名称属于全局作用域。
*     在函数内部进行声明的名称拥有的是函数作用域，他们仅在函数内部才有效。
*     var x = 1;
*     function f(){
*       print('x = ' + x);  // output: undefined
*       var x = 2;
*       print('x = ' + x);  // output: 2
*     }
*     以上代码示例，局部变量x的作用域是整个函数f内部。由于此时还没有对其进行赋值，所以变量x的值为undefined。
*   - 浏览器作用域
*     Note: 在JavaScript中，并不存在块级作用域！！！
*     - let 与 块级作用域
*       在ECMAScript第5版中没有块级作用域，不过JavaScript自带有let这一增强功能，可以实现块级作用域的效果。
*       // 通过let声明进行声明的变量具有块级作用域的功能。
*       function f(){
*         let x = 1;
*         print(x);  // output: 1
*         {
*           let x = 2;
*           print(x);  // output: 2
*         }// let的作用域到此为止
*         print(x);  // output: 1
*       }
*       //
*       function f1(){
*         let x = 1;
*         {
*           print(x);  // output: 1 将对代码块由内到外进行名称查找
*         }
*       }
*       // 该名称在let声明之前也是有效的
*       function f2() {
*         let x = 1;
*         {
*           print(x);  //output: undefined
*           let x = 2;
*           print(x);  // output: 2
*         }
*       }
*     Note: 不在let语句内部，声明与let变量同名的变量会引起TypeError问题，也不能通过var声明同名变量
*     - 嵌套函数 与 作用域
*       //
*       function f(){
*         var x = 1;  //函数f的局部变量
*         //嵌套函数的声明
*         function f1(){
*           var y = 2;  // 函数f1的局部变量
*           print(x);  // 对函数f的局部变量进行访问
*           print(y);  // 对函数f1的局部变量进行访问
*         }
*         // 嵌套函数的声明
*         function f2(){
*           print(y);  // 如果不存在全局变量y，则会发生ReferenceError
*         }
*
*         // 嵌套函数的调用
*         f1();
*         f2();
*       }
*       // output : 1 2 ReferenceError : y is not defined
*     - 变量隐藏
*       指的是，通过较小的变量(或函数),来隐藏作用域较大的同名变量(或函数)。
*       var n = 1; // 全局变量
*       function f(){  // 局部变量隐藏了全局变量
*         var n = 2;
*         print(n);  // output: 2
*       }
*     - 函数是一种对象
*     - Function类
*       Function类是用于Function对象的类。
*       // Function.prototype对象的属性名
*       // 属性名                          // 说明
*          apply(thisArg,argArray)           将argArray的所有元素作为参数对函数调用。函数内的this引用引用的是thisArg对象
*          bind(thisArg[, arg0,arg1, ...])   返回一个新的Function对象。调用此函数时，arg0,arg1等是实参，函数内的this引用引用的是thisArg对象
*          call(thisArg[,arg0,arg1,...])     将arg0、arg1等作实参对函数调用。函数内的this引用引用的是thisArg对象
*          caller                            JavaScript自带的增强功能。表示的是对当前函数调用的函数
*          constructor                       对Function类对象的引用
*          isGenerator()                     JavaScript自带的增强功能。当函数是generator时，返回true
*          length                            函数的形参的数量
*          name                              JavaScript自带的增强功能。函数的表示名称
*          toSource()                        JavaScript自带的增强功能。求值结果将返回用于函数进行生成的字符串
*          toString()                        将函数体转换为字符串形式并返回
*       Function类的实例属性
*          caller                            JavaScript自带的增强功能。表示的是对当前函数进行调用的函数
*          length                            函数的参数的数量
*          name                              JavaScript自带的增强功能。函数的表示名称
*          prototype                         用于原型链
*       // Function类的继承
*       JavaScript的函数是Function对象的对象实例。
*       function fn(){}
*       fn.constructor === Function;  // 构造函数
*       fn._proto_ === Function.prototype;  // 原型对象
*   - 嵌套函数声明与闭包(closure)
*     //
*     function f(){
*       var cnt = 0;
*       return function(){ return ++cnt;};
*     }
*     var fn = f();  // 将函数f的返回值赋值给变量fn
*     // 调用函数
*     fn();
*     fn();
*     ...
*     - 闭包的原理
*       - 嵌套的函数声明
*         闭包的前提条件是需要在函数声明的内部声明另一个函数(即嵌套的函数声明)。
*         //
*         function f(){  // 该函数具有嵌套函数声明
*           function g(){
*             print('g is called');
*           }
*           g();
*         }
*         // 对函数进行调用
*         f();  // output: g is called
*         在JavaScript中，调用函数是将会隐式地生成Call对象。在函数调用完之后，Call对象将被销毁。
*       - 嵌套函数的返回
*         //
*         function f(){
*           var n = 123;
*           function g(){
*             print('n is' + n);
*             print('g is called');
*           }
*           return g;  // 在内部返回已被声明的函数(未对函数进行调用) output: function g(){print('n is' + n);print('g is called');}
*         }
*       - 闭包
*         现尝试将函数f的返回值赋值给另一个变量。虽然也可以直接调用函数而不赋值，不过为了使整个过程更易于理解，还是采用了赋值操作。
*         //
*         var g2 = f();  // 将返回的函数赋值给变量
*         g2();          // 调用函数(函数f内的函数g) output: n is 123 g is called
*         以上代码说明，从函数f的外部调用函数g。进一步说，这说明函数f的局部变量n在函数f被调用之后依然存在。
*         函数f被调用时生成的Call对象(简称Call-f对象)的属性g所引用的Function对象(已经反复强调，对象本身没有名称的)，为f2所引用。
*         只要引用的变量还存在，对象就不会称为垃圾回收机制的目标。因此，只要名称g2还存在，Function对象就会存在。
*         如果变量g2与g3分别引用两个不同Function对象。之后，这两个Function对象将会应用各自不同的Call-f对象，因为Call对象会在每次调用
*         时被独立生成。
*         //
*         var g2 = fn();
*         var g3 = fn();
*         // 闭包
*         function fn(arg){
*           var n = 123 + Number(arg);
*           function g(){
*             print('n is ' + n);
*             print('g is called');
*           }
*           return g;
*         }
*         var g2 = fn(2);
*         var g3 = fn(3);
*         g2();  // output: n is 125 g is called
*         g3();  // output: n is 126 g is called
*         //
*         var n = 7;  // 对全局变量n进行定义，但这对结果没有影响
*         g3();  // output: n is 126 g is called
*       - 闭包与执行环境
*         通过g2与g3的调用结果不同，这就意味着可以通过同一段代码生成具有不同状态的函数。这就是所谓的闭包。说的专业一点，闭包指的是
*         一种特殊的函数，这种函数会在被调用时保持当时的变量名查找的执行环境。
*         不过，闭包仅仅是保持了变量名查找的状态，而并没有保持对象所有的状态，对此要加以区分。也就是说，闭包虽然会保持(在嵌套外层进行函数调用
*         时被隐式地生成的)Call对象，但无法保持Call对象的属性所引用规定之前的对象的状态。
*         像下面一样，在匿名函数表达式中直接使用return语句的写法很常见，所以需要记住这种闭包的习惯用法。
*         //
*         function fn(arg){
*           var n = 123+Number(arg);
*           return function(){print('n is '+n); print('g is called')};
*         }
*       - 闭包中需要注意的地方
*         如果在函数f内有两个函数声明，这两者将会调用同一个Call-f对象。这是在使用JavaScript的闭包时容易出错的地方。
*         //
*         function fn(arg){
*           var n = 123 + Number(arg);
*           function g(){print('n is '+n); print('g is called');}
*           function gg(){print('n is'+n); print('gg is called');}
*           return [g, gg];
*         }
*         // 函数调用
*         var g_and_gg = fn(1);
*         g_and_gg[0]();  // output: n is 125 g is called 对闭包g的调用
*         g_and_gg[1]();  // output: n is 125 gg is called 对闭包gg的调用
*         函数g与函数gg保持了各自含有局部变量n的执行环境。由于声明函数g时的n值与声明函数gg时的n值是不同规定，因此闭包g与闭包gg貌似
*         将会表示各自不同的n值。但实际上两者将会表示相同的值。这是因为两者引用了同一个Call对象。
*       - 防范命名空间的污染
*         - 模块
*           对于JavaScript来说，不存在所谓模块的语言功能。因此，对于客户端JavaScript，如果在一个HTML文件中对多个JavaScript文件
*           进行读取，则他们相互之间的全局名称会发生冲突。也就是说，在某个文件中使用的名称无法同事在另一个文件中使用。
*           此外，全局变量还降低了代码的可维护性。
*         - 避免使用全局变量
*           从形式上来看，在JavaScript中减少全局变量的数量的方法是很简单的。
*           // 全局函数
*           function sum(a, b){
*             return Number(a) + Number(b);
*           }
*           // 全局变量
*           var position = {x:2,y:3};
*           // 像下面这样，借助通过字面量生成的对象的属性，将名称封入对象的内部。于是从形式上看，全局变量就减少了。
*           // 封入对象字面量中
*           var MyModule = {
*             sum: function(a,b){
*               return Number(a) + Number(b);
*             },
*             position:{x:2, y:3}
*           };
*           // 对其调用
*           MyModule.sum(3,3);  // output: 6
*           print(MyModule.position.x);  // output:2
*           // 也可以像下面一样不适用对象字面量
*           var MyModule = {};
*           MyModule.sum = function(a,b){return Number(a)+Number(b);};
*           MyModule.position = {x:2,y:3};
*           在上面例子中，方面起见，我们将MyModule称为模块名。如果完全采用这种方式，对于一个文件来说，只需要1个模块名就能消减全局变量
*           的数量。
*         - 通过闭包实现信息隐藏
*           JavaScript语音并没有提供可用于信息隐藏的语法功能，不过灵活运用闭包之后，就能够是的名称无法从外面被访问。
*           // 使用了闭包的模块
*           // 在此调用匿名函数 由一个匿名函数的返回值是一个函数，所以变量sum是一个函数
*           var sum = (function(){
*             // 无法从函数外部访问该名称。实际上，这变成了一个私有变量。一般来说，在函数被调用之后该名称就将无法再被访问
*             // 不过由于是在被返回的匿名函数中，所以仍可以继续被使用
*             var position = {x:2,y:3};
*             // 同样是一个函数外部无法被访问的私有变量，将其命名为sum也可以。不过为了避免混淆，这里采用其他名称
*             function sum_internal(a,b){
*               return Number(a)+Number(b);
*             }
*             // 只不过是为了使用上面的两个名称而随意设计的返回值
*             return function(a,b){
*               print('x= ', position.x);
*               return sum_internal(a,b);
*             };
*           })();
*           // 调用代码
*           sum(3,4); // output : x= 2 7
*           以上代码可以抽象为先这种形式的代码。再利用韩硕作用域可以封装名称，以及闭包可以使名称在调用结束依然存在这两个特性后，信息隐藏
*           得意实现。
*             (function() { 函数体 })();
*           //
*           var obj = (function(){
*             // 从函数外部无法访问该名称  实际上，这是一个私有变量
*             var position = {x:2,y:3};
*             // 这同样是一个无法从函数外部进行访问的私有函数
*             function sum_internal(a,b){
*               return Number(a)+Number(b);
*             }
*             // 只不过是为了使用上面的狂歌名称而随意设计的返回值
*             return {
*               sum: function(a,b){ return sum_internal(a,b);},
*               x:position.x
*             };
*           })();
*           // 调用函数
*           obj.sum(3,4); // output: 7
*           print(obj.x); // output: 2
*         - 闭包和类
*           - 无法对属性值进行访问控制
*             JavaScript没有与访问控制有关的语法结构。不过只有利用函数作用域与闭包，就可以实现访问控制。
*             // 用于实例生成的函数-类
*             function myclass(x,y){
*               return {show:function(){print(x,y);}};
*             }
*             // 调用函数
*             var obj = myclass(2,3);
*             obj.show(); // output:
*             // 实现计数器功能的类
*             function counter_class(init){  // 初始值可以通过参数设定
*               var cnt = init || 0;  // 设置默认参数的习惯做法
*               // 如有必要，可再次声明私有变量与私有函数
*               return {
*                 // 公有方法
*                 show: function(){print(cnt);},
*                 up: function(){cnt++;return this;},  // return this在使用方法链时很方便
*                 down: function(){cnt--; return this;}
*               };
*             }
*             // 调用函数
*             var counter1 = counter_class();
*             counter1.show();  // output:0
*             counter1.up();
*             counter1.show(); // output:1
*             var counter2 = counter_class(10);
*             counter2.up().up().up().show();  // 方法链 output:13
*
*             表达式闭包:
*             JavaScript有一种自带的增强功能，称为支持韩属性程序设计的表达式闭包(Expression closure).
*             从语法结构上来看，表达式闭包时函数声明表达式的一种省略形式。
*             var sum = function(a,b){ return Number(a)+Number(b);}
*             // 可以省略为
*             var sum = function(a,b) Number(a)+Number(b);
*           - 回调函数设置模式
*             回调函数是程序设计的一种方法。这种方法是指，在传递了可能会进行调用的函数或对象之后，在需要时再分别对其进行调用，
*             由于调用方和被调用方的依赖关系与通常相反，所以也称为控制反转(IoC, Inversion of COntrol)
*             回调函数产生因素:
*             - 在客户端JavaScript中基本都是GUI程序设计。GUI程序设计是一种很适合使用所谓事件驱动的程序设计方式。
*               事件驱动正是一种回调函数设计模式。客户端JavaScript程序设计师一种基于DOM的事件驱动式程序设计。
*             - 源于客户端JavaScript无法实现多线程程序设计。而通过将回调函数与异步处理相结合，就能够实现并行处理。
*               由于不支持多线程，所以为了实现并行处理，不得不使用回调函数，这逐渐称为一种惯例。
*           - JavaScript与回调函数
*             - 回调函数
*               // 单纯的函数属性回调函数
*               var emitter = {
*                 // 为了能够注册多个回调函数而通过数组管理
*                 callbacks:[],
*                 // 回调函数的注册方法
*                 register:function(fn){
*                   this.callbacks.push(fn);
*                 },
*                 // 事件的触发处理
*                 onOpen: function(){
*                   for each(var f in this.callbacks){
*                     f();
*                   }
*                 }
*               };
*               // 调用函数
*               emitter.register(function(){print('event handler is called');});
*               emitter.register(function(){print('event handler is called');});
*             - 回调函数与方法
*               回调函数只是单纯的函数而不具有状态。
*               // 把回调改为对象
*               function MyClass(msg){
*                 this.msg = msg;
*                 this.show = function(){ print(this.msg + ' is called');}
*               }
*               // 讲方法注册为回调函数
*               var obj1 = new MyClass('listener1');
*               var obj2 = new MyClass('listener2');
*               emitter.register(obj1.show);
*               emitter.register(obj2.show);
*               // 对事件发生的模拟(调用回调函数)
*               emitter.onOpen();  // output: undefined is called undefined is called
*                                  // 与期望的结果相悖
*               解决方法: 1.使用bind，2.不适用方法而是用对象进行注册。
*               // 使用bind
*               // 将方法注册为回调函数
*               var obj1 = new MyClass('listener1');
*               var obj1 = new MyClass('listener2');
*               emitter.register(obj1.show.bind(obj1));
*               emitter.register(obj2.show.bind(obj2));
*               // 对事件发生的模拟(对回调函数进行调用)
*               emitter.onOpen();
*               bind是ECMAScript第5版新增的功能，是Function.prototype对象的方法。bind的作用和apply与call相同，都是
*               用于明确地指示出方法调用时的this引用。
*             - 闭包与回调函数
*               // 将闭包注册为回调函数
*               emitter.register((function(){var msg='closure1'; return function(){print(msg+' is called')}})());
*               emitter.register((function(){var msg='closure2'; return function(){print(msg+' is called')}})());
*               // 对事件发生的模拟(调用回调函数)
*               emitter.onOpen(); // output: closure1 is called closure2 is called
* */
