var m = moment().startOf('day');
var timerId = null;

var Timer = {
  isPaused: false,
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
  
  pause: function (){
    if(timerId){
      this.isPaused = true;
      clearInterval(timerId);
      timerId = null;
    }
  },

  restart: function(){
    if(!timerId && this.isPaused){
      this.isPaused = false;
      timerId = setInterval(this.timerFn, 1000);
    }
  },

  getTime: function(){
    return m.format("HH:mm:ss");
  },

  lessTime: function(){
    var sec = moment(this.getTime(), 'HH:mm:ss')
      .diff(moment().startOf('day'), 'seconds');
    if(sec < 5) return;
    var ele = $("#btnTimer");
    m = m.add(-5, "s");
    ele.text(m.format("HH:mm:ss"));
  }
}
