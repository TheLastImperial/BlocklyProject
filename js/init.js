window.addEventListener('resize', onresize, false);
window.addEventListener('load', function(){
  function a(){
    IBlockly.chargeBlockly(Exercises[0]);
    setListeners();
  }
  ILoadXML.loadXMLs(a, Exercises[0])
});
