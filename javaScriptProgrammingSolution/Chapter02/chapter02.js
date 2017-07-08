/**
 * Created by as on 2017/5/20.
 */
/*
* JavaScript基础
*
* print函数
* - JavaScript的核心语言中并不包含print函数，但是本书的代码范例中，将会使用到print。
*   在浏览器中运行相关代码，可以改写alert或document.write; 如果是FireBug或Node.js, 请改写console.log
* */

// 浏览器
var print = alert;
// ||
var print = document.write;
// ||
var print = console.log;

/*
* 变量的基础
* - 声明但未进行任何赋值的变量，其值为undefined。
*
* 函数
* - 如果只对函数进行了声明，其中的代码并不会执行。只有再掉用函数时才会执行函数内部的代码。
* - 匿名函数
*   匿名函数是一种表达式而非语句，所以也可以在表达式内使用；另外由于它是表达式因此也会有返回值。
*   匿名函数的返回值是一个Function对象的引用。
* - JavaScript中函数也是一种对象。
*   正如变量存在的意义是为了调用没有名称的对象，函数名存在的意义是为了调用没有名称的函数。
*   因此，函数名和变量实质上是相同的。
*
* 对象的基础
* - 特点
*   其一，JavaScript对象的属性可以由函数指定
*   其二，JavaScript具备一种称为原型链的构造。通过这一构造，JavaScript对象实现了类似于类的继承的能力。
* - 对象的字面量表达式和对象的使用
*   可以通过对象字面量表达式生成一个对象。对象字面量表达式由大括号{}括起，内部有属性名和属性值。
*     {属性名 : 属性值，属性名 : 属性值，......}
*     属性名: 可以是标识符，字符串值或数值。属性值: 可以使任意的值或对象。
*   Note: 尽可能避免在对象字面量的最后以逗号结尾。
* - 属性访问
*   可以通过点运算符(.)访问对象引用中的属性。如果属性的值是一个对象，可以通过多次点运算来读取其属性。
*   - 属性访问(括号方式)
*     除了点运算符之外，还可以使用中括号运算符[]来访问属性.[]内是需要访问的属性名的字符串值。
* - 方法
*   可以把任意类型的值、对象或者函数赋值给对象的属性。
*     obj.fn = function(a,b){return Number(a)+Number(b);};
* - new表达式
*   JavaScript中new表达式的作用是生成一个对象。
* - 有关“类”
*   类的功能
*     函数或是构造函数的调用
*     类的属性                -    相当于java中的static方法或是static域
*     prototype对象的属性      -    相当于java中的实例方法
*     实例属性                -    相当于java中的实例域
*   prototype对象的属性和实例属性，都是以对象实例的形式来进行访问的。
*   prototype对象的属性与实例属性之间的不通电在于是否进行了继承。如，String对象的trim方法，其实是String.prototype
*   对象的属性。这种以实例来继承属性的方式被称为原型继承。
* - 数组基础
*   - 数组是一种用于表达有顺序关系的值的集合的语言结构。在JavaScript中，数组并非是一种內建类型。相对的JavaScript
*     支持Array类，所以数组能够以Array类的实例的形式实现。不过，由于有数组字面量的表达方式，所以在一般情况下，只需
*     将其作为內建类型使用即可。
* */
print(1);
// 声明函数
function f() {
    print(2);
}
print(3);
f();// 调用函数

/* 函数声明中所写的参数称为形参；函数声明时不必指定形参的类型。任何类型的值都可以作为实参传递，因而开发者
*  在设计函数时需要考虑接收错误类型的值的情况。此外形参的数量和实参的数量可以不一致。
* */
function sum(a, b) {
    return Number(a) + Number(b);
};
// 匿名函数表达式
var sum2 = function (a,b) {
    return Number(a) + Number(b);
}
// 对象字面量表达式与赋值表达式
var obj = {x:3, y:4}; // 所生成对象的引用将被赋值给变量obj
typeof obj; // 通过typeof运算符来判别obj的类型，得到的结果是object
print(obj.x);
var obj2 = {pos:{x:3,y:4}}; // 属性的值是一个对象
print(obj2.pos.x); // 通过多次点运算来读取属性
obj2.pos.x = 33; // 给该属性赋值
obj2.pos.z = 5; // 创建新的属性并对其赋值
obj2['pos']['x']; // output=3
obj.fn = function (a,b) {
    return Number(a) + Number(b);
};// 将函数赋值给obj的属性
obj['fn'](3,4); // 调用fn方法
var obj3 = new Object();
typeof obj3; // 通过typeof运算符来判别obj的类型
var arr = [1, 2, 3, 7];//