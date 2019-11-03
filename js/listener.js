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

var evaluate = function(){
  var resp = $("#divReply").html();
  resp = resp.split("\n");
  var cleanResp = resp.filter(res => res != "");
  var replyResp = Exercises[Game.currentExerc.id].reply;
  var flag = false;
  if(cleanResp.length == replyResp.length){
     flag = replyResp.every((elem, index, arr) => {
      return elem == arr[index];
    });
  }
  return flag;
}

var showMessage = function(title, msg){
  $("#modalMsgs .modal-title").text(title);
  $("#modalMsgs .modal-body").text(msg);
  $("#modalMsgs").modal('show');
}

var btnStartGame = function(){
  Timer.start();
  var exerc = Exercises[0];
  IBlockly.chargeBlockly(exerc);
  $("#divInstruction").html(exerc.question);
  $("#divBtns").show();
  Game.currentExerc = {
    id: 0,
    tries: 0,
    time: "",
    points: 0,
    finish: false
  };
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

  if(evaluate()){
    showMessage("Info", "Felicidades has terminado correctamente");
    Timer.stop();
    Game.currentExerc.time = Timer.getTime();
    Game.save();
    console.log(Game);
  }else{
    showMessage("Info", "Intenta de nuevo");
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

var setListeners = function(){
  $("#btnStartGame").on("click", btnStartGame);
  $("#btnCompile").on("click", btnCompileFn);
  $("#btnEvaluar").on("click", btnEvaluarFn);
}
