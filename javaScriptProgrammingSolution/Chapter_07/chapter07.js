/**
 * Created by as on 2017/5/26.
 */
/*
* 数据处理
*
* - 数组
* - JSON
* - 日期处理
* - 正则表达式
*
* - 数组
*   在JavaScript中，数组可以通过字面量与new表达式两种方法生成。
*   // 数组字面量生成
*   var arr = {1,2,3};
*   typeof arr;  // output: object 对数组进行typeof运算之后的结果是object
*   // 不需要确保各个元素的类型一致
*   var s = 'bar';
*   var arr = [1, 'foo', s, true, null, undefined, {x:3,y:4}];
*   print(arr);
*   在书写数组字面量时，可以省略中间的一些元素。被省略元素的值将被认为是undefined值
*   var arr = [2,,5];
*   print(arr[1]);  // output: undefined
*   - 数组元素的访问
*     可以通过括号[]运算符来访问数组元素，[]内所写的是下标的数值。下标由0开始，如果该下标没有相应的元素，则会获得undefined的值
*     var arr = [1,2,3];
*     arr[1] = arr[1]*2;  // 改写下标为2的元素的值
*     arr[10] = 10;  // 向数组arr增加新的数组元素，同时，中间跳过的没有赋值的下标将会由undefined值来替代
*   - 数组元素的枚举
*     // 枚举数组arr的所有元素的一种常用方法
*     for(var i = 0, len = arr.length; i<len; i++){
*       print(arr[i]);
*     }
*     // 虽然也可以通过for.in语句或for each..in语句进行枚举数组元素，但是不能保存枚举的顺序。
*     在ECMAScript中，JavaScript的数组长度的上限是2的32次方。
*     ECMAScript第5版有多个内部循环方法。在此将对forEach方法进行介绍。forEach方法的参数应该是一个能够被数组中的各个元素调用函数(回调函数)
*     arr.forEach(function(e){print(e);})
*     // 有三个参数被传递给了回调函数，他们分别是元素、下标值和数组对象。
*     var arr = ['zero','one','two'];
*     arr.forEach(function(e,i,a){print(i,e);});  // output:0 zero 1 one 2 two
*   - 多维数组
*   - 数组是一种对象
*     在JavaScript中，数组是一种对象。从内部来看，它是Array对象(Array类)的对象实例。因此，也可以通过new表达式来调用Array的构造函数
*     以生成数组。
*     //
*     var arr = new Array(5);  // 对于参数只有一个的情况，该参数将会成为数组的长度
*     print(arr);  //  output: ''''
*     var arr = new Array(3,4,'foo'); // 参数将会成为数组的元素
*     print(arr); // output: 3,4,foo
*     var arr = new Array('5'); // 由于不会发生隐式的数据类型转换而将该参数转换为数值类型，因此这一参数将被认为是数组中下标为0的元素
*     var arr = [];  // 通过数组字面量来生成数组对象
*     arr.constructor;  // output: function Array(){[native code]} 实际上这与通过new Array()所生成的对象没有区别
*     在通过new表达式生成数组时，根据参数数量的不同，参数的含义也不会发生改变，而这常常会引起错误。
*     // 对数组对象的方法进行调用的例子
*     var arr = ['zero', 'one', 'two'];
*     arr.join('_');  // output: "zero_one_two"对join方法进行调用
*     [2,3,4].join('_');  // output: 2_3_4  也可以直接对数组字面量进行方法调用
*     // 数组的属性
*     var arr = ['zero', 'one', 'two'];
*     for(var n in arr){ print(n); } // output: 0 1 2 下标值的枚举，即属性名的枚举
*     Object.keys(arr);  // output: 0 1 2 属性名的枚举
*     Object.getOwnPropertyNames(arr);  // output: length 0 1 2 属性名枚举(忽略enumerable属性)
*   - Array类
*     Array类是一种作为数组对象使用的类。
*     // Array类的函数以及构造函数调用
*     // 函数或是构造函数                      // 说明
*        Array([item0, item1, ...])            将参数作为元素以生成数组实例
*        new Array([item0, item1, ...]);       将参数作为元素以生成数组实例
*        Array(len);                           生成一个以参数len为长度的数组实例
*        new Array(len);                       生成一个以参数len为长度的数组实例
*     // Array类的属性
*        prototype                             用于原型链
*        length                                值为1
*        isArray(arg)                          如果参数arg是一个数组实例则返回真
*
*      - 数组对象的意义
*        sort()方法用来对数组进行排序。sort方法在调换元素时会对着艺术组进行改变，改变目标对象的方法被称为破坏性的方法。
*        破坏性的方法有：pop, push, reverse, shift, sort, splice, unshift
*        Note: 通常来说，破坏性方法很容易因其错误，所以应尽可能避免使用。
*        var arr = ['one', 'two', 'three'];
*        Object.freeze(arr);
*        arr.sort(); // output: TypeError: arr.sort() is read-only
*        - 通过数组来生成字符串（push和join方法）
*          var arr = [];
*          arr.push('<div>');
*          arr.push(Date());
*          arr.push('</div>');
*          arr.join('');
*        与join相对应的逆转换是String类的split方法
*          var str = 'Sun May 22 2011 14:15:03 GMT+0800 (JST)';
*          str.split(' ');  // 通过空格对字符串进行分割
*          str.split(/\s/);  // 通过空格(以正则表达式的形式)对字符串进行分割
*      - 数组的复制
*        数组的赋值时代入的只是其引用，实际上并没有复制数组元素。仅仅将某一个变量指向了同一个数组实体而已。
*        var arr = [2,3,4];
*        var arr2 = arr;
*        arr2[1] = 123;
*        print(arr);
*        如果要复制数组的元素，可以使用concat或slice方法
*        // concat方法
*        var arr = [2,3,4];
*        var arr2 = [].concat(arr);
*        arr2[1] = 123;
*        print(arr);
*        // slice方法
*        var arr = [2,3,4];
*        var arr2 = arr.slice(0, arr.length);  //
*        print(arr2);
*        arr2[1] = 567;
*        print(arr);
*      - 数组元素的删除
*        var arr = ['zero', 'one', 'xxx', 'two', 'three'];
*        delete arr[2];  // 如果仅仅通过delete进行删除操作，下标为2的位置将会留有空位
*        print(arr);  // zero,one,,two,three
*        arr.splice(2,1);  // 从下标为2的位置起删除1个元素
*        print(arr);  // zero,one,two,three
*      - 数组筛选处理
*        var arr = [‘zero','one','two','three','four'];
*        // map:该操作将元素字符串的长度作为新的元素并转换为数组
*        // filter: 该操作将筛选出元素中值为偶数的部分
*        arr.map(function(e){return e.length;}).filter(function(e){return e%2==0;});
*      - 迭代器(Iterator)
*        迭代器是一种专门为循环操作而设计的对象。
*        //
*        var arr = ['zero','one','two'];
*        var it = new Iterator(arr, true); // 也可以使用 it = Iterator(arr, true);
*        var it2 = new Iterator(arr, false); // 这时会输出的是键值对it2.next()
*        next方法能够从(对象)元素发集合中返回下一个所需的元素。
*        // 对Iterator对象使用for in 语句
*        var arr = ['zero','one','two'];
*        it = new Iterator(arr, true);
*        for(var k in it){ print(k); }
*        // 能够返回阶乘结果的自定义迭代器
*        // 迭代器的目标对象
*        function Factorial(max){
*          this.max = max;
*        }
*        // 自定义迭代器
*        function FactorialIterator(factorial){
*          this.max = factorial.max;
*          this.count = this.current = 1;
*        }
*        // 迭代器的实现
*        FactorialIterator.prototype.next = function(){
*          if(this.count  > this.max){
*            throw StopIteration;
*          } else{
*            return this.current *= this.count++;
*          }
*        }
*        // 将Factorial与FactorialIterator相关联
*        // _iterator属性是一种特殊的属性
*        Factorial.prototype._iterator = function(){return new FactorialIterator(this);}
*
*
*
* - JSON(JavaScript Object Notation)
*   是一种基于JavaScript的字面量表达式方式的数据格式类型。
*   eval函数可以将JSON字符串转换为JavaScript对象。
*   - JSON对象
*
* - 日期处理
*   Date类是一种用于日期处理的类。
* - 正则表达式 regular expression(省略regex)
*   DSL, Domain Specific Language 领域专用语言
*   - 正则表达式相关的术语
*     模式
*     输入字符串
*     匹配
*     查找规则被称为模式。用于查找模式的对象字符串被称为输入字符串。在输入字符串中寻找与模式相一致的字符串的过程被称为匹配。
*     // 正则表达式的元字符
*     // 元字符             // 说明
*        .                    任意一个字符
*        \s                   空白字符
*        \S                   非空白字符
*        \w                   可以构成单词的字符(包括字母、数字、下划线以及汉字)
*        \W                   不能构成单词的字符
*        \d                   数字
*        \D                   非数字
*        \b                   单词的边界
*        \B                   不是单词的边界
*        ^                    行首
*        $                    行末
*        X?                   字符X重复出现0次或1次
*        X??                  字符X重复出现0次或1次(非贪心算法：即尽可能寻找出现次数较少的情况)
*        X*                   字符X重复出现0次或更多次
*        X*?                  字符X重复出现0次或更多次(非贪心算法)
*        X+                   字符X重复出现1次或更多次
*        X+?                  字符X重复出现1次或更多次(非贪心算法)
*        X{n}                 字符X重复出现n次
*        X{n}?                字符X重复出现n次(非贪心算法)
*        X{n,}                字符X重复出现n次或更多次
*        X{n,}?               字符X重复出现n次或更多次(非贪心算法)
*        X{n,m}               字符X重复出现至少n次至多m次
*        X{n,m}?              字符X重复出现至少n次至多m次(非贪心算法)
*        X|Y                  X或者Y
*        [XYZ]                1个是X或者Y或者Z的字符
*        [^XYZ]               1个是除了X/Y/Z以外的任意字符
*        (X)                  分组
*        \数字                 对分组的引用(这里的数字是分组出现的序号)
*        (?:X)                仅分组
*        X(?=Y)               匹配X之后接着Y的情况
*        X(?|Y)               匹配X之后接着Y的情况
* */
