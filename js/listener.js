var getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

var onresize = function(e) {
  var bBox = getBBox_(document.getElementById('divConBlockly'));

  var el = document.getElementById('blocklyDiv');
  el.style.top = bBox.y + 'px';
  el.style.left = bBox.x + 'px';
  el.style.height = bBox.height + 'px';
  el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
  el.style.width = bBox.width + 'px';
  el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
};

var cleanData = function(){
  $("#divReply").empty();
  $("#divCode").empty();
  $("#btnTimer").text("00:00:00");
  $("#tdTries").text("0");
  $("#tdAyuda").text("0");
}

var setPoints = function(points){
  var ele = $("#tdPoints")
  var currentPoints = parseInt($("#tdPoints").text());
  $("#tdPoints").text(currentPoints + points)
}

var showMessage = function(title, msg, showNext){
  $("#modalMsgs .modal-title").text(title);
  $("#modalMsgs .modal-body").text(msg);
  if(showNext){
    $("#modalMsgs .close").hide();
    $("#modalMsgs .modal-footer").show();
  }else{
    $("#modalMsgs .close").show();
    $("#modalMsgs .modal-footer").hide();
  }
  $("#modalMsgs").modal('show');
}

var btnStartGame = function(){
  if(Game.isExplication){
    $("#divInstruction").empty();
    $("#divInstruction").append(Game.getExplication());
    $("#btnStartGame").text("Comenzar");
  }else{
    initCam();
    IBlockly.chargeBlockly(Game.getExercise());
    $("#divInstruction").html(Game.getExercise().question);
    $("#divConBlockly").css('visibility', 'visible');
    $("#divBtns").show();
    $(window).trigger("resize");
    Timer.start();
    $("#btnStartGame").hide();
  }
}

var btnEvaluarFn = function(){
  Game.try();
  var code = IBlockly.blocksToPython();
  $("#tdTries").text(Game.currentExerc.tries);
  if(code == ""){
    showMessage("Error", "Debe ingresar bloques para convertirlo en codigo Python");
    return;
  }
  $("#divReply").text("");
  eval(pythonToJs(code));
  $("#divCode").text(code);
  if(Game.evaluate(IBlockly.workspace, $("#divReply").html())){
    Timer.stop();
    Game.currentExerc.time = Timer.getTime();
    showMessage("Info", "Felicidades has terminado correctamente", true);
    stopWebCam();
  }else{
    showMessage("Info", "Has cometido un error. Revisa tus bloques o utiliza una ayuda.");
  }
}

var btnCompileFn = function(){
  var code = IBlockly.blocksToPython();
  if(code == null || code.trim() == ""){
    showMessage("Error", "Debe ingresar bloques para convertirlo en codigo Python");
    return;
  }
  $("#divCode").text(code);
}

var btnAyudaFn = function(){
  showMessage("Ayuda", Game.getHelp());
  $("#tdAyuda").text(Game.currentExerc.helps);
}

var btnNextFn = function(){
  $("#modalMsgs .close").trigger("click");
  $("#modalMsgs .close").show();
  setPoints(Game.save())
  if(Game.hasNext()){
    $("#btnStartGame").text("Comenzar");
    $("#btnStartGame").show();
    $("#divConBlockly").css('visibility', 'hidden');
    $("#btnStartGame").trigger("click");
  }else{
    alert("Felicidades has terminado los ejercicios de Python usando Blockly")
  }
  $("#divBtns").hide();
  cleanData();
}

var setListeners = function(){
  $("#btnStartGame").on("click", btnStartGame);
  $("#btnCompile").on("click", btnCompileFn);
  $("#btnEvaluar").on("click", btnEvaluarFn);
  $("#btnAyuda").on("click", btnAyudaFn);
  $("#btnNext").on("click", btnNextFn);
  $("#divConBlockly").css('visibility', 'hidden');
  $('#modalMsgs').on('hidden.bs.modal', function () {
    console.log("Hola que hace")
    Timer.restart();
  });
  Game.init();
}
