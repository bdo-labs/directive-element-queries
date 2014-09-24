
Angular element-queries
=======================

This is a drastically simplified version of element-queries. You specify
some breakpoints and then you can use the `key` from a breakpoint within
the scope of your element.


Usage
-----

```JavaScript
var app = angular.module('app', []);
app.directive('eq', ['$window', require('element-queries')]);
```

```html
<div eq="eq" breakpoints="{small: 400, medium: 600, large: 900}" ng-class="eq">
  This element is {{eq}}
</div>
```

```css
.small {
  font-size: .75em;
}
.medium {
  font-size: 1.5em;
}
.large {
  font-size: 2em;
}
```


License
-------

The MIT License
Copyright (C) 2014 BDO AS &lt;labs@bdo.no&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

