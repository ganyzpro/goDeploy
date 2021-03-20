(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(t,s,a){"use strict";a.r(s);var e=a(41),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js系统"}},[t._v("#")]),t._v(" js系统")]),t._v(" "),a("h2",{attrs:{id:"数据类型、类型检测转换、拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型、类型检测转换、拷贝"}},[t._v("#")]),t._v(" 数据类型、类型检测转换、拷贝")]),t._v(" "),a("h3",{attrs:{id:"类型检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型检测"}},[t._v("#")]),t._v(" 类型检测")]),t._v(" "),a("p",[t._v("typeof返回类型字符串，可以检测原始类型，引用类型除了函数function都是object。null返回object是bug。")]),t._v(" "),a("p",[t._v("instanceof返回布尔值，判断一个对象是不是另一个的实例，用来判断引用类型。")]),t._v(" "),a("p",[t._v("Boolean, Number和String基本包装对象。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("    var str1 = 'hello world'\n    str1 instanceof String // false\n\n    var str2 = new String('hello world')\n    str2 instanceof String // true\n")])])]),a("h3",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),a("p",[t._v("if()和== 会隐式转换，最后转为数字进行比较。== 和===，先判断类型是否相同。Object.is(a,b)判断两个值是否相等，在===的基础上修复了+0和-0（false）及NaN和NaN（true）。")]),t._v(" "),a("h3",{attrs:{id:"赋值、深浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值、深浅拷贝"}},[t._v("#")]),t._v(" 赋值、深浅拷贝")]),t._v(" "),a("p",[t._v("赋址（将一个对象类型的赋给变量）是复制变量指向的地址，基本类型的值改变也会跟着变；")]),t._v(" "),a("p",[t._v("浅拷贝拷贝了第一层，基本类型不会跟着变，引用类型还是只复制了引用地址。常用的有assign(),展开...,数组的slice()等。")]),t._v(" "),a("p",[t._v("单=的意思是创建或修改变量在内存中的指向。参数传值，传引用类型时是将形参指向实参相同的地址。")]),t._v(" "),a("h2",{attrs:{id:"执行上下文、闭包、this指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文、闭包、this指向"}},[t._v("#")]),t._v(" 执行上下文、闭包、this指向")]),t._v(" "),a("h3",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("p",[t._v("js里的可执行代码无非就是全局代码，函数代码，eval代码。主要关注函数代码。")]),t._v(" "),a("p",[t._v("函数作用域为词法作用域（静态作用域），词法作用域就是定义在词法阶段的作用域，是由写代码时将变量和块作用域写在哪里来决定的。查找变量按函数定义的位置通过作用域链查找。")]),t._v(" "),a("p",[t._v("执行一个函数的时候会先进行准备工作，创建执行上下文，然后才执行。")]),t._v(" "),a("p",[t._v("执行上下文存储在执行栈中，后进先出。首先全局执行上下文被压入执行上下文栈中，初始化一个全局执行上下文栈。所有的函数执行上下文都包在全局执行上下文中，不同函数的调用会不断的压栈弹栈。当一个函数中又调用了另外的函数，则继续压栈，以此类推。")]),t._v(" "),a("p",[t._v("函数内有一个scope属性，用于保存所有的父变量对象。当前函数激活时将自己的活动变量对象添加到scope作用域链的前端，形成完整作用域链。每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。查找变量会一直沿着作用域链往上层查找，直到全局作用域。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("    checkscopeContext = {\n            AO: {\n                arguments: {\n                    length: 0\n                },\n                scope: undefined,\n                f: reference to function f(){}\n            },\n            Scope: [AO, globalContext.VO],\n            this: undefined\n        }\n        \n    //VO变量对象全局，AO活动对象函数上下文。\n")])])]),a("p",[t._v("变量对象（存储了上下文中定义的函数和变量声明）>执行上下文>执行栈>执行")]),t._v(" "),a("p",[t._v("AO + scope + this > 执行上下文")]),t._v(" "),a("h3",{attrs:{id:"变量、函数提升。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量、函数提升。"}},[t._v("#")]),t._v(" 变量、函数提升。")]),t._v(" "),a("p",[t._v("变量只是声明提升，值是undefine。函数提升整个提升，有多个同名函数声明时后面的会覆盖。函数会全部提升上去，变量提升声明后执行到赋值操作会重新赋值。function定义函数和var func = function(){}表达式定义是不同的。")]),t._v(" "),a("h3",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("p",[t._v("闭包是一个函数，可以访问另外一个函数作用域中的变量的函数。MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。")]),t._v(" "),a("p",[t._v("自由变量，既不是参数也不是函数内的局部变量。正常来说一个普通函数内定义的局部变量，在函数执行完之后就会被内存回收，但是通过闭包的方式不会还可以获取到他的值。")]),t._v(" "),a("p",[t._v("通常我们说的闭包即一个函数作为父函数的返回值，这个函数引用了父函数作用域中的变量。")]),t._v(" "),a("h3",{attrs:{id:"this-动态-执行时确定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-动态-执行时确定"}},[t._v("#")]),t._v(" this（动态，执行时确定）")]),t._v(" "),a("p",[t._v("全局上下文和直接调用函数（函数表达式赋值再调用），window/undefined")]),t._v(" "),a("p",[t._v("dom事件绑定中指向dom")]),t._v(" "),a("p",[t._v("对象.方法，指向对象")]),t._v(" "),a("p",[t._v("new构造函数，指向实例对象")]),t._v(" "),a("p",[t._v("箭头函数的 this 始终指向函数定义时的 this，而非执行时。箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this为 window。")]),t._v(" "),a("h2",{attrs:{id:"原型链、继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链、继承"}},[t._v("#")]),t._v(" 原型链、继承")]),t._v(" "),a("p",[t._v("通过_proto_实现原型链继承。")]),t._v(" "),a("p",[t._v("每个对象拥有一个原型对象，通过 __proto__指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向null。这种关系被称为原型链 (prototype chain)，通过原型链一个对象会拥有定义在其他对象中的属性和方法。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("    Person.prototype.constructor === Person\n    //原型对象有一个constructor属性，定义了一个构造函数，原型对象创建对象时调用这个构造函数.\n\n    Person.prototype.constructor === person.constructor  //true\n    //当获取person.constructor时，其实person中并没有constructor属性,当不能读取到constructor属性时，会从 person 的原型也就是Person.prototype中读取，正好原型中有该属性\n")])])]),a("h2",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("宏任务和微任务。")]),t._v(" "),a("p",[t._v("宏任务包括setTimeout等延时任务。微任务有promise.then()等。")]),t._v(" "),a("p",[t._v("先执行宏任务，再执行宏任务里的微任务。")]),t._v(" "),a("p",[t._v("async函数遇到await时，会直接执行后面的表达式，然后把函数内后面部分的代码加入微任务")]),t._v(" "),a("h2",{attrs:{id:"v8、内存机制、gc回收机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8、内存机制、gc回收机制"}},[t._v("#")]),t._v(" V8、内存机制、GC回收机制")]),t._v(" "),a("p",[t._v("栈，堆。\n内存回收（标记清除）。局部作用域的变量，函数执行完后就被回收了。闭包还可以通过作用域链访问到。")]),t._v(" "),a("p",[t._v("编译器 编译得到二进制文件机器码")]),t._v(" "),a("p",[t._v("解释器 将ast转成字节码")]),t._v(" "),a("p",[t._v("v8既有解释器也有编译器，两者结合，即时编译。")]),t._v(" "),a("h2",{attrs:{id:"dom事件-事件捕获冒泡委托等"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom事件-事件捕获冒泡委托等"}},[t._v("#")]),t._v(" DOM事件，事件捕获冒泡委托等")]),t._v(" "),a("p",[t._v("域名dns解析得到ip，请求服务器时涉及缓存。\n协商缓存last-modified")]),t._v(" "),a("p",[t._v("强制缓存cache-control。")]),t._v(" "),a("p",[t._v("小js，图片缓存在memory内存，css，大文件在dist磁盘。请求html后，解析css先引入，js放在尾部。js串行。得到文件后渲染涉及重绘和重排。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("    querySelector():            // 获取指定节点的第一个\n    querySelectorAll():         // 获取符合条件的节点，返回数组\n")])])]),a("p",[t._v("所谓事件冒泡就是事件像泡泡一样从最开始生成的地方一层一层往上冒，直至最外层的html或document。\n事件捕获和事件冒泡相反，事件捕获是自上而下执行，我们只需要将addEventListener的第三个参数改为true就行。")]),t._v(" "),a("p",[t._v("事件委托，通俗的说就是将元素的事件委托给它的父级或者更外级的元素处理，它的实现机制就是事件冒泡。")]),t._v(" "),a("h2",{attrs:{id:"异步编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[t._v("#")]),t._v(" 异步编程")]),t._v(" "),a("p",[t._v("setTimeout延时函数")]),t._v(" "),a("p",[t._v("callback，通过往函数最后一个参数传入回调函数的方式。嵌套问题。")]),t._v(" "),a("p",[t._v("promise，链式调用。")]),t._v(" "),a("p",[t._v("async返回promise。")]),t._v(" "),a("h2",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),a("p",[t._v("在前端工程化开发中，有各种模块的import、export，webpack模块打包工具根据依赖关系将模块打包成相应的bundle。一般涉及babel将ES6转为ES5，生成依赖图谱（一个对象），最后打包生成浏览器可执行的一个js文件。")])])}),[],!1,null,null,null);s.default=r.exports}}]);