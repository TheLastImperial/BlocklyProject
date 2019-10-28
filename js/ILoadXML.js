var ILoadXML = {
  files: [
    'xmls/defaultBlocks.xml',
    'xmls/toolbox.xml'
  ],
  loadXMLs: function(exec){
    var d0 = $.Deferred();
    var d1 = $.Deferred();
    var tmpDiv = $("<div></div>");
    tmpDiv.load(this.files[0], function() {
      $('#divXmls').append(tmpDiv.children())
      d0.resolve();
    });

    tmpDiv.load(this.files[1], function() {
      $('#divXmls').append(tmpDiv.children())
      d1.resolve();
    });

    $.when(d0, d1).done(exec);
  }
}