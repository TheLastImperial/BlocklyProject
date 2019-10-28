Blockly.Python.INFINITE_LOOP_TRAP = null;

var IBlockly = {
  workspace: null,
  blocksToPython: function(){
    return Blockly.Python.workspaceToCode(demoWorkspace);
  },
  chargeBlockly: function(){
    this.workspace = Blockly.inject('blocklyDiv', {
      media: 'node_modules/blockly/media/',
      toolbox: document.getElementById('toolbox')
    });

    Blockly.Xml.domToWorkspace(
      document.getElementById('startBlocks'),
      this.workspace
    );
  }
}
