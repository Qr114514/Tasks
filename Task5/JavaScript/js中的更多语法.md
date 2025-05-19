# JavaScript 中的更多语法
## 正则表达式
### 正则表达式简介
正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

搜索模式可用于文本搜索和文本替换。

**比如**在写用户注册表单时，只允许用户名包含字符、数字、下划线和连接字符 -，并设置用户名的长度，我们就可以使用以下正则表达式来设定。

```javascript
/^[a-zA-Z0-9_-]{3,16}$/;
```



### 正则表达式语法

```javascript
// 两种创建方式
const regex1 = /pattern/flags; // 字面量形式（推荐）
const regex2 = new RegExp('pattern', 'flags');
```

#### 字符匹配

+ 普通字符：普通字符按照字面意义进行匹配，例如匹配字母 "a" 将匹配到文本中的 "a" 字符。
  
+ 元字符：元字符具有特殊的含义，例如 \d 匹配任意数字字符，\w 匹配任意字母数字字符，. 匹配任意字符（除了换行符）等。

+ 量词  
*：匹配前面的模式零次或多次。  
+：匹配前面的模式一次或多次。  
?：匹配前面的模式零次或一次。  
{n}：匹配前面的模式恰好 n 次。  
{n,}：匹配前面的模式至少 n 次。  
{n,m}：匹配前面的模式至少 n 次且不超过 m 次。  

+ 字符类  
[ ]：匹配括号内的任意一个字符。例如，[abc] 匹配字符 "a"、"b" 或 "c"。  
[^ ]：匹配除了括号内的字符以外的任意一个字符。例如，[^abc] 匹配除了字符 "a"、"b" 或 "c" 以外的任意字符。  

+ 边界匹配  
^：匹配字符串的开头。  
$：匹配字符串的结尾。  
\b：匹配单词边界。  
\B：匹配非单词边界。  

### 常用标志

+ i：忽略大小写。
+ g：全局匹配。
+ m：多行匹配。

### 正则表达式方法
正则表达式对象提供了一些方法来执行匹配操作。

+ test()：测试字符串是否匹配正则表达式，如果匹配返回 true，否则返回 false。
+ exec()：执行正则表达式匹配，并返回匹配结果。
+ match()：在字符串中执行正则表达式匹配，并返回匹配结果。
+ replace()：使用指定的替换文本替换字符串中匹配的部分。
+ split()：将字符串分割成子字符串数组。

### 实际应用
```javascript
// 邮箱验证
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
console.log(emailRegex.test("user@example.com")); // true

// 提取日期
const dateStr = "2023-10-01";
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const [full, year, month, day] = dateStr.match(dateRegex);
console.log(year, month, day); // "2023" "10" "01"

// 替换敏感词
const text = "bad word1 and bad word2";
const censored = text.replace(/bad/g, "***");
console.log(censored); // "*** word1 and *** word2"
```

## 错误处理

### 错误对象
JavaScript 中的错误对象用于表示程序运行时发生的错误。

+ Error：所有错误的基类。
+ SyntaxError：语法错误。
+ ReferenceError：引用错误。
+ TypeError：类型错误。
+ RangeError：范围错误。

### try...catch...finally
try...catch...finally 语句用于捕获和处理 JavaScript 中的错误。

```javascript
try {
// 可能出错的代码
JSON.parse("{ invalid JSON }");
} catch (err) {
console.error("解析失败:", err.message); // 捕获错误
} finally {
console.log("无论是否出错都会执行");
}
```

> 分析一下使用try ... catch ... finally的执行流程。  

>当代码块被try { ... }包裹的时候，就表示这部分代码执行过程中可能会发生错误，一旦发生错误，就不再继续执行后续代码，转而跳到catch块。catch (e) { ... }包裹的代码就是错误处理代码，变量e表示捕获到的错误。最后，无论有没有错误，finally一定会被执行。  

>所以，有错误发生时，执行流程像这样：  
> 先执行try { ... }的代码；  
执行到出错的语句时，后续语句不再继续执行，转而执行catch (e) { ... }代码；  
最后执行finally { ... }代码。  

> 而没有错误发生时，执行流程像这样：  
先执行try { ... }的代码；  
因为没有出错，catch (e) { ... }代码不会被执行；  
最后执行finally { ... }代码。  

> 最后请注意，catch和finally可以不必都出现。


### throw

throw 语句允许创建自定义错误。

正确的技术术语是：创建或抛出异常（exception）。

如果把 throw 与 try 和 catch 一起使用，那么能够控制程序流，并生成自定义的错误消息。

```javascript
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
```

## 事件
HTML 事件是发生在 HTML 元素上的事情。

当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。

### 事件流（捕获与冒泡）
+ 捕获阶段：从window向目标元素传递
+ 目标阶段：在目标元素上发生事件
+ 冒泡阶段：从目标元素向window传递

### 事件监听
+ addEventListener() 方法用于向指定元素添加事件监听器。
+ removeEventListener() 方法用于从指定元素移除事件监听器。
+ dispatchEvent() 方法用于触发指定元素的事件。

### 事件对象
事件对象是 JavaScript 中的一个对象，它包含有关事件的信息。

+ type：事件的类型。
+ target：触发事件的元素。
+ currentTarget：当前正在处理事件的元素。
+ preventDefault()：阻止事件的默认行为。
+ stopPropagation()：阻止事件冒泡。

### 事件委托
事件委托是一种利用事件冒泡的机制，将事件处理程序绑定到父元素上，而不是直接绑定到子元素上。

```javascript
const list = document.getElementById("list");
list.addEventListener("click", function(event) {
  if(event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
```

### 常见事件类型
+ click：鼠标点击
+ mouseover：鼠标悬停
+ mouseout：鼠标移出
+ keydown：键盘按下
+ submit：表单提交
+ DOMContentLoaded：DOM 内容加载完成
+ resize：窗口大小改变
+ ...

## 综合应用场景
**表单验证**：正则+事件。

```html
<form id="signup">
<input type="email" id="email" required>
<button type="submit">注册</button>
</form>

<script>
document.getElementById("signup").addEventListener("submit", function(event) {
const email = document.getElementById("email").value;

try {
if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
throw new Error("邮箱格式不正确");
}
// 提交表单...
} catch (error) {
event.preventDefault();
alert(error.message);
}
});
</script>
```









