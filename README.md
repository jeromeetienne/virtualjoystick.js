virtualjoystick.js
==================

It is small library to emulate a virtual joystick for touchscreen.
Here is a [basic example](http://jeromeetienne.github.io/virtualjoystick.js/index.html)
and its
[source](https://github.com/jeromeetienne/virtualjoystick.js/blob/master/index.html).
Here is a [dual joystick example](http://jeromeetienne.github.io/virtualjoystick.js/dual.html)
and its
[source](https://github.com/jeromeetienne/virtualjoystick.js/blob/master/dual.html).

see ["Let’s Make a 3D Game: Virtual Joystick"](http://learningthreejs.com/blog/2011/12/26/let-s-make-a-3d-game-virtual-joystick/)
post on 
["learningthreejs blog"](http://learningthreejs.com).

How To Install It
=================

You can install it manually. Just do 

```html
<script src='virtualjoystick.js'></script>
```

You can install with [bower](http://bower.io/).

```bash
bower install virtualjoystick.js
```

then you add that in your html

```html
<script src="bower_components/virtualjoystick.js/virtualjoystick.js"></script>
```


How To Use It ?
===============

* ```opts.container``` is the
[dom element](https://developer.mozilla.org/en/DOM/element)
on which we display joystick
* ```opts.stickElement``` is the
[dom element](https://developer.mozilla.org/en/DOM/element)
which is display for the *stick* of the joystick.
* ```opts.baseElement``` is the 
[dom element](https://developer.mozilla.org/en/DOM/element)
which is display for its *base*.
* Both elements are optional with sensible default
* you may set ```opts.mouseSupport``` to true during debug.

