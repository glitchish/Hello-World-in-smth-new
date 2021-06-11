# This is just an ***experiment*** that I decided to work on,

it is not actually going to be developed into a **p**rogramming **l**anguage (unless it does, for some reason)


code:
```js
var input = `emit 'Hello World!' ;`;
/**
 * Change "Hello World!" to whatever you want, to see
 * the change
 * 
 * Written by theiocoder/iocoder
 */
const code = input.split(' ');
const codeEnd = code[code.length-1]
if (code[0] === 'emit') {
  if (codeEnd === ";") {
      var newCode = code.splice(code.splice(code.indexOf('emit'), 1));
      var newCode1 = newCode.splice(newCode.splice(newCode.indexOf(';')));
      var Emit = newCode1.join(" ")
      console.log(Emit.replace(/['"]+/g, ''));
  }
}
```


# LICENSE
```
If you do use this code, I don't really care, but you can give me original credit if you
want to, but that totally up to you to choose.

Just vanilla JavaScript, not much else, so... its not money (obviously) and anyone can use
this code.

This code can be developed into NodeJS because... well... it's supported.

Okay, that's enough, bye!
```

[Okay, BYE!](https://github.com)
