# String 

## 实例方法

### String.prototype.charAt()

`charAt` 方法返回指定位置的字符，参数是从 `0` 开始编号的位置。

```js
var s = new String('abc');

s.charAt(1) // 'b'
s.charAt(s.length - 1) // 'c'
```

这个方法完全可以用数组下标替代。

```js
'abc'.charAt(1) // 'b'
'abc'[1] // 'b'
```

如果参数为负，或者大于等于字符串的长度， `charAt` 返回空字符串

```js
'abc'.charAt(-1) // ''
'abc'.charAt(3) // ''
```

### String.prototype.charCodeAt()

`charCodeAt` 方法返回字符串指定位置的Unicode码点 （十进制表示），`相当于String.fromCharCode()`的逆操作。

```js
'abc'.charCodeAt(1) // 98

// 上面代码中，abc的1号位置的字符是b，它的 Unicode 码点是98。
```

如果没有任何参数，`charCodeAt`返回首字符的 Unicode 码点。

```js
'abc'.charCodeAt() // 97
```

如果参数为负数，或大于等于字符串的长度，`charCodeAt`返回`NaN`。 

```js
'abc'.charCodeAt(-1) // NaN
'abc'.charCodeAt(4) // NaN
```

注意，`charCodeAt`方法返回的 Unicode 码点不会大于65536（0xFFFF），也就是说，只返回两个字节的字符的码点。如果遇到码点大于 65536 的字符（四个字节的字符），必需连续使用两次`charCodeAt`，不仅读入`charCodeAt(i)`，还要读入`charCodeAt(i+1)`，将两个值放在一起，才能得到准确的字符。 

### String.prototype.concat()

`concat`方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

```js
var s1 = 'abc';
var s2 = 'def';

s1.concat(s2) // 'abcdef'
s1 // 'abc'
```

该方法可以接受多个参数。 

```
'a'.concat('b', 'c') // "abc"
```

如果参数不是字符串，`concat`方法会将其先转为字符串，然后再连接。 

```js
var one = 1;
var two = 2;
var three = '3';

''.concat(one, two, three) // "123"
one + two + three // "33"

// 上面代码中，concat方法将参数先转成字符串再连接，所以返回的是一个三个字符的字符串。作为对比，加号运算符在两个运算数都是数值时，不会转换类型，所以返回的是一个两个字符的字符串。
```

### String.prototype.slice()

`slice`方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不包含该位置）。

```js
'JavaScript'.slice(0, 4) // 'Java'
```

如果省略第二个参数，则表示子字符串一直到原字符串结束。 

```js
'JavaScript'.slice(4) // "Script"
```

如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。 

```js
'JavaScript'.slice(-6) // "Script"
'JavaScript'.slice(0, -6) // "Java"
'JavaScript'.slice(-2, -1) // "p"
```

如果第一个参数大于第二个参数，`slice`方法返回一个空字符串。 

```js
'JavaScript'.slice(2, 1) // ""
```

### String.prototype.substring()

`sbustring`方法用于从原字符串取出子子字符串并返回，不改变原字符串，跟 `slice` 方法很像。它的第一个参数表示子字符串的开始位置，第二个参数表示结束位置（返回值不包含该位置）。

```js
'JavaScript'.substring(0, 4) // "Java"
```

如果第一个参数大于第二个参数，`substring`方法会自动更换两个参数的位置。 

```js
'JavaScript'.substring(10, 4) // "Script"
// 等同于
'JavaScript'.substring(4, 10) // "Script"

// 上面代码中，调换substring方法的两个参数，都得到同样的结果。
```

如果参数是负数，`substring`方法会自动将负数转为0。

```js
'Javascript'.substring(-3) // "JavaScript"
'JavaScript'.substring(4, -3) // "Java"

// 上面代码中，第二个例子的参数-3会自动变成0，等同于'JavaScript'.substring(4, 0)。由于第二个参数小于第一个参数，会自动互换位置，所以返回Java。
```

由于这些规则违反直觉，因此不建议使用`substring`方法，应该优先使用`slice`。 

### String.prototype.substr()

`substr`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟 `slice`和 `substring`方法的作用相同。

`substr` 方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。

```js
'JavaScript'.substr(4, 6) // "Script"
```

如果省略第二个参数，则表示子字符串一直到原字符串的结束。 

```js
'JavaScript'.substr(4) // "Script"
```

如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。 

```js
'JavaScript'.substr(-6) // "Script"
'JavaScript'.substr(4, -1) // ""

// 上面代码中，第二个例子的参数-1自动转为0，表示子字符串长度为0，所以返回空字符串
```

### String.prototype.indexOf(), String.prototype.lastIndexOf()

