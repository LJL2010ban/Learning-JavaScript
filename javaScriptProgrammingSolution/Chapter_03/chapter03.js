/**
 * Created by as on 2017/5/21.
 */
/*
* JavaScript数据类型
* - 数据类型的定义
*     字符串型
*     数值型
*     布尔型
*     null型
*     undefined型
*   这五种类型之外的都是被称为Object类型。
*   基本数据类型的实例被称为“值”，Object类型的实例被称为“对象”。
*  - 在JavaScript中，值和对象具有数据类型，而变量没有数据类型。在JavaScript中，并不存在变量类型的概念。
*
* - 字符串型
*   字符串值可以通过字符串字面量来表示。字符串字面量需要用双引号(")或单引号(')括起来。
*   特殊字符可以通过转义字符(串)来表示。可以通过在转义符之后使用特定字符，来表达一些特殊的含义。
*   转义字符：
*   \n           换行(LF)
*   \t           tab(水平制表符)
*   \b           退格
*   \r           换行(CR)
*   \f           换页
*   \v           垂直制表符
*   \\           反斜杠
*   \'           单引号
*   \"           双引号
*   \xXX         以十六进制代码XX表示的一个字符(X是0到9的数字或a到f的字母)。如，\x41表示“A”。
*   \uXXXX       以十六进制代码XXXX表示的一个Unicade字符(X是0到9的数字或a到f的字母)。如，\u03a3表示希腊字符Σ
* - 字符串型的运算
*   Note: JavaScript中，字符串是不可变类型。
* - 字符串的比较
*   JavaScript有两种等值运算符，即===和==。两种不等运算符，!== 和 !=
*   ===和==区别在于，在比较的时候是否会进行数据类型的转换。===在比较的时候不会对数据类型进行转换。在ECMAScript中，将
*   其称为严格相等(strict equal).
* - 字符串类(String类)
*   字符串型是一种內建类型。JavaScript除了內建类型的字符串之外还存在一个字符串类。字符串类的名称为String。字符串型和String类
*   之间也同样支持隐式类型转换。
* - 字符串对象
*   可以使用new运算符，来显示地生成一个字符串对象。
*     var sobj = new String('abc'); // 字符串能够被隐式转换为字符串对象，所以实际中几乎不使用new来生成字符串对象。
*   字符串和字符串对象之间可以进行隐式类型转换，、。因此，一般来说并不需要在意值和对象之间的区别。不过正因看起来非常相似，
*   所以会存在一些陷阱。如，在判定两者是否相等上是有差异的。对象的相等运算，判断的是两者是否引用了同一个对象(而非两者的内容是否相同)。
*     sobj1 + '' == sobj2 + '';
*   如上，对于字符串值和字符串对象的等值判断，如果使用的是会进行隐式数据类型转换的==运算，则只会判定其内容是否相等，如果内容相同
*   则结果为真。
* - 避免混用字符串值和字符串对象
*   在必要的时候，使用typeof运算来判断一个字符串是字符串值还是字符串对象。
* - 调用String函数
*   通过new运算符调用字符串(这种做法称为构造函数调用)容易引起混淆。事实上，仅通过调用String函数就可以生成字符串值。
*   一般来说，使用String函数是为了进行显示的数据类型转换。
* - String类的功能
*   String([value]) - 将参数value转换为字符串值类型
*   new String([value]) - 生成String类的实例
*   - String类属性
*     fromCharCode([char0[, char1, ...]]) - 将参数value转换为字符串值类型
*     length - 值为1
*     prototype - 用于原型链
*   - String.prototype对象所具有的属性
*     charAt(pos) - 返回下标pos位置字符的长度为1的字符串值。下标从0开始，如果超过了下标范围返回空字符串值。
*     charCodeAt(pos) - 返回下标pos位置字符的字符编码。如果超过了下标的范围，则返回NaN。
*     concat([string0, string1, ...]) - 和参数字符串值相连接之后返回新的字符串值。
*     constructor - 引用一个String类对象
*     indexOf(searchString[, pos]) - 返回在字符串中第一个遇到的字符串值searchString的下标值。
*     localCompare(that) - 比较和本地运行环境相关的字符串。根据比较的结果分别返回正数、0或负数。
*     match(regexp) - 返回匹配正则表达式regexp的结果
*     quote() - JavaScript自定义的增强功能。在字符串外加上双引号之后返回这一新的字符串值。
*     replace(searchValue, replaceValue) - 将searchValue(正则表达式或者字符串值)替换为replaceValue(字符串或者函数)后，返回经过替换后的字符串
*     search(regexp) - 返回匹配正则表达式regexp的位置的下标
*     slice(start, end) - 将参数start开始至end结束的字符串部分作为新的字符串值返回。如果start和end是负数，则返回从末尾逆向起数的下标值
*     split(separator, limit) - 根据字符串或是正则表达式形式的参数separator将字符串分割，返回相应的字符串值数组
*     substr(start, length) - JavaScript自定义的增强功能。返回从参数start开始长度为length的新字符串值。如果start是负数，则从末尾逆向起数
*     substring(start,end) - 将参数start开始至end结束的字符串部分作为新的字符串值返回。其作用和slice相同，但是不支持负数作为参数
*     toLocalLowerCase() - 将字符串中的所有字符转换为和本地环境相应的小写字符
*     toLocalUpperCase() - 将字符串中的所有字符转换为和本地环境相应的大写字符
*     toLowerCase() - 将字符串中的所有字符转换为小写字符
*     toSource() - JavaScript自定义的增强功能。返回用于生成String实例的字符串(即源代码)
*     toString() - 将String实例转换为字符串值(并返回)
*     toUpperCase() - 将字符串中的所有字符转换为答谢字符
*     trim() - 去除字符串前后的空白符
*     trimLeft() - JavaScript自定义的增强功能。去除字符串左侧(头部)的空白符
*     trimRight() - JavaScript自定义的增强功能。去除字符串右侧(尾部)的空白符
*     valueOf() - 将String实例转换为字符串值并返回。
* - 数值型
*   JavaScript中，数值的内部结构为64位的浮点小数。
*   JavaScript也支持8进制的数值字面量，但是ECMAScript标准不支持。
*   - 数值型的运算
*     + - * 、 %(求模运算，即计算除法运算后的余数)
*     对于浮点数来说，要执行正确的实数运算时不可能的。
*   - 数值类(Number类)
*     与String类类似
*   - 调用Number函数
*     如果参数无法被转换成为数值类型，则Number函数返回的结果将是NaN。
*   - Number类的功能
*     - Number类属性
*       prototype - 用于原型链
*       length - 值为1
*       MAX_VALUE - 64位浮点小数所支持的正数最大值
*       MIN_VALUE - 64位浮点小数所支持的正数最小值
*       NaN - 含义为Not a Number的值
*       NEGATIVE_INFINITY - 表示负无穷大的值
*       POSITIVE_INFINITY - 表示正无穷大的值
*     - Number.prototype对象的属性
*       constructor - 引用一个Number对象
*       toExponential(fractionDigits) - 转换为指数形式的字符串值。fractionDigits为小数点位数
*       toFixed(fractionDigits) - 转换为小数点形式的字符串值。fractionDigits为小数点位数
*       toLocalString() - 转换为和本地环境相对应的字符串值
*       toPrecision(precision) - 转换为小数点形式的字符串值。precision为有效数字
*       toSource() - JavaScript自定义的增强功能。返回用于生成String实例的字符串（即源代码）
*       toString([radix]) - 将Number实例转换为字符串值。参数radix为其基数
*       valueOf() - 将Number实例转换为数值
*   - 边界值与特殊数值
*     Number.MAX_VALUE
*     Numerb.MIN_VALUE
*     -Number.MAX_VALUE
*     Number.POSITIVE_INFINITY - 正无穷大
*     Number.NEGATIVE_INFINITY - 负无穷大
*     Number.NaN               - Not a Number
*   - NaN
*     对NaN进行任何运算，其结果都是NaN。如，NaN+1 ...
*     对于值为NaN的数值是无法进行判断的。不过JavaScript中预定义了一个全局函数isNaN.isNaN函数的返回值为真的条件是其参数的值为NaN。
*     而预定义全局函数isFinite可以对3个特殊数值(即NaN与正负无穷大)之外的数值进行判断。
* - 布尔型
*   也被称为逻辑值类型或者真假值类型。
*   - 布尔类(Boolean类)
*     是一种布尔型的包装类型。
*     var t = new Boolean(true);
* - null型
*   null值的意义存在于对象引用中。null最初的含义为“没有引用任何对象”。
* - undefined型
* - Object类型
* - 数据类型转换
*   - 从字符串值转换为数值
*     Number函数、parseInt函数、parseFloat函数。Number函数对于'100x'这样的包含非数字的字符串值，会返回NaN。而parseInt和
*     parseFloat则会忽略非数字字符。
*   - 从数值转换成字符串
*     通常的做法是使用String函数，或是在对数值对象进行了隐式数据类型转换之后，在对其调用toString方法。
*   - 数据类型转换的惯用方法
*     从数值转换成字符串：var n = 3; n + '';// 将数值3转换为字符串'3'
*     从字符串值转换为数值：var s = '3'; +s;// 将字符串'3'转换为数值3
*   - 转换为布尔型
*     在实际编程中，从其他类型向布尔型的数据类型转换时很重要的。在if语句或是while语句等的条件表达式中，会有很多专业的隐式数据类型转换，
*     会有很多专业的隐式数据类型转换。除此之外的值都将被转换为true。
*     数值0
*     数值NaN
*     null值
*     undefined值
*     字符串值"(空字符串值)
*   - 从Object类型转换为基本数据类型
*     字符串型 - String(obj) 将toString()方法转换为字符串型
*     数值型   - Number(obj) 即valueOf方法的结果。如果valueOf方法的结果无法被转换为数值型，则改将toString方法的结果转换为数值型
*     布尔型   - Boolean(obj) 总是true
*     undefined值 - NaN 'undefined'
*   - 从基本数据类型转换为Object类型
*     字符串型 - String对象
*     数值型   - Number对象
*     布尔型   - Boolean对象
*     null型  - Error对象
*     undefined型 - Error对象
*
* */

// 因为字符串值是不可变的，所以上面运算生成的不同于'123'和'456'的新的字符串值'123456'.
var s = '123';
var s1 = s;
s += '456'; // 变量s的值为字符串值'123456'
print(s1); // 变量s2的值仍保持为字符串值'123'
// 字符串对象
var sobj1 = new String('abc');
var sobj2 = new String('abc');
sobj1 == sobj2; // 虽然字符串内容相同，但是并非以农历同一个对象，所以结果是false。
sobj1 === sobj2; // 虽然字符串的内容相同，但是并非引用了同一个对象，结果是false。
// 上面两个字符串对象(sobj1和sobj2),在通过+与空字符串值连接之后，就会进行隐式数据类型转换而变为字符串值，从而结果也将发生变化。
sobj1 + '' == sobj2 + ''; // output = true
sobj1 + '' === sobj2 + ''; // output = true

var s = String('abc');
typeof  s;// output string