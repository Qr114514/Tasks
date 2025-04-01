# CSS基础  

**什么是 CSS?**

+ CSS 指层叠样式表 (Cascading Style Sheets)
+ 样式定义如何显示 HTML 元素
+ 样式通常存储在样式表中
+ 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
+ 外部样式表可以极大提高工作效率
+ 外部样式表通常存储在 CSS 文件中
+ 多个样式定义可层叠为一个
  
## CSS语法
### CSS 实例
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:

![alt CSS](CSS.jpg)

+ 选择器通常是需要改变样式的 HTML 元素。

+ 每条声明由一个属性和一个值组成。

+ 属性是希望设置的样式属性。每个属性有一个值。属性和值被冒号分开。
  
为了让CSS可读性更强，你可以每行只描述一个属性:
```CSS
p
{
    color:red;
    text-align:center;
}
```

## CSS id 和 class

### id 和 class 选择器

如果你要在HTML元素中设置CSS样式，你需要在元素中设置"id" 和 "class"选择器。

#### id 选择器
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。

HTML元素以id属性来设置id选择器,CSS 中 id 选择器以 "#" 来定义。

以下的样式规则应用于元素属性 id="para1":
```css
#para1
{
text-align:center;
color:red;
}
```
**注意**：ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用。

### class 选择器

class 选择器用于描述一组元素的样式，class 选择器有别于id选择器，class可以在多个元素中使用。 

class 选择器在 HTML 中以 class 属性表示, 在 CSS 中，类选择器以一个点 . 号显示：

在以下的例子中，所有拥有 center 类的 HTML 元素均为居中。
```css
.center {text-align:center;}
```

也可以指定特定的 HTML 元素使用 class。

在以下实例中, 所有的 p 元素使用 class="center" 让该元素的文本居中:
```css
p.center {text-align:center;}
```

多个 class 选择器可以使用空格分开：
```css
.center { text-align:center; }
.color { color:#ff0000; }
```
**注意**：类名的第一个字符不能使用数字！它无法在 Mozilla 或 Firefox 中起作用。

### 二、基础选择器
| 选择器 | 示例 | 描述 |
| ---------- | -------- | ----------------------- |
| 通用选择器 | `*` | 选择所有元素 |
| 元素选择器 | `div` | 选择所有指定标签元素 |
| 类选择器 | `.class` | 选择class属性匹配的元素 |
| ID选择器 | `#id` | 选择id属性匹配的元素 |
### CSS基础样式
#### 一、元素大小设置

1. **宽度与高度**
```css
.element {
width: 300px; /* 固定宽度 */
min-width: 200px; /* 最小宽度 */
max-width: 100%; /* 最大不超过容器宽度 */

height: 150px; /* 固定高度 */
min-height: 50px; /* 最小高度 */
}
```
2. **响应式单位**
```css
.box {
width: 80%; /* 相对父容器宽度 */
height: 50vh; /* 视口高度的50% */
font-size: 2rem; /* 相对于根元素字体大小 */
}
```

### 二、颜色设置

1. **文本颜色**
```css
p {
color: #ff0000; /* 十六进制红色 */
color: rgb(255,0,0); /* RGB红色 */
color: rgba(255,0,0,0.5); /* 半透明红色 */
color: hsl(0,100%,50%); /* HSL模式红色 */
}
```
2. **背景颜色**
```css
.header {
background-color: #333; /* 深灰色背景 */
```

### 三、文字与字体设置

1. **字体家族**
```css
body {
font-family: "Helvetica Neue", Arial, sans-serif;
/* 优先使用 Helvetica Neue，降级方案 */
}
```

2. **字号与字重**
```css
h1 {
font-size: 2.5em; /* 相对单位 */
font-weight: 700; /* 粗体（400=normal，700=bold） */
}
```
3. **文本样式**
```css
.text {
line-height: 1.6; /* 行间距 */
text-align: center; /* 居中对齐 */
text-decoration: underline; /* 下划线 */
letter-spacing: 1px; /* 字符间距 */
}
```

### 四、边框与圆角

1. **基础边框**
```css
.card {
border: 2px solid #e0e0e0; /* 粗细 样式 颜色 */
border-radius: 8px; /* 圆角半径 */
}
```

2. **单边设置**

```css
.special-border {
border-left: 4px solid #3498db;
border-top-right-radius: 12px;
}
```
## 盒模型
### 一、盒模型基础概念

每个HTML元素在渲染时都会被视作一个矩形盒子，由以下四层结构组成：

1. **内容区 (Content)**

- 元素的实际内容（文本、图片等）

- 尺寸由 `width` 和 `height` 属性控制

2. **内边距 (Padding)**

- 内容与边框之间的透明缓冲区域

- 使用 `padding` 系列属性设置

3. **边框 (Border)**

- 包裹内容和内边距的可见线条

- 通过 `border` 属性配置样式、宽度和颜色

4. **外边距 (Margin)**

- 盒子与其他元素之间的透明隔离区

- 通过 `margin` 属性控制
![[IMG_3728.png]]
### 二、两种盒模型模式对比

通过 `box-sizing` 属性切换计算方式：

|属性值|计算公式|典型应用场景|
|---|---|---|
|`content-box`|总宽度 = width + padding + border|传统布局（默认模式）|
|`border-box`|width = 内容 + padding + border|现代响应式布局|
示例：
```css
/* 标准盒模型 */
.box-standard {
width: 200px;
padding: 20px;
border: 5px solid #333;
box-sizing: content-box; /* 默认值 */
/* 实际宽度 = 200 + 20*2 + 5*2 = 250px */
}

/* 替代盒模型 */
.box-alternate {
width: 200px;
padding: 20px;
border: 5px solid #333;
box-sizing: border-box;
/* 内容区宽度 = 200 - 20*2 - 5*2 = 150px */
}
```
### 实例
 为了深入理解盒模型，通过实际编写代码来观察不同属性的效果。创建一个简单的div，设置不同的width、padding、border和margin值，然后使用浏览器的开发者工具查看盒模型的各个部分，看看它们如何影响元素的总体尺寸和布局。

