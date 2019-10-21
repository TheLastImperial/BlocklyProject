var demoWorkspace = Blockly.inject('blocklyDiv', {
  media: 'node_modules/blockly/media/',
  toolbox: document.getElementById('toolbox')
});

Blockly.Xml.domToWorkspace(
  document.getElementById('startBlocks'),
  demoWorkspace
);

function showCode() {
  // Generate JavaScript code and display it.
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  var code = Blockly.Python.workspaceToCode(demoWorkspace);
  alert(code);
}
