var demoWorkspace = Blockly.inject('blocklyDiv', {
  media: 'node_modules/blockly/media/',
  toolbox: document.getElementById('toolbox')
});

Blockly.Xml.domToWorkspace(
  document.getElementById('startBlocks'),
  demoWorkspace
);
$("#divEjercicio").html(Text.bienvenida)