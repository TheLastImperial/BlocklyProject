function pythonToJs(code){
  return Sk.importMainWithBody("<stdin>",false,code)
}
function outf(text) {
  var mypre = document.getElementById("divCode");
  mypre.innerHTML = mypre.innerHTML + text;
}

function builtinRead(x){
  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
}

Sk.configure({
  output: outf,
  read: builtinRead
});
