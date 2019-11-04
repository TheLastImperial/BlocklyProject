var ILoadXML = {
  files: [
    'xmls/defaultBlocks.xml',
    'xmls/toolbox.xml',
    'xmls/toolboxHW.xml',
    'xmls/toolboxIf.xml'
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

    $.when(d0, d1, d2, d3).done(exec);
  }
}