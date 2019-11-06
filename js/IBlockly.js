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
      media: 'js/libs/blockly/media/',
      toolbox: eleTool
    });

    this.workspace.addChangeListener(function(){
      var code = IBlockly.blocksToPython();
      $("#divCode").text(code);
    });

    var ele = document.getElementById(exercise.startBlocksId);
    if(ele != null){
      var eleWS = this.workspace;
      Blockly.Xml.domToWorkspace(
        ele,
        eleWS
      );
    }
    $("#blocklyDiv").trigger("resize")
  }
}
