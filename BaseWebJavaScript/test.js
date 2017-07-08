/**
 * Created by as on 2017/4/24.
 */
// Create class
var Person = function(name){
    this.name = name;
};

// 实例化一个Person对象
var alice = new Person('alice');
/*
* 构造函数调用时不要丢掉new关键字
* 当使用new关键字来调用构造函数时，执行上下文从全局对象（Window）变成一个空的上下文
* 这个上下文代表了新生成的实例。因此，this关键字指向当前创建的实例
* */

// 检查这个实例
assert( alice instanceof Person );

// 创建自己的类模拟库
var Class = function () {
    var klass = function () {
        this.init.apply(this, arguments);
    };
    klass.prototype.init = function () {};
    return klass;
};

var Person = new Class;

Person.prototype.init = function () {
    // 基于Person的实例做初始化
};

// 用法
 var person = new Person;

 /*给类添加函数*/

 // 在构造函数中给类添加函数和给对象添加属性是一模一样的
 Person.find = function (id) {
     /*...*/
 };

 var person = Person.find(1);

 // 给构造函数添加实例函数，则需要用到构造函数的prototype
 Person.prototype.breath = function () {/*...*/};

 var person = new Person;
 person.breath();

 // 一种常用的模式是给雷的prototype起一个别名fn
 Person.fn = Person.prototype;
 Person.fn.run = function () {/*...*/};
 /*实际上这种模式在jQuery的插件开发中是很常见的，将函数添加至jQuery.fn中也就相当于添加到jQuery的原型中*/

 /*
 *给‘类’库添加方法 class liberary
 *包含生成一个实例并初始化这个实例的功能，给类添加属性和给构造函数添加属性是一样的
 * */

// 直接给类设置属性和设置其静态成员是等价的
var Person = new Class;
// 直接给类添加静态方法
Person.find = function (id) {/*...*/};
// 这样我们可以直接调用他们
var person = Person.find(1);

// 给类的原型设置的属性在类的实例中也是可用的
var Person = new Class;
// 在原型中定义函数
Person.prototype.save = function () {/*...*/};
// 这样就可以在实例中调用他们
var person = new Person;
person.save();

var Class = function () {
    var klass = function () {
        this.init.apply(this, arguments);
    };
    klass.prototype.init = function () {};

    // 定义prototype的别名
    klass.fn = klass.prototype;

    // 定义类的别名
    klass.fn.parent = klass;

    // 给类添加属性
    klass.extend = function (obj) {
      var extended = obj.extended;
      for (var i in obj){
          klass[i] = obj[i];// -*v*-
      }
      if (extended) extended(klass)
    };

    // 给实例添加属性
    klass.include = function (obj) {
      var included = obj.included;
      for(var i in obj){
          klass.fn[i] = obj[i];// -*v*-
      }
      if (included) included(klass)
    };

    return klass;
};

// 使用extend()函数来生成一个类，这个函数的参数是一个对象.通过迭代将对象的属性直接复制到类上
var Person = new Class;

Person.extend({
    find:   function (id) {/*...*/},
    exists: function (id) {/*...*/}
});

var person = Person.find(1);

// include()函数的工作原理也是一样，只不过不是将属性复制到类中，而是复制至类的原型中。
// 换句话说，这里的属性是类实例的属性，而不是类的静态属性。
var Person = new Class;

Person.include({
    save:   function (id) {/*...*/},
    destroy:function (id) {/*...*/}
});

var person = new Person;
person.save();

// 同样滴，这里的实现支持extended和included回调。将属性传入对象后就会触发这两个回调
Person.extend({
    extended: function (klass) {
        console.log(klass, " was extended!");
    }
});

