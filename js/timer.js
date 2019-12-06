var m = moment().startOf('day');
var timerId = null;

var Timer = {
  timerFn: function() {
    var ele = $("#btnTimer");
    m = m.add(1, "s");
    ele.text(m.format("HH:mm:ss"));
  },

  start: function(){
    if(!timerId){
      m = moment().startOf('day');
      timerId = setInterval(this.timerFn, 1000);
    }
  },

  stop: function (){
    if(timerId){
      clearInterval(timerId);
      timerId = null;
    }
  },

  getTime: function(){
    return m.format("HH:mm:ss");
  }
}