```HTML
<div class="box-playground">
<div class="inner-box">测试内容</div>
</div>
```

```css
.box-playground {
width: 300px;
height: 200px;
padding: 20px;
border: 5px solid #2ecc71;
margin: 30px auto;
box-sizing: border-box;
background: #f1f2f6;
}

.inner-box {
width: 100%;
height: 100%;
padding: 15px;
border: 2px dotted #e74c3c;
background: #fff;
}
```


## 五、五种定位（Position）【重点】
| 定位方式 | 属性值 | 特点 | 常见应用场景 |
| ---- | -------- | ------------ | ------------ |
| 静态定位 | static | 默认值，不触发定位 | 普通元素布局 |
| 相对定位 | relative | 相对于元素原位置偏移 | 微调元素位置 |
| 绝对定位 | absolute | 相对于最近的定位祖先元素 | 弹出菜单/悬浮提示 |
| 固定定位 | fixed | 相对于浏览器窗口固定 | 固定导航栏/回到顶部按钮 |
| 粘性定位 | sticky | 在阈值范围内保持固定 | 粘性表头/分类导航 |

---

## CSS常用布局
### 一、传统布局方案

#### 1. **浮动布局 (Float Layout)**

- **核心机制**：通过 `float` 属性使元素脱离文档流横向排列

- **典型应用**：多栏布局、图文混排

- **代码示例**：
```css
.left-col {
float: left;
width: 200px;
}
.right-col {
margin-left: 220px; /* 200px + 20px间距 */
}
.clearfix::after { /* 清除浮动 */
content: '';
display: block;
clear: both;
}
```
#### 2. **定位布局 (Position Layout)**

- **核心机制**：结合 `position: absolute/relative/fixed` 精准定位

- **典型应用**：弹窗、悬浮按钮

- **代码示例**：
```css
.modal {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
```
### 二、现代布局方案

#### 1. **Flexbox 布局**（一维布局）

- **核心属性**：
```css
.container {
display: flex;
justify-content: space-between; /* 主轴对齐 */
align-items: center; /* 交叉轴对齐 */
gap: 20px; /* 间距 */
}
.item {
flex: 1; /* 等分剩余空间 */
}
```
- **典型应用**：导航栏、卡片容器、垂直居中
### 2. **Grid 布局**（二维布局）

- **核心属性**：
```css
.container {
display: grid;
grid-template-columns: 1fr 2fr; /* 列宽比例 */
grid-template-rows: 100px auto; /* 行高设置 */
gap: 15px; /* 间距 */
}
.item {
grid-column: span 2; /* 跨列 */
}
```
- **典型应用**：复杂网格系统、仪表盘布局
### 三、响应式布局方案

#### 1. **媒体查询 (Media Queries)**

- **核心机制**：根据设备特性应用不同样式

- **典型应用**：移动端适配

- **代码示例**：
```css
/* 桌面端样式 */
.container { max-width: 1200px; }

@media (max-width: 768px) {
/* 移动端样式 */
.container { padding: 10px; }
.item { flex-basis: 100%; }
}
```
#### 2. **视口单位 (Viewport Units)**

- **核心单位**：
```css
.fullscreen {
width: 100vw; /* 视口宽度 */
height: 100vh; /* 视口高度 */
}
```
### 四、经典布局实现

#### 1. **圣杯布局 (Holy Grail Layout)**

- **三栏布局**：左右固定 + 中间自适应

- **实现代码**
```HTML
<div class="container">
<div class="main">中间自适应</div>
<div class="left">左侧固定</div>
<div class="right">右侧固定</div>
</div>
```

```css
.container {
padding: 0 220px; /* 左右栏宽度 */
}
.main { width: 100%; }
.left, .right {
width: 200px;
margin-left: -100%; /* 左栏定位 */
}
.right { margin-left: -200px; } /* 右栏定位 */
```
#### 2. **双飞翼布局**

- **改进版圣杯布局**：通过嵌套容器避免定位问题

- **实现代码**：
```HTML
<div class="main-wrap">
<div class="main">中间内容</div>
</div>
<div class="left">左侧边栏</div>
<div class="right">右侧边栏</div>
```

```css
.main-wrap { float: left; width: 100%; }
.main { margin: 0 220px; }
.left, .right {
float: left;
width: 200px;
margin-left: -100%;
}
.right { margin-left: -200px; }
```

### 五、布局方案选择建议

|**场景**|**推荐方案**|**优势**|
|---|---|---|
|一维线性布局|Flexbox|简单灵活，支持动态内容|
|复杂二维布局|CSS Grid|精确行列控制，代码简洁|
|传统多栏布局|Float + Clearfix|兼容性佳，适合旧项目维护|
|全屏/视口适配|Viewport Units|直观适配不同屏幕|
|移动端优先响应式|Media Queries|精准设备适配|

## CSS伪类

### 常用伪类
| 伪类 | 描述 |
| ------------- | -------------------- |
| :hover | 鼠标悬停状态 |
| :active | 激活状态（点击瞬间） |
| :nth-child(n) | 第n个子元素 |
| :first-child | 第一个子元素 |
| :last-child | 最后一个子元素 |

```css
/* 按钮交互效果 */
.btn:hover {
background: #c00;
transform: translateY(-2px);
}

/* 表格条纹效果 */
tr:nth-child(even) {
background: #f5f5f5;
}
```