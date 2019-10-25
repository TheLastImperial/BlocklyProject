$("#btnPlay").on("click", function(){
  Timer.start();
});

$("#btnCompile").on("click", function(){
  var code = blocksToPython();
  $("#divCode").html(code);
});

$("#btnEvaluar").on("click", function(){
  var code = blocksToPython();
  eval(pythonToJs(code));
})