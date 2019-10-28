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

var btnPlayFn = function(){
  Timer.start();
}

var btnEvaluarFn = function(){
  eval(pythonToJs(code));
  var resp = $("#divReply").html();
}

var setListeners = function(){
  $("#btnPlay").on("click", btnPlayFn);

  $("#btnCompile").on("click", function(){
    var code = IBlockly.blocksToPython();
    $("#divCode").html(code);
  });

  $("#btnEvaluar").on("click", function(){
    var code = IBlockly.blocksToPython();
    eval(pythonToJs(code));
  })
}
