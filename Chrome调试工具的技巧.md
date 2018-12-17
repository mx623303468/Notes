1. `$0`  
    在`Chrome`的`Elements`面板中，`$0` 是当前我们选中的`html`节点的引用。  

    理所当然，`$1` 是我们上一次选择的节点的引用，`$2` 是在那之前选择的节点的引用，等等。一直到 `$4`  
    您可以使用其他引用来尝试一些相关操作,例子: `$1.appendChild($0)`  

2. `$` 和 `$$`  
    在你还没有在app中定义 `$` 变量的情况下(例如 jQuery)，`$`在`console`中是冗长的函数`document.querySelector`的一个别名。  

    但是`$$` 能节省更多的时间，因为它不仅仅执行`document.QuerySelectorAll`并且返回的是一个节点的数组，而不是一个Node list  

    从本质上说:`Array.from(document.querySelectorAll('div')) === $$('div')`,但是`$$('div')`要简短太多了！

3. `$_`  
  `$_` 变量是上次执行的结果的引用。

4. `$i`  
    在`Chrome`插件:[Console Importer](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie/related)的帮助之下，你可以快速的在`console`中引入和把玩一些`npm`库。  

    直接运行例如 `$i('lodash')` 或者 `$i('moment')` 然后在几秒钟之后，你就可以获取到`lodash / momentjs`了。