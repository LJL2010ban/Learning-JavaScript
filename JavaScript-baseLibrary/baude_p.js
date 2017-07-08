/**
 * Created by as on 2017/7/6.
 */
// copy from p.js
var P = (function(prototype, ownProperty, undefined) {

    function isObject(o) {
        return typeof o === 'object';
    }

    function isFunction(f) {
        return typeof f === 'function';
    }
    
    function BaseConstructor() {
        
    }

    function P(_superclass /* = Object */, definition) {
        // 如果只传一个参数，没有指定父类
        if (definition === undefined){
            definition = _superclass;
            _superclass = Object;
        }

        // C为我们要返回的子类，definition中的init为用户构造器

        function C() {
            var self = new Base;
            console.log(self.init);
            if (isFunction(self.init)) self.init.apply(self, arguments);
            return self;
        }

        function Base() { // 这个构造器是为了让C不用new就能返回实例而设计的

        }

        C.Base = Base;
        // 为了防止改动子类影响到父类，我们将父类的原型赋给一个中介者BareConstructor
        // 然后将这个中介者的实例作为子类的原型
        var _super = BaseConstructor[prototype] = _superclass[prototype];
        var proto = Base[prototype] = C[prototype] = new BaseConstructor;
        // 然后C与Bare都共享同一个原型
        // 最后修正子类的构造器指向自身
        proto.constructor = C;
        // 类方法mixin,不过def对象里面的属性与方法糅杂到原型里面去
        C.mixin = function (def) {
            Base[prototype] = C[prototype] = P(C, def)[prototype];
            return C;
        }
        // definition最后延迟到这里才起作用
        return (C.open = function (def) {
            var extensions = {};
            // definition有两种形态
            // 如果是函数，那么子类原型、父类原型、子类构造器、父类构造传进去
            // 如果是对象则直接置为extensions
            if (isFunction(def)){
                extensions = def.call(C, proto, _super, C, _superclass);
            }else if (isObject(def)){
                extensions = def;
            }
            // 最后混入子类的原型中
            if (isObject(extensions)) {
                for(var ext in extensions){
                    if (ownProperty.call(extensions, ext)){
                        proto[ext] = extensions[ext];
                    }
                }
            }
            // 确保init为一个函数
            if (!isFunction(proto.init)){
                proto.init = _superclass;
            }

            return C;
        })(definition);

        // 这里为一个自动执行函数表达式，相当于
        // C.open = function(){/*...*/};
        // C.open(definition)
        // return C;
        // 换言之，返回的子类存在3个类成员，Base, mixin, open
    }

    return P; // 暴露到到全局
})('prototype', ({}).hasOwnProperty);
