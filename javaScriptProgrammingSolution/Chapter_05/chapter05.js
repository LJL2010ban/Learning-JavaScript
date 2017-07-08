/**
 * Created by as on 2017/5/22.
 */
/*
* 变量和对象
*
* - 变量的声明
*   对同一个变量进行重复声明时不会引起什么问题的，原有的值也不会被清空。
*     var a = a || 7; // 一种习惯用法。如果变量a以及具有某个值(严格来说是具有某个可以被转换为true的值)就直接使用，否则把7赋值给a
*   在以上代码中，如果a已经被声明且赋值的变量，则不会有任何效果；而如果没有被声明过，则会在声明的同事对其进行赋值操作。
* - 变量和引用
*   对象的概念很好滴说明了一种拥有名称的客体。对象本身是没有名称的，之所以使用变量，是为了通过某个名称来称呼这样一种不具有名称的对象。
*   变量又分为基本类型的变量与引用类型的变量。由于在JavaScript中，变量是不具有类型的，因此从语法标准上来看，两者并没有什么不同。
*   不过，在JavaScript中仍然有对象的引用这一概念。
*   所谓"引用"，可以认为是一种用于只是出对象的位置的标记。可以理解为是和指针等价的东西。不过，引用不支持那些可以对指针进行的运算。引用
*   这一语言功能只有只是位置信息的作用。准确滴说，对象的赋值其实就是将对象的引用进行赋值。
*    var a = 123;
*    var b = a; // 将变量a的值赋值给变量b
*    b++; // 对变量b进行自增操作后，变量a的值是不会发生改变的。
*    另一方面，如果将一个对象赋值给变量，其实就是把这个对象的引用赋值给了改变量。对象本身是无法赋值给一个变量的。如果在右侧写上了只有的变量
*    该变量所表示的引用将被赋值给赋值目标处(左侧)的变量。对象本身并不会被复制。
*
*    var a = {x:1, y:2}; // 将对象的引用赋值给变量a
*    var b = a;          // 将变量a的值(对象的引用)赋值给变量b
*    b.x++;              // 改变变量b所引用的对象
*    print(b.x);         // output = 2
*    print(a.x);         // output = 2
*    如果像上面只有，改变了变量b所引用的对象，你们这一改变也会体现在变量a之中，这是因为这两个变量通过引用而指向了同一个对象。
*    对于引用类型的变量，整个过程改变的其实是其引用的对象，而不是该变量的值。引用类型的变量具有的值就是引用(值)，这个值将在赋值的时候被复制。
*    var a = {x:1, y:2};
*    var b = a;          // 变量a和变量b引用的是同一个对象
*    a = {x:2, y:2}      // 改变了变量a的值(使其引用了另一个对象)
*    print(b.x);         // output = 1
* - 函数的参数(值的传递)
*   - 一个无法交换器两个参数的值的函数
*     function no_swap(a, b){
*       var tmp = a;
*       a = b;
*       b = tmp;
*     }
*     var one = 1;
*     var zero = 0;
*     no_swap(one, zero);
*     print(one, zero); // output: 1 0
*     如上功能，在JavaScript中并不支持，所以必须通过其他方式来实现对两个蚕食值的交换。可以通过传递一个数组并交互那其中的元素，或者通过
*     传递一个对象并交换器属性之类的形式来实现。
*     如下，使用了JavaScript自带的增强功能，将交换结果设为函数的返回值。
*       function swap(a, b){
*         return [b ,a];
*       }
*       [one, zero] = swap(one, zero);
*       print(one, zero);
*   - 字符串与引用
*     将字符串值赋值给变量时，究竟是复制了字符串的值呢，还是复制了其引用呢？
*     字符串型是一种基本数据类型，根据语法规则，对其值本身进行复制时对一致性的要求更高。在具体实现语言时，几乎所有的JavaScript
*     实现都采用了引用赋值的方式。这是因为，如果在进行变量赋值时进行字符串值的复制，效率将变得非常低。
*   - 对象与引用相关的术语总结
* - 变量和属性
*
* - 对变量是否存在的检验
*   在读取未声明变量的值时会引起ReferenceError异常，
*     if('a' in this){
*       var b = a;
*     } else{
*       var b = 7;
*     }
*     // 从这里开始可以使用变量b
* - 对象的定义
*   在JavaScript中，一切都是对象。对象之间的写作(消息手法)通过属性访问(以及方法的调用)来实现。而对象之间的共性，则是通过继承
*   同一个对象的属性的方式来实现。JavaScript通过基于原型的形式来实现继承。
* - 对象的生成
*   - 对象字面量
*     可以使用对象字面量的情况:
*     - 作为singleton模式的用法
*
*     - 作为多值数据的用法(函数的参数或返回值等)
*     - 用于替代构造函数来生成对象
*   - 关于默认参数
*     JavaScript并不支持默认参数这一功能，但可以通过其他形式来实现。
*       function getDistance(pos){
*         pos = pos || {x:0, y:0, z:0}; // 如果没有收到参数pos的话，则使用默认值
*         return Math.sqrt(pos.x*pos.x + pos.y*pos.y + pos.z*pos.z);
*       }
*   - 用于代替构造函数的用法
*       // 用于生成对象的函数
*       function createObject(){
*         return {x:3, y:2, z:2,
*           getDistance: function(){
*             return Math.sqrt(this.x*this.x+this.y*this.y+ this.z*this.z);
*           }
*         };
*       }
*   - 构造函数与new表达式
*     构造函数是用于生成对象的函数。
*     function myClass(x, y){
*       this.x = x;
*       this.y = y;
*     }
*     从形式上来看，构造函数的调用方式如下:
*     - 构造函数本身和普通的函数声明形式相同
*     - 构造函数通过new表达式调用
*     - 调用构造函数的new表达式的值是(被新生成的)对象的引用
*     - 通过new表达式调用的构造韩式内的this引用引用了(被新生成的)对象
*   - new表达式的操作
*   - 构造函数调用
*     构造函数总是由new表达式调用。构造函数在最后会饮食地执行return this操作。（建议不要再在构造函数收写return语句）
*   - 构造函数和类的定义
*     // 模拟类定义
*     function MyClass(x,y){
*       // 相当于域
*       this.x = x;
*       this.y = y;
*       // 相当于方法
*       this.show = function(){
*         print(this.x, this.y);
*       }
*     }
*     存在的问题：1 由于所有的实例都是复制了同一个方法所定义的实体，所以效率(内存效率与执行效率)低下；
*               2 无法对属性值进行访问控制(private或public等)
*   - 属性访问
*     需要注意的是，在点运算符之后书写的属性名会被认为是标识符，而中括号运算符内的则是被转换为字符串值的式子。
*     var obj = {x:3, y:4};
*     print(obj.x); // 属性x
*     print(obj['x']); // 属性x
*     var key = 'x';
*     print(obj[key]); // 属性x(而非属性key)
*   - 点运算符与中括号运算符在使用上的区别
*     能使用点运算符的情况一定也可以使用中括号运算符，反之未必成立。
*     只能使用中括号运算符的几种情况:
*     - 使用了不能作为标识符的属性名的情况
*     - 将变量的值作为属性名使用的情况
*     - 将表达式的求值作为属性名使用的情况
*     包含数值或横杠(-)的字符串不能作为标识符使用。
*     var obj = {'foo-bar':5};
*     obj.foo-bar; // ReferenceError: bar is not defined
*     obj['foo-bar']; // output: 5
*     // 仅读取数值的整数部分的处理
*     Math[this < 0 ? 'ceiling': 'floor'](this)
*   - 属性的枚举
*     可以通过for...in语句对属性名进行枚举。
*     var obj = {x:3, y:4, z:5};
*     for(var key in obj){
*       print('key = ', key);  // 属性名的枚举
*       print('val = ', obj[key]); // 属性值的枚举
*     }
* - 作为关联数组的对象
*   - 关联数组
*     由于数组的键是连续的数值，因此可以将其看作具有顺序的值的集合。除了数值以外大多都会使用字符串作为键值。不过键的类型也可以不限于
*     字符串，对任意类型的键与值的集合进行操作的数据结构称为关联数组。在有些语言中，也被称为映射或字典。
*     关联数组的最主要用途是执行通过键来读取值的操作。
*     - 关联数组的操作方式
*       var map = {x:3, y:4};
*       print(map.x); // output:3
*       delete map.x; // 删除map的x属性，也可以使用delete map['x'];
*     - 作为关联数组的对象的注意点
*       简单来说，原型继承指的是一种对象继承其他对象的属性并将其作为自身的属性一样来使用的做法。
*       如下所示，从形式上来说，对象obj的属性并不是其直接属性，而是通过原型继承而得到的属性
*         function MyClass(){};
*         MyClass.prototype.z = 4; // 在原型继承链上设定属性z
*         var obj = new MyClass(); // 属性z继承了原型
*         print(obj.z);            // output：5
*       for.in语句将枚举通过原型继承而得到的属性
*         for(var key in obj){print(key);} // output:z
*       通过原型继承而得到的属性，无法被delete！！！！
*       通过in运算符检测关联数组是否存在，就会发生于原型继承而来的属性相关的问题。因此，可以通过hasOwnProperty来进行检测。
*       var map = {};
*       'toString' in map;  // output : true
*       map.hasOwnProperty('toString'); // 由于toString不是直接属性，因此结果为false
*       map['toString'] = 1;
*       map.hasOwnProperty('toString'); // output：true
*       delete map['toString'];
*       map.hasOwnProperty('toString'); // output : false
* - 属性的属性
*   writable - 可以改写属性值
*   enumerable - 可以通过for.in语句枚举
*   configurable - 可以改变属性的属性。可以删除属性
*   get - 可以指定属性值的getter函数
*   set - 可以指定属性值的setter函数
* - 垃圾回收
*   不再使用的对象的内存将会自动回收，这种功能称作垃圾回收。所谓不再使用的对象，指的是没有被任何一个属性(变量)引用的对象
*   循环引用，有可能导致内存泄漏。所谓循环引用，指的是对象通过属性想换引用而导致他们不会被判定为不再使用的状态。建议使用内存泄漏工具来检测。
* - 不可变对象
*   所谓不可变对象，指的是在被生成之后状态不能再被改变的对象。由于对象的状态是由其各个属性的值所决定的，因此从形式上来说也是指无法改变属性
*   的值的对象。JavaScript中的一种典型的不可改变对象就是字符串对象。
*   - 不可变对象的作用
*     灵活运用不可变对象有助于提高程序的健壮性。
*   - 实现不可变对象的方式
*     在JavaScript中可以通过以下方式实现对象的不可变:
*     - 将属性(状态)隐藏，不提供变更操作。
*     - 灵活运用ECMAScript第五版中提供的函数。
*     - 灵活运用writable属性、configurable属性以及setter和getter。
*     JavaScript中的对象并没有private属性这样的显示访问控制功能。为了将属性隐藏，可以使用一种被称为闭包的方法。
*   在ECMAScript第5版中有一些用于支持对象的不可变化的函数。seal可以向下兼容preventExtensions，freeze可以向下兼容seal。
*   ECMAScript第5版中用于支持对象不可变化的函数
*   方法名                 属性新增          属性删除         属性值变更         确认方法
*   preventExtensions     X               O               O                Object.isExtensible
*   seal                  X               X               O                Object.isSealed
*   freeze                X               X               X                Object.isFrozen
*     preventExtensions例子
*     var obj = {x:2, y:3};
*     Object.preventExtensions(obj);
*     // 无法新增属性
*     obj.z = 4;
*     Object.keys(obj); // output: ["x", "y"]
*     // 可以删除属性
*     delete obj.y;
*     Object.keys(obj); // output: ["x"]
*     // 可以变更属性
*     obj.x = 20;
*     print(obj.x); // output : 20
*
*     seal例子
*     var obj = {x:3, y:4};
*     Object.seal(obj);
*     // 无法删除属性
*     delete obj.y;  // 将返回false
*     Object.keys(obj);  // output: ["x", "y"]
*     // 可以更改属性值
*     obj.x = 20;
*     print(obj.x); // output: 20
*
*     freeze例子
*     var obj = {x:2,y:3};
*     Object.freeze(obj);
*     // 无法更改属性值
*     obj.x = 20;
*     print(obj.x); // output: 2
*   对于以上操作，一旦变更就无法还原；如果想让原型继承中的被继承方也不可变化，需要对其进行显式的操作。
*   从内部实现来看，seal的作用是将属性的configurable属性置为假，而freeze是将writablle属性置为假。
* - 方法
*   JavaScript中并不存在方法这一概念。方便起见，我们将作为对象属性的函数称为方法。而在实际中可以像这样定义方法：那些使用了this引用
*   来调用并访问了对象的属性的函数，被称为方法。
* - this引用
*   this引用是一种 在JavaScript指定代码中随时都可以使用的只读变量。‘this引用’引用的是一个对象。
*   this引用有着会根据代码的上下文语境自动改变其引用对象的特性。
*   - this引用的规则
*     在最外层代码中，this引用引用的是全局对象。
*     在函数内，this引用根据函数调用方式的不同而有所不同。（需要注意的是，对于函数内部的情况，this引用的引用对象并不是根据函数的内容
*     或什么声明方式而改变的，而是根据其调用方式而改变。也就是说，即使是同一个函数，如果调用方式不同，this引用的引用对象也会有所不同）
*     // 函数内部的this引用
*     函数的调用方式                this引用的引用对象
*     构造函数调用                  所生成的对象
*     方法调用                     接收方对象
*     apply或call调用              由apply或call的参数指定的对象
*     其他方式的调用                 全局对象
*
*     通过点运算符或中括号运算符调用对象的方法时，在运算符左侧所指定的对象。
*     // 对象定义
*     var obj = {x:3, doit: function(){print('method is called .'+ this.x);}};
*     obj.doit();    // output: method is called . 3   对象obj是接收方对象。doit是方法
*     obj['doit'](); // 同上
*     // 上面例子，首先是将对象的引用赋值给变量obj。这个对象有两个属性。属性x的值为数值3，属性doit的值是一个函数。将该函数称为方法doit。
*     // 可以通过点运算符或中括号运算符对obj调用方法doit。这时，方法调用的目标对象被称为接收方对象(也就是说，obj所引用的对象是一个
*     接收方对象)。被调用的方法内的this引用引用了该接收方对象。apply和call的作用是显式地指定接收方对象。
*   - this引用的注意点
*     JavaScript的this引用的引用对象，会随着调用方式的不同而改变。
*     var obj = {x:3, doit: function(){print('method is called. '+ this.x);}};
*     var fn = obj.doit; // 将obj.doit引用的function对象赋值给全局变量
*     fn();              // output: method is called. undefined    函数内的this引用引用了全局对象
*     var x = 5;         // 确认this引用确实引用了全局对象
*     fn();              // output: method is called. 5
*     var obj2 = {x:4, doit2:fn}; // 将obj的方法(function对象的引用)赋值给另一个对象obj2的属性
*     obj2.doit2();               // output: method is called. 4   方法内的this引用引用了对象obj2
*     以上code，用于说明通过其他的接收方对象调用某个函数，或是在没有接收方对象的情况下，this引用的操作是不同的。
*
*     - 在方法内部调用方法的情况
*       在方法内部调用方法时，也需要对this引用多加注意。
*       // 从doit方法内调用doit2方法时，必须通过this引用，以this.doit2()的方式实现
*       var obj = {
*         x:3,
*         doit: function(){print('doit is called.' + this.x); this.doit2();},
*         doit2: function(){print('doit2 is called.'+ this.x);}
*       };
*       obj.doit(); // output: doit is called. 3 doit2 is called. 3
*       上面的例子中，如果将this.doit2()写成doit2(),则会在全局函数中搜索doit2.在没有语法错误时，嵌套的函数将按作用域
*       由内至外的顺序来查找名称。
*   - apply 与 call
*     在function对象中包含apply与call这两种方法，通过它们调用的函数的this引用，可以指向任意特定的对象。也就是说，
*     可以理解为它们能够显式地指定接收方对象
*       function f(){print(this.x);}
*       var obj = {x:4};
*       f.apply(obj);  // output:4  通过apply调用函数f。函数内的this引用引用了对象obj
*       f.call(obj);   // output:4  通过call调用函数f。函数内的this引用引用了对象obj
*       // 将接收方对象指定为另一个对象进行方法调用
*       var obj = {
*         x:3,
*         doit: function(){print('method is called ' + this.x);}
*       };
*       var obj2 = {x:4};
*       obj2.doit.apply(obj2); // output: method is called 4  通过apply调用obj.doit方法。方法内的this引用引用了对象obj2
*     对于Function对象f使用apply或call方法，就能够调用该函数。
*     apply和call方法的区别: 在于被调用的函数(方法)内的this引用，this引用的是作为apply或call的第一个参数被传递的对象。而
*     apply或call之间的不同之处在于两者对其他参数的传递方式。对于apply来说，剩余的参数将通过数组来传递，而call是之间按原样
*     传递形参。
*       function f(a, b){
*         print('this.x = ' + this.x + ', a = '+ a + ', b = ' + b);
*       }
*       // 作为第2个参数的数列中的元素都是函数f的参数
*       f.apply({x:4}, [1, 2]);  // output: this.x = 4, a = 1, b = 2
*       // 从第2个参数起的参数都是函数f的参数
*       f.call({x:4}, 1, 2);     // output: this.x = 4, a = 1, b = 2
*     在实际编程过程中，我们常常会为了函数回调而使用apply或call调用。
*  - 原型继承
*    // 使用原型继承的类定义
*    // 相当于定义类
*    function MyClass(x, y){
*      this.x = x;
*      this.y = y;
*    }
*    MyClass.prototype.show = function(){
*      print(this.x, this.y);
*    };
*    var obj = new MyClass(3,2);
*    obj.show(); // output: 3 2   方法调用
*    // 对原型继承的形式上的理解
*    类名.prototype.方法名 = function(方法的参数){方法体};
*  - 原型链
*    原型继承支持一种称为原型链的功能。使用原型链有两个前提:
*    - 所有的函数(对象)都具有名为prototype的属性(prototype属性所引用的对象则称为prototype对象)
*    - 所有的对象都含有一个(隐藏的)链接，用以指向在对象生成过程中所引用的构造函数(Function对象)的prototype对象
*    在ECMAScript的标准中，prototype属性被称为explicit prototype property，而隐藏的连接被称为implicit prototype link.
*    对象对属性的读取(以及对方法的调用)是按照以下顺序查找的:
*    1.对象自身的属性
*    2.隐式链接所引用的对象(即构造函数的prototype对象)的属性
*    3.第2项中的对象的隐式链接所引用的对象的属性
*    4.反复按第3项的规则查找直至全部查找完毕(查找的终点是Object.prototype对象)
*    如果不考虑原型链这一术语的话，会发现其本质其实就是对隐式链接的属性继承。由于隐式链接所引用的对象是构造函数的prototype对象，
*    因此事实上这就是在前面小节中所说的"类名.prototype.方法名"的继承方式。此外需要注意，由对象字面量生成的对象的隐式链接引用的是
*    Object.prototype
*  - 原型链的具体示例
*    function MyClass(){this.x = 'x in MyClass';}
*    var obj = new MyClass();  // 通过MyClass构造函数生成对象
*    print(obj.x);             // output：x in MyClass     访问对象obj的属性x
*    print(obj.z);             // undefined                对象obj中没有属性z
*    // Function对象具有一个隐式的prototype属性
*    MyClass.prototype.z = 'z in MyClass.prototype';       // 在构造函数prototype对象新增属性z
*    print(obj.z)              // output: z in MyClass.prototype  这里的obj.z访问的是构造函数prototype对象的属性
*    以上，在读取对象obj的属性的时候，将首先查找自身的属性。如果没有找到，则会进一步查找对象MyClass的prototype对象的属性。这就
*    是原型链的基本原理。这样一来，在通过MyClass构造函数生成的对象之间就实现了对MyClass.prototype对象的属性的共享。
*    这种共享用面相对的术语来说就是继承。通过继承可以生成具有同样执行方式的对象。
*      // 原型链的具体示例(属性写入)
*      function MyClass(){this.x = 'x in MyClass';}
*      MyClass.prototype.y = 'y in MyClass.prototype';
*      var obj = new MyClass();  // 通过MyClass构造函数来生成对象
*      print(obj.y);             // output: y in MyClass.prototype  通过原型链读取属性
*      obj.y = 'override';       // 在对象obj中新增直接属性y
*      print(obj.y);             // output: override  读取直接属性
*      var obj2 = new MyClass(); //
*      print(obj2.y);            // output: y in MyClass.prototype 在其他对象中，属性y不会发生改变
*      // 原型链的具体示例(属性删除)
*      delete obj.y;              // 删除属性y
*      print(obj.y);              // output: y in MyClass.prototype 通过直接属性不存在，因此将搜索原型链
*      delete obj.y;              // 虽然delete运算的值为true。。。
*      print(obj.y);              // output: y in MyClass.prototype 但无法delete原型链中的属性
*  - 原型继承和类
*    obj.toString();          // 检验是否可以对对象obj调用toString方法
*    obj.hasOwnProperty('toString');    // output: false 在对象obj中不存在toString方法
*    Object.prototype.hasOwnProperty('toString');  // output: true 在Object.prototype对象中存在toString方法
*    Object.hasOwnPrototype('toString');           // output: false 注意，在Object中并不存在toString方法
*  - 对于原型链的常见误解以及_proto_属性
*    - 在搜索了自身的属性之后，将会查找构造函数自身的属性
*    - 在搜索了自身的属性之后，将查找的对象的prototype对象的属性
*    原型链最终是通过"隐式链接"链接而成的。
*  - 原型对象
*    对象的隐式链接(_proto_属性)所引用的对象称为原型对象。
*    function MyClass(){}
*    var obj = new MyClass();
*    MyClass.prototype与obj._proto_引用了同一个对象，即对象obj的原型对象。不过，MyClass.prototype的引用对象并不是MyClass
*    的原型对象。MyClass的原型对象是Function.prototype所引用的对象。
*    // 获取原型对象的三种方法
*    function MyClass(){}
*    var Proto = MyClass.prototype;
*    var obj = new MyClass();      // 对象obj的原型对象是对象proto
*    var Proto = Object.getPrototypeOf(obj);  // 通过对象实例获得(ECMAScript第5版中最直接的方法)
*    var Proto = obj._proto_;  // 通过对象实例获得(使用_proto_属性注意增强功能)
*    var Proto = obj.constructor.prototype;  // 通过对象实例以及构造函数取得(无法确保总是有效)
*  - 对象与数据类型
*    - 数据类型判定(constructor属性)
*      var d = new Date();
*      d.constructor;     // output: function Date(){[native code]}  对象d的constructor属性引用了Date
*      var arr = [1,2,3];
*      arr.constructor;   // output: function Array(){[native code]} 对象arr的constructor属性引用了Array
*      var obj = {};
*      obj.constructor;   // output: function Object(){[native code]};  通过字面量生成的对象的constructor属性引用了Object
*    - constructor属性的注意点
*      constructor属性不是对象的直接属性，而是通过原型链查找到的属性。
*        function Derived(){}   // 该构造函数相当于派生类
*        function Base(){}      // 该构造函数相当于基类
*        Derived.prototype = new Base();
*        var obj = new Derived(); // 通过Derived构造函数生成obj对象
*        obj.constructor;       // output: function Base(){}
*        与obj.constructor的原型链相连接的实体是Derived.prototype.constructor.所以只需向下面这样对其进行显式地修改，
*        就可以使这类派生继承获得期望的结果:
*        Derived.prototype.constructor = Derived;
*        obj.constructor;      // output: function Derived(){}  对象obj的constructor属性引用了Derived
*    - 数据类型判断(instance运算与isPrototypeOf方法)
*        var d = new Date();   // 通过Date构造函数生成d
*        d instanceof Date;    // output: true
*        function Derived(){}  // 该构造函数相当于派生类
*        function Base(){}     // 该构造函数相当于基类
*        Derived.prototype = new Base();
*        var obj = new Derived();
*        obj instanceof Derived;  // output: true
*        obj instanceof Base;     // output: true
*        obj instanceof Object;   // output: true
*    - 数据类型判定(鸭子类型)
*      如果类和对象(实例)之间只是静态关系，只需要通过instanceof运算就能够解决所有的对象类型判断问题。
*      在JavaScript中，对象是一种动态的概念。
*      in运算是一种可以用于判断鸭子类型的方法。in运算需要在运算符左侧书写属性名字符串，在右侧指定对象的引用。如果对象拥有所指定的
*      属性，运算结果为真。对于通过原型链继承的属性，也能够通过这一方式判断。
*        var obj = {doit: function(){print('doit');}};
*        'doit' in obj;    // output: true 对象obj中含有doit属性，所以结果为真
*        'toString' in obj;  // output: true 从Object中继承了toString属性，所以结果为真
*    - 属性的枚举(原型继承的相关问题)
*      // 仅列举直接属性
*      for(var key in obj){
*        if(obj.hasOwnProperty(key)){
*          print(key);
*        }
*      }
*      keys方法和getOwnPropertyNames方法返回一个数组，它是由作为参数传递而来的对象的直接属性的名称组成的。其中，key方法
*      仅返回enumerable属性为真的属性，他得到的结果与通过for.in语句中的hasOwnProperty方法判断得到的是相同的。而
*      getOwnPropertyNames方法则是在返回属性名时无视enumerable属性。
*        var obj = {x:1, y:2};
*        Object.keys(obj); // output: ["x","y"]
*        Object.getOwnPropertyNames(obj);  // output: ["x","y"]
*        // 数组也是一种对象
*        var arr = [3,4];
*        Object.keys(arr); // output: ["0","1"]
*        Object.getOwnPropertyNames(obj);  // output: ["length","0","1"]
*        // 对Object.prototype对象的考察
*        Object.keys(Object.prototype);  // output: []
*        Object.getOwnPropertyNames(Object.prototype); // output: ["constructor","toSource","toStirng", ...]
*        // Note: 顺带提一下，对于属性的enumerable属性可以 通过propertyIsEnumerable方法来判断。
*    - EVMAScript第5版中的Object类
*      ECMAScript第5版中的Object类的create方法，是除了对字面量与new表达式之外的第三种官方的对象生成方法。它的第一个参数需要
*      一个原型对象，第二个参数需要一个属性对象。
*      如果将一个null作为原型对象传递给create方法，则会生成一个没有进行原型继承的对象
*        // 未原型继续于Object类的对象
*        var obj = Object.create(null);
*        print(Object.getPropertypeOf(obj));   // null
*        'toString' in obj;                    // false    对没有继承toString进行确认
*        // 可以通过对象字面量生成对象
*        var obj = Object.create(Object.prototype);  // 等价于 var obj = {};
*        // 通过使用Object.create方法，可以在代码中更为直观地表述原型继承。
*        function MyClass(){}
*        var Proto = {x:2, y:3};  // 原型对象
*        MyClass.prototype = Proto;
*        var obj = new MyClass();
*        // 以上四行代码等价于下面两句
*        var Proto = {x:2,y:3};   // 原型对象
*        var obj = Object.create(Proto);
*    - 属性对象
*      create方法的第二个参数是一个关联数组，其键为属性名，其值为属性描述符(属性对象)。
*      其中属性值可以通过value来指定的。大部分属性的默认值是false，可以显式地指定为true
*        var obj = {x:2,y:3};
*        // 与下面代码等价
*        var obj = Object.create(Object.prototype,
*          {x: {value:2, writable:true, enumerable:true, configurable:true},
*           y: {value:3, writable:true, enumerable:true, configurable:true}
*          });
*      - 与Object类的属性的属性有关的方法
*        defineProperty(o, p, attributes)     向对象o增加/更新具有特定信息的属性p
*        defineProperties(o, properties)      向对象o增加/更新具有特定信息的属性
*        getOwnPropertyDescriptor(o,p)        返回对象o的直接属性p的信息(值与属性)
*
*        var obj = Object.create(Object.prototype, {x:{value:2}});
*        // 除了显示指定的属性，其他的值都是false(value的默认值是undefined)
*        Object.getOwnPropertyDescriptor(obj, 'x');  // output: ({value:2, writable:false, enumerable:false, configurable:false})
*        // 新增属性y
*        Object.defineProperty(obj, 'y', {value:3, enumerable:true});
*        Object.getOwnPropertyDescriptor(obj, 'y'); // output: ({value:3,writable:false,enumerable:true,...})
*        // 新增属性z
*        Object.defineProperties(obj, {z:{value:function(){print('z called');}, enumerable:true}});
*        Object.getOwnPropertyDescriptor(obj, 'z');
*        // 确认enumerable属性(也可以通过Object.keys实现)
*        for(var key in obj){
*          print(key); // output: y z
*        }
*    - 访问器的属性
*      只要将get属性与set属性指定为相应的函数，就能够定义一个只能够通过访问器getter和setter来访问值的属性。访问器与value属性
*      是相互排斥的，也就是说，如果指定了value属性的值，访问器(同时包括set和get)就会失效；反之，如果指定了访问器(set或get中的某一个)，
*      value属性就会失效。
*      对于get属性需要指定一个具有返回值的函数，对于set属性需要指定一个能够接受一个参数并在内部变更状态的函数。
*        var obj = Object.create(Object.prototype,
*          {x:{ get:function(){print('get called');},
*               set:function(){print('set called');}
*          }
*          });
*        print(obj.x);  // 当要读取属性时，将会调用getter函数 output: get called undefined
*        // 返回getter函数的返回值（undefined）(由于上面的代码中没有return任何值，因此结果为undefined值)
*        obj.x = 1; // output: set called 1  // 在写入属性值时将调用setter函数
*        print(obj.x); // 如上所示，此处的setter函数不会对属性做任何更改
*        // 通过闭包隐藏变量
*        // 用于生成对象的函数
*        function createObject(){
*          var _x = 0;  // 变量名也可以用x，不过那样容易产生混乱，所以这里仍使用_x
*        // 返回一个定义了访问器的对象
*          return {get x(){return _x;},
*                  set x(v){ _x = v;}}
*        }
*        var obj = createObject();  // 生成对象
*        print(obj.x);  // 读取(在内部调用getter)  output:0
*        obj.x = 1;     // 改写(在内部调用setter)
*        print(obj.x);  // output: 1
*  - 标准对象
*    ECMAScript第5版中的内建对象
*    // 名称                   // 说明
*       Object                    所有对象的基类
*       (通称)全局对象              该对象的属性是全局变量或全局函数
*       String                    字符串类
*       Array                     数组类
*       Function                  函数类
*       Number                    数值类
*       Boolean                   布尔类
*       Math                      数学函数对象
*       Date                      日期类
*       RegExp                    正则表达式
*       JSON                      JSON解析器类
*       Error                     错误基类
*       EvailError                求值错误类
*       RangeError                越界错误类
*       ReferenceError            引用错误类
*       SystaxError               语法错误类
*       TypeERROR                 类型错误类
*       URIError                  URI错误类
*  - Object类
 *   Object类是JavaScript中所有的类的基类。
 *     Object.prototype.foobar = 'FOOBAR'; // 在Object.prototype对象中新增属性
 *     var d = new Date();  // 可以取任意对象，这里以date对象为例
 *     d.foobar;     // output: FOOBAR 读取foobar属性能够得到之前的值
 *     'x'.foobar;   // output: FOOBAR 对于字符串对象也能够读取foobar属性
 *     (0).foobar;   // output: FOOBAR 对于数值对象也能够读取foobar属性
 *   Object函数以及构造函数调用
 *   // 函数或构造函数            // 说明
 *      Object()                  生成Object实例
 *      Object(value)             将参数Value转换为Object对象并生成Object实例
 *      new Object()              生成Object实例
 *      new Object(value)         将参数value转换为Object对象并生成Object实例
 *   Note: 在没有特别理由的情况下，建议通过字面量来生成对象，而不要使用Object类的函数或构造函数调用。
 *   Object类的属性
 *   // 属性名                                     // 说明
 *      create(o, [properties])                      以对象o为原型并返回具有指定属性的实例
 *      defineProperty(o, attributes)                向对象o增加/更新具有特定信息的属性p
 *      defineProperties(o, properties)              向对象o增加/更新具有特定信息的属性
 *      freeze(o)
 *      getPrototypeOf(o)                            返回对象o的原型对象
 *      getOwnPropertyDescriptor(o,p)                返回对象o的直接属性p的信息(值与属性)
 *      getOwnPropertyNames(o)                       返回对象o的直接属性名组成的数值
 *      isSealed(o)
 *      isFrozen(o)
 *      isExtensible(o)
 *      keys(o)                                      返回对象o以及继承的属性名组成的数组
 *      length                                       值为1
 *      preventExtensions(o)
 *      prototype
 *      seal(o)
 *   // Object.prototype对象的属性
 *      constructor                                  Object类对象的引用
 *      hasOwnProperty(v)                            如果字符串v是实例的直接属性名，则返回真
 *      isPrototypeOf(v)                             如果对象v是实例的原型，则返回真
 *      propertyIsEnumerable(v)                      如果字符串v是水利中可枚举的属性名，则返回真
 *      toSource()                                   JavaScript的增强功能，其求值结果将返回用于生成实例的字符串
 *      toLocalString()                              将实例转换为与位置相关的字符串值。一般由开发者根据需要实现
 *      toString()                                   将实例转换为字符串值。一般由开发者根据需要实现
 *      unwatch(p)                                   JavaScript的增强功能。删除属性p的观察点
 *      valueOf()                                    将实例转换为恰当的值。如有必要，由开发者实现
 *      watch(p, handle)                             JavaScript的增强功能。对属性p设置观察点(一个会在值发生变化时被调用的函数)
 *      _defineGetter_(p, getter)                    JavaScript的增强功能。对属性p设置getter属性
 *      _defineSetter_(p, setter)                    JavaScript的增强功能。对属性p设置setter属性
 *      _lookupGetter_(p)                            JavaScript的增强功能。返回属性p的getter属性
 *      _lookupSetter_(p)                            JavaScript的增强功能。返回属性p的setter属性
 *      _noSuchMethod_                               JavaScript的增强功能。如果对对象调用了不存在的方法，该挂钩函数将会被调用
 *      _proto_
 *  - 全局对象
 *    全局对象相当于宿主对象的根对象。可以通过在最外层代码中使用this引用来访问全局变量。
 *    - 对象的兼容性
 *      在JavaScript中，可以自由滴向标准对象添加属性。
 *        if(!String.prototype.trim){
 *          String.prototype.trim = function(){
 *            return String(this).replace(/^\s+|\s+$/g, "");
 *          };
 *        }
 *    - 全局对象与全局变量
 *      // ECMAScript第5版中全局对象的属性
 *      // 属性名                                         // 说明
 *         NaN                                              表示Not a Number含义
 *         Infinity                                         表示无穷大的值
 *         undefined                                        表示undefined类型的值
 *         eval(x)                                          将参数的字符串值x作为JavaScript代码求值(执行)
 *         parseInt(str, radix)                             将字符串值str转换为基数为radix的整数值
 *         parseFloat(str)                                  将字符串值str转换为数值
 *         isNaN(num)                                       如果数值num是NaN的话则返回真
 *         isFinite(num)                                    如果数值num是三种特殊值(NaN以及正负无穷大)的话则为真，否则为假
 *         encodeURI(uri)                                   将字符串值uri编码为URI字符串值，并返回其中除了URI特殊字符以外的部分
 *         decodeURI(encodeURI)                             encodeURI函数的逆向转换
 *         encodeURIComponent(uriComponent)                 将字符串值uri编码为URI字符串值并返回
 *         decodeURIComponent(encodedURIComponent)          encodeURIComponent函数的逆向转换
 *    - Math对象
 *      Math对象提供了数学函数等功能的对象，无法对其进行构造函数调用。用java的话来说，这就相当于一个直接调用类方法的工具类。
 *      // Math对象的属性
 *         属性名                                      说明
 *         E                                          自然对数的底(2.71828)
 *         LN2                                        2的自然对数(0.693147)
 *         LN10                                       10的自然对数(2.30258)
 *         LOG2E                                      以2为底的E的对数(1.442695)
 *         LOG10E                                     以10为底的E的对数(0.4342944)
 *         PI                                         圆周率(3.1415926)
 *         SQRT1_2                                    1/2的平方根(0.7071067)
 *         SQRT2                                      2的平方根(1.4142135)
 *         abs(x)                                     x的绝对值
 *         acos(x)                                    x的arccos
 *         asin(x)                                    x的arcsin
 *         atan(x)                                    x的arctan
 *         atan2(y,x)                                 y/x的arctan(坐标x,y的弧度制角度)
 *         ceil(x)                                    大于等于x的最小整数
 *         cos(x)                                     x的cos
 *         exp(x)                                     e的x次方
 *         floor(x)                                   小于等于x的最大整数
 *         log(x)                                     x的自然对数(底为e)
 *         max([value0, [value1, value2, ...]])       参数中的最大值
 *         min([value0, [value1, value2, ...]])       参数中的最小值
 *         pox(x,y)                                   x的y次方
 *         random()                                   大于等于0小于1的随机数
 *         round(x)                                   x四舍五入后的整数
 *         sin(x)                                     x的sin
 *         sqrt(x)                                    x的平方根
 *         tan(x)                                     x的tan
 *         toSource                                   JavaScript自带的增强功能。返回字符串"Math"
 *    - Error对象
 *      // Error类的函数以及构造函数调用
 *         Error(message)                             生成一个Error实例
 *         new Error(message)                         生成一个Error实例
 *         ERROR(message, fileName, lineNumber)       JavaScript自带的增强功能。生成一个Error实例
 *         new Error(message, fileName, lineNumber)   JavaScript自带的增强功能。生成一个Error实例
 *      // Error类的属性
 *         length                                     值为1
 *         prototype                                  用于原型链
 *      // Error.prototype对象的属性
 *         constructor                                对象Error类对象的引用
 *         message                                    错误信息
 *         name                                       表示错误类型的字符串。
 *         fileName                                   JavaScript自带的增强功能。发生错误的文件名
 *         lineNumber                                 JavaScript自带的增强功能。发生错误的行号
 *         stack                                      JavaScript自带的增强功能。发生错误的调用栈
 *         toSource()                                 JavaScript自带的增强功能。其求值结果将返回生成了这一Error实例的字符串
 *         toString()                                 将Error实例转换为字符串值。
* */
