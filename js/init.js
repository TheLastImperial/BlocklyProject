/*
** En este archivo se configura blockly y Skulpt
** para hacer un uso rapido de estas bibliotecas.
**
**
** Los unicos metodos que deben ser utilizados son:
**  - blocksToPython
**  - pythonToJs
*/

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
  output: outf,
  read: builtinRead
});

function pythonToJs(code){
  return Sk.importMainWithBody("<stdin>",false,code)
}

/***********************************************************************/
var getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

var onresize = function(e) {
  var bBox = getBBox_(document.getElementById('divConBlockly'));

  var el = document.getElementById('blocklyDiv');
  el.style.top = bBox.y + 'px';
  el.style.left = bBox.x + 'px';
  // Height and width need to be set, read back, then set again to
  // compensate for scrollbars.
  el.style.height = bBox.height + 'px';
  el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
  el.style.width = bBox.width + 'px';
  el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';

  // Make the 'Blocks' tab line up with the toolbox.
  // if (Code.workspace && Code.workspace.toolbox_.width) {
  //   document.getElementById('tab_blocks').style.minWidth =
  //       (Code.workspace.toolbox_.width - 38) + 'px';
  //       // Account for the 19 pixel margin and on each side.
  // }
};
window.addEventListener('resize', onresize, false);
window.addEventListener('load', function(){
  ILoadXML.loadXMLs(IBlockly.chargeBlockly)
});
