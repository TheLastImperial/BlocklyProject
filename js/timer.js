var m = moment().startOf('day');

setInterval(function(){
  var ele = $("#btnTimer");
  m = m.add(1, "s");
  ele.text(m.format("HH:mm:ss"));
}, 1000);