`indexOf`方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。 如果返回 `-1` ，就表示不匹配。

```js
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
```

`indexOf`方法还可以接受第二个参数，表示从该位置开始向后匹配。 

```js
'hello world'.indexOf('o', 6) // 7
```

`lastIndexOf`方法的用法跟`indexOf`方法一致，主要的区别是`lastIndexOf`从尾部开始匹配，`indexOf`则是从头部开始匹配。 

```js
'hello world'.lastIndexOf('o') // 7
```

另外，`lastIndexOf`的第二个参数表示从该位置起向前匹配。 

```js
'hello world'.lastIndexOf('o', 6) // 4
```

### String.prototype.trim()

`trim` 方法用于除去字符串两端的空格，返回一个新字符串，不改变原字符串。

```js
'  hello world  '.trim()
// "hello world"
```

该方法去除的不仅是空格，还包括制表符（`\t`、`\v`）、换行符（`\n`）和回车符（`\r`）。 

```js
'\r\nabc \t'.trim() // 'abc'
```

### String.prototype.toLowerCase(), Stringprototype.toUpperCase()

`toLowerCase` 方法用于将一个字符串全部转为小写， `toUpperCase` 则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

```js
'Hello World'.toLowerCase()
// "hello world"

'Hello World'.toUpperCase()
// "HELLO WORLD"
```

### String.prototype.match()

`match` 方法用于确定原字符串是否匹配某个子字符串，返回一个数组，数组成员为匹配的第一个字符串。如果没有找到匹配，则返回 `null`。

```js
'cat, bat, sat, fat'.match('at') // ["at"]
'cat, bat, sat, fat'.match('xt') // null
```

返回的数组还有`index`属性和`input`属性，分别表示匹配字符串开始的位置和原始字符串。 

```js
var matches = 'cat, bat, sat, fat'.match('at');
matches.index // 1
matches.input // "cat, bat, sat, fat"
```

`match`方法还可以使用正则表达式作为参数。 

```js
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

s.match(r1) // ["x"]
s.match(r2) // null
```

从上面代码可以看到，字符串的`match`方法与正则对象的`exec`方法非常类似：匹配成功返回一个数组，匹配失败返回`null`。

如果正则表达式带有`g`修饰符，则该方法与正则对象的`exec`方法行为不同，会一次性返回所有匹配成功的结果。

```js
var s = 'abba';
var r = /a/g;

s.match(r) // ["a", "a"]
r.exec(s) // ["a"]
```

设置正则表达式的`lastIndex`属性，对`match`方法无效，匹配总是从字符串的第一个字符开始。

```js
var r = /a|b/g;
r.lastIndex = 7;
'xaxb'.match(r) // ['a', 'b']
r.lastIndex // 0
```

上面代码表示，设置正则对象的`lastIndex`属性是无效的。

### String.prototype.search(), String.prototype.replace()

`search`方法的用法基本等同于 `match`，但是返回值为匹配的第一位置。如果没有找到匹配，则返回 `-1`。

```js
'cat, bat, sat, fat'.search('at') // 1
```

`search`方法还可以使用正则表达式作为参数 。

```js
'_x_x'.search(/x/)
// 1

// 上面代码中，第一个匹配结果出现在字符串的1号位置。
```



`replace`方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有`g`修饰符的正则表达式）。 

```js
'aaa'.replace('a', 'b') // "baa"
```

`replace`方法还可以使用正则表达式作为参数 。

正则表达式如果不加`g`修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。

```js
'aaa'.replace('a', 'b') // "baa"
'aaa'.replace(/a/, 'b') // "baa"
'aaa'.replace(/a/g, 'b') // "bbb"

// 上面代码中，最后一个正则表达式使用了g修饰符，导致所有的b都被替换掉了。
```



`replace`方法的一个应用，就是消除字符串首尾两端的空格。

```js
var str = '  #id div.class  ';

str.replace(/^\s+|\s+$/g, '')
// "#id div.class"
```

`replace`方法的第二个参数可以使用美元符号`$`，用来指代所替换的内容。

- $&：匹配的子字符串。
- $`：匹配结果前面的文本。
- $'：匹配结果后面的文本。
- $n：匹配成功的第`n`组内容，`n`是从1开始的自然数。
- ：指代美元符号`$`。

'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
// "world hello"

'abc'.replace('b', '[`-‘−&-$']')
// "a[a-b-c]c"

~~~js
上面代码中，第一个例子是将匹配的组互换位置，第二个例子是改写匹配的值。

`replace`方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。

