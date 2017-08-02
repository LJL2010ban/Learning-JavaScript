/**
 * Created by as on 2017/7/30.
 */
/**
 * 每当一个指令被创建的时候，都会有这样一个选择，是继承自己的父作用域
 * （一般是外部的Controller提供的作用域或者根作用域($rootScope),
 * 还是创建一个新的自己的作用域）
 *
 * 当然Angularjs为我们执行的scope参数提供了三种选择，分别是:false, true, {}
 * 默认情况下是false
 */

angular.module("MyApp", [])
    .controller('MyController', function ($scope) {
        //j1 在作用于立初始化两个变量
        $scope.name = "Baude";
        $scope.age = 20;
        //j2 创建一个方法，修改我们创建的对象的年龄
        $scope.changeAge = function () {
            $scope.age = 22;
        }
    })
    .directive('myDirective', function () {
        /**
         * 在这里将scope属性设置为false，所以我们的创建的指令继承了父作用域
         * 这也使得在指令的模板中我们可以使用这些属性和方法
         *
         * Result：
         *   在输入框里改变名字，会发现上面的两个名字都会发生变化
         */

        var obj = {
            //j4 指令的声明模式为 "AE" 属性和元素
            restrict: "AE",
            //j5 指令继承父作用域的属性和方法
            /**
             * 关于scope中的特殊字符
             * @ - 这使一个单项绑定的前缀标识符
             *    在元素中使用属性，好比这样<div my-directive my-name="{{name}}"></div>,
             *    注意：属性的名字要用 - 将两个单词链接，因为是数据的单向绑定所以要通过使用{{}}来绑定数据
             *
             * = - 这是一个双向数据绑定前缀标识符
             *     在元素中使用属性，好比这样<div my-directive age="age"></div>
             *     注意：数据的双向绑定要通过 = 前缀标识符实现，所以不可以使用{{}}
             *
             * & - 这是一个绑定函数方法的前缀标识符
             *     在元素中使用属性，好比这样<div my-directive change-my-age="changeAge()"></div>
             *     注意：属性的名字要用 - 将多个个单词链接
             *
             *  注意：
             *    在新创建指令的作用域对象中，使用属性的名字进行绑定时，要使用驼峰命名标准
             */

            scope: {
                name: '@myName',
                age: '=',
                changeAge: '&changeMyAge'
            },/*修改为true*/
            /*将scope设置为{}时，意味着我们创建一个新的与父作用域隔离的新的作用域；
            * 这使我们在不知道外部环境的情况下，就可以正常工作，不依赖外部环境*/
            replace: true,
            template: "<div class='my-directive'>" +
                "<h3>下面部分是我们创建的指令生成的</h3>" +
                "我的名字是：<span ng-bind='name'></span><br />" +
                "我的年龄是：<span ng-bind='age'></span><br />" +
                "在这里修改你的名字：<input type='text' ng-model='name' />" +
                "<button ng-click='changeAge()'>修改年龄</button> " +
                "</div>"
        };
        return obj;
    })

