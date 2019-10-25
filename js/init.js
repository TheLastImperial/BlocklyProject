/*
** En este archivo se configura blockly y Skulpt
** para hacer un uso rapido de estas bibliotecas.
**
**
** Los unicos metodos que deben ser utilizados son:
**  - blocksToPython
**  - pythonToJs
*/

var demoWorkspace = Blockly.inject('blocklyDiv', {
  media: 'node_modules/blockly/media/',
  toolbox: document.getElementById('toolbox')
});

Blockly.Xml.domToWorkspace(
  document.getElementById('startBlocks'),
  demoWorkspace
);

Blockly.Python.INFINITE_LOOP_TRAP = null;

function blocksToPython(){
  return Blockly.Python.workspaceToCode(demoWorkspace);
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function outf(text) {
    var mypre = document.getElementById("divCode");
    mypre.innerHTML = mypre.innerHTML + text;
}

Sk.configure({
  output:outf,
  read: builtinRead
});

function pythonToJs(code){
  return Sk.importMainWithBody("<stdin>",false,code)
}
