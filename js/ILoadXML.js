var ILoadXML = {
  files: [
    'xmls/defaultBlocks.xml',
    'xmls/toolbox.xml',
    'xmls/toolboxHW.xml',
    'xmls/toolboxIf.xml',
    'xmls/toolboxFor.xml',
    'xmls/toolboxIfFor.xml',
    'xmls/toolboxVars.xml',
    'xmls/toolboxMore.xml',
    'xmls/workspaceReply.xml',
    'xmls/toolboxHard.xml'
  ],
  loadXMLs: function(exec, exercise){
    var d0 = $.Deferred();
    var d1 = $.Deferred();
    var tmpDiv = $("<div></div>");

    $('#divXmls').empty();

    if(exercise.startBlocksFile != null){
      tmpDiv.load(exercise.startBlocksFile, function() {
        $('#divXmls').append(tmpDiv.children())
        d0.resolve();
      });
    }else{
      d0.resolve();
    }
    tmpDiv.load(exercise.toolboxFile, function() {
      $('#divXmls').append(tmpDiv.children())
      d1.resolve();
    });

    $.when(d0, d1).done(exec);
  },
  loadALLXMLs: function(exec){
    var d0 = $.Deferred();
    var d1 = $.Deferred();
    var d2 = $.Deferred();
    var d3 = $.Deferred();
    var d4 = $.Deferred();
    var d5 = $.Deferred();
    var d6 = $.Deferred();
    var d7 = $.Deferred();
    var d8 = $.Deferred();
    var d9 = $.Deferred();

    var tmpDiv = $("<div></div>");

    $('#divXmls').empty();
    tmpDiv.load(this.files[0], function() {
      $('#divXmls').append(tmpDiv.children())
      d0.resolve();
    });

    tmpDiv.load(this.files[1], function() {
      $('#divXmls').append(tmpDiv.children())
      d1.resolve();
    });

    tmpDiv.load(this.files[2], function() {
      $('#divXmls').append(tmpDiv.children())
      d2.resolve();
    });

    tmpDiv.load(this.files[3], function() {
      $('#divXmls').append(tmpDiv.children())
      d3.resolve();
    });

    tmpDiv.load(this.files[4], function() {
      $('#divXmls').append(tmpDiv.children())
      d4.resolve();
    });

    tmpDiv.load(this.files[5], function() {
      $('#divXmls').append(tmpDiv.children())
      d5.resolve();
    });

    tmpDiv.load(this.files[6], function() {
      $('#divXmls').append(tmpDiv.children())
      d6.resolve();
    });

    tmpDiv.load(this.files[7], function() {
      $('#divXmls').append(tmpDiv.children())
      d7.resolve();
    });

    tmpDiv.load(this.files[8], function() {
      $('#divXmls').append(tmpDiv.children())
      d8.resolve();
    });

    tmpDiv.load(this.files[9], function() {
      $('#divXmls').append(tmpDiv.children())
      d9.resolve();
    });

    $.when(d0, d1, d2, d3, d4, d5, d6, d7, d8, d9).done(exec);
  }
}