window.addEventListener('resize', onresize, false);
window.addEventListener('load', function(){
  function a(){
    IBlockly.chargeBlockly(Exercises[0]);
    setListeners();
  }
  var height = $(window).height() - $("#divHeader").height();
  $('#divContent').height(height);

  ILoadXML.loadXMLs(a, Exercises[0])
});
