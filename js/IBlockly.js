Blockly.Python.INFINITE_LOOP_TRAP = null;

var IBlockly = {
  workspace: null,
  blocksToPython: function(){
    return Blockly.Python.workspaceToCode(this.workspace);
  },
  chargeBlockly: function(exercise){
    $("#blocklyDiv").empty();
    var eleTool = document.getElementById(exercise.toolboxId);

    this.workspace = Blockly.inject('blocklyDiv', {
      media: 'node_modules/blockly/media/',
      toolbox: eleTool
    });

    var ele = document.getElementById(exercise.startBlocksId);
    if(ele != null){
      Blockly.Xml.domToWorkspace(
        ele,
        this.workspace
      );
    $("#blocklyDiv").trigger("resize")
    }
  }
}
