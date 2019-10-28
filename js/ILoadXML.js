var ILoadXML = {
  files: [
    'xmls/defaultBlocks.xml',
    'xmls/toolbox.xml'
  ],
  loadXMLs: function(exec, exercise){
    var d0 = $.Deferred();
    var d1 = $.Deferred();
    var tmpDiv = $("<div></div>");

    $('#divXmls').empty();

    tmpDiv.load(exercise.startBlocksFile, function() {
      $('#divXmls').append(tmpDiv.children())
      d0.resolve();
    });

    tmpDiv.load(exercise.toolboxFile, function() {
      $('#divXmls').append(tmpDiv.children())
      d1.resolve();
    });

    $.when(d0, d1).done(exec);
  }
}