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

var showMessage = function(msg){
  $(".alert h6").text(msg)
  $(".alert").show();
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
  Game.currentExerc.tries+= 1;
  var code = IBlockly.blocksToPython();
  if(code==""){
    showMessage("Hola que hace");
  }
  eval(pythonToJs(code));
  var resp = $("#divReply").html();
  resp = resp.split("\n");
  console.log(resp)
  resp = resp.filter(res => res != "");
  var flag = Exercises[Game.currentExerc.id].reply.every(resp);
  console.log(flag)

}

var btnCompileFn = function(){
  var code = IBlockly.blocksToPython();
  if(code == null || code.trim() == ""){
    showMessage("Debe ingresar bloques para convertirlo en codigo Python");
    return;
  }
  $("#divCode").html(code);
}

var setListeners = function(){
  $("#btnStartGame").on("click", btnStartGame);
  $("#btnCompile").on("click", btnCompileFn);
  $("#btnEvaluar").on("click", btnEvaluarFn);
}
