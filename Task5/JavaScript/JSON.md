# JSON
`JSON` 是 JavaScript 对象表示法（JavaScript Object Notation）

## JSON 语法
`JSON` 语法是 JavaScript 的子集。

`JSON` 语法规则：

- 数据在名称/值对中
- 数据由逗号分隔
- 花括号保存对象

## 数据格式
json数据格式：主要由对象 { } 和数组 [ ] 组成:

其中对象包括键值对（属性:属性值）{key： value}，value 可为 str，num，list，obj。取值使用 objcet.key

{key: value, key2:value2，} 键：值用冒号分开，对间用，连接

数组包含元素：num，str，list，objcet 都可以，利用索引访问 [index]，用 . 连接各个值:

e.g：

```javascript
var stu = {"student":           //stu 对象包含student的key,值为一个数组
[                                     //数组的每一个值为一个具体的学生对象
{"name": "Tom","Grade":1, "age":11, "gender": "M"},     //学生对象的键为名字,值为对应属性
{"name": "Jerry", "Grade":1, "age":10, "gender": "M"}       //每个属性对应的是一个key,value对
],
"classroom": {"class1": "room1", "class2": "room2"}         //对象的值,嵌套对象
};
```