```javascript
'3 and 5'.replace(/[0-9]+/g, function (match) {
  return 2 * match;
})
// "6 and 10"

var a = 'The quick brown fox jumped over the lazy dog.';
var pattern = /quick|brown|lazy/ig;

a.replace(pattern, function replacer(match) {
  return match.toUpperCase();
});
// The QUICK BROWN fox jumped over the LAZY dog.
~~~

作为`replace`方法第二个参数的替换函数，可以接受多个参数。其中，第一个参数是捕捉到的内容，第二个参数是捕捉到的组匹配（有多少个组匹配，就有多少个对应的参数）。此外，最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置（比如从第五个位置开始），最后一个参数是原字符串。下面是一个网页模板替换的例子。

```js
var prices = {
  'p1': '$1.99',
  'p2': '$9.99',
  'p3': '$5.00'
};

var template = '<span id="p1"></span>'
  + '<span id="p2"></span>'
  + '<span id="p3"></span>';

template.replace(
  /(<span id=")(.*?)(">)(<\/span>)/g,
  function(match, $1, $2, $3, $4){
    return $1 + $2 + $3 + prices[$2] + $4;
  }
);
// "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"
```

上面代码的捕捉模式中，有四个括号，所以会产生四个组匹配，在匹配函数中用`$1`到`$4`表示。匹配函数的作用是将价格插入模板中。

### String.prototype.split()

`split` 方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

```js
'a|b|c'.split('|') // ["a", "b", "c"]
```

如果省略参数，则返回数组的唯一成员就是原字符串。 

```
'a|b|c'.split() // ["a|b|c"]
```

如果满足分割规则的两个部分紧邻着（即两个分割符中间没有其他字符），则返回数组之中会有一个空字符串。 

```js
'a||c'.split('|') // ['a', '', 'c']
```

如果满足分割规则的部分处于字符串的开头或结尾（即它的前面或后面没有其他字符），则返回数组的第一个或最后一个成员是一个空字符串。 

```js
'|b|c'.split('|') // ["", "b", "c"]
'a|b|'.split('|') // ["a", "b", ""]
```

`split`方法还可以接受第二个参数，限定返回数组的最大成员数。 

```js
'a|b|c'.split('|', 0) // []
'a|b|c'.split('|', 1) // ["a"]
'a|b|c'.split('|', 2) // ["a", "b"]
'a|b|c'.split('|', 3) // ["a", "b", "c"]
'a|b|c'.split('|', 4) // ["a", "b", "c"]

// 上面代码中，split方法的第二个参数，决定了返回数组的成员数。
```

`split`方法还可以使用正则表达式作为参数 。

```js
// 非正则分隔
'a,  b,c, d'.split(',')
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
'a,  b,c, d'.split(/, */, 2)
[ 'a', 'b' ]

// 上面代码使用正则表达式，去除了子字符串的逗号后面的空格。
```



```js
// 例一
'aaa*a*'.split(/a*/)
// [ '', '*', '*' ]

// 例二
'aaa**a*'.split(/a*/)
// ["", "*", "*", "*"]

// 上面代码的分割规则是0次或多次的a，由于正则默认是贪婪匹配，所以例一的第一个分隔符是aaa，第二个分割符是a，将字符串分成三个部分，包含开始处的空字符串。例二的第一个分隔符是aaa，第二个分隔符是0个a（即空字符），第三个分隔符是a，所以将字符串分成四个部分。
```

如果正则表达式带有括号，则括号匹配的部分也会作为数组成员返回。 

```js
'aaa*a*'.split(/(a*)/)
// [ '', 'aaa', '*', 'a', '*' ]

// 上面代码的正则表达式使用了括号，第一个组匹配是aaa，第二个组匹配是a，它们都作为数组成员返回。
```





### String.prototype.localeCompare()

`localeCompare`方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。 

```js
'apple'.localeCompare('banana') // -1
'apple'.localeCompare('apple') // 0
```

该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。 

```js
'B' > 'a' // false

// 上面代码中，字母B小于字母a。因为 JavaScript 采用的是 Unicode 码点比较，B的码点是66，而a的码点是97。
```

但是，`localeCompare`方法会考虑自然语言的排序情况，将`B`排在`a`的前面。 

```js
'B'.localeCompare('a') // 1
// 上面代码中，localeCompare方法返回整数1，表示B较大。
```

`localeCompare`还可以有第二个参数，指定所使用的语言（默认是英语），然后根据该语言的规则进行比较。 

```js
'ä'.localeCompare('z', 'de') // -1
'ä'.localeCompare('z', 'sv') // 1

// 上面代码中，de表示德语，sv表示瑞典语。德语中，ä小于z，所以返回-1；瑞典语中，ä大于z，所以返回1。
```