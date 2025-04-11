# JavaScript与C语言对比解析

## 一、基础语法对比表

|**特性**|**C 语言**|**JavaScript**|
|---|---|---|
|编译方式|编译型（预编译后执行）|解释型（即时编译）|
|变量类型|静态类型（需声明类型）|动态类型（自动推断）|
|内存管理|手动管理（malloc/free）|自动垃圾回收|
|代码入口|main 函数|从脚本顶部开始执行|
|代码结束符|必须使用 `;`|`;` 可选（推荐显式添加）|

---
## 二、核心语法对比详解

1. 变量声明
   ```C
   // C 语言
    int num = 10; // 整型
    char str[] = "Hello"; // 字符数组
    float pi = 3.14; // 浮点型
    ```

    ```Javascript
    // JavaScript
    let num = 10; // 数字类型
    const PI = 3.14; // 常量
    var str = "Hello"; // 字符串（旧式声明）
    let flag = true; // 布尔类型
    ```

    **关键差异**：

   + JS 使用 let/const 代替 var（ES6+最佳实践）
    + 无需指定类型，自动根据赋值推断
2. 控制结构
   ```C
   // C 语言
    if (x > 5) {
    printf("x is large");
    } else {
    printf("x is small");
    }

    for (int i=0; i<5; i++) {
    printf("%d", i);
    }
    ```

    ```javascript
    // JavaScript
    if (x > 5) {
    console.log("x is large");
    } else {
    console.log("x is small");
    }

    for (let i=0; i<5; i++) {
    console.log(i);
    }

    // 特有语法：for-of 循环
    const arr = [1,2,3];
    for (const num of arr) {
    console.log(num);
    }
    ```

    **相似点**：if/else、for、while 结构语法相同

    **新增特性**：for-of 循环、forEach 数组遍历

3. 函数定义
    ```C
    // C 语言
    int add(int a, int b) {
    return a + b;
    }
    ```
    ```javascript
    // JavaScript
    // 方式1：函数声明
    function add(a, b) {
    return a + b;
    }

    // 方式2：箭头函数（ES6+）
    const add = (a, b) => a + b;

    // 方式3：匿名函数
    const add = function(a, b){
    return a + b;
    };
    ```
