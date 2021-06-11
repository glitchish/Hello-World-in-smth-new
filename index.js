// This version REQUIRES NodeJS in order to work
// because it uses a NodeJS module

const prompt = require("prompt-sync")();

var input = '';

while (true) {
  var input = prompt("... ");
  const code = input.split(' ');
  const codeEnd = code[code.length-1]
  if (code[0] === 'emit') {
    if (codeEnd === ";") {
        var newCode = code.splice(code.splice(code.indexOf('emit'), 1));
        var newCode1 = newCode.splice(newCode.splice(newCode.indexOf(';')));
        var Emit = newCode1.join(" ");
        console.log(Emit.replace(/['"]+/g, ''));
    }
  }
}
