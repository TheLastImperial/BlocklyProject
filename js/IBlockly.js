Blockly.Python.INFINITE_LOOP_TRAP = null;

var IBlockly = {
  workspace: null,
  blocksToPython: function(){
    return Blockly.Python.workspaceToCode(this.workspace);
  },
  chargeBlockly: function(exercise){
    this.workspace = Blockly.inject('blocklyDiv', {
      media: 'node_modules/blockly/media/',
      toolbox: document.getElementById(exercise.toolboxId)
    });

    Blockly.Xml.domToWorkspace(
      document.getElementById(exercise.startBlocksId),
      this.workspace
    );
  }
}
