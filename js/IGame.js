var Game = {
  currentExerc: null,
  finishExercises: [],
  try: function() {
    this.currentExerc.tries += 1;
  },
  save: function() {
    var idS = this.currentExerc.id;
    if(idS == Exercises.length - 1){
      return this.currentExerc.points;
    } else {
      idS += 1;
    }
    var seconds = moment(this.currentExerc.time, 'HH:mm:ss')
      .diff(moment().startOf('day'), 'seconds');
    var points = Fuzzy.calculate(Fuzzy[this.getExercise().level],
      [ this.currentExerc.tries,
      seconds,
      this.currentExerc.helps
    ]);
    points = Math.round(points);
    this.currentExerc.points = points;
    this.finishExercises.push(this.currentExerc);
    this.currentExerc = {
      id: idS,
      help: 0,
      tries: 0,
      time: "",
      points: 0,
      finish: false,
      helps: 0,
      currentHelp: 0
    };
    this.isExplication = true;
    return points;
  },
  init: function(){
    if(this.currentExerc == null){
      this.currentExerc = {
        id: 0,
        help: 0,
        tries: 0,
        time: "",
        points: 0,
        finish: false,
        helps: 0,
        currentHelp: 0
      }
    }
    this.isExplication = true;
  },
  isExplication: true,
  getExplication: function(){
    var exer = Exercises[this.currentExerc.id];
    this.isExplication = false;
    var p1 = [];
    for (var i = 0; i < exer.preview.length; i++) {
      p1.push($("<p>" + exer.preview[i] + "</p>"));
    }
    return p1;
  },
  getExercise: function(){
    return Exercises[this.currentExerc.id];
  },
  getHelp: function() {
    this.currentExerc.helps += 1;
    var hText = this.getExercise().helps[this.currentExerc.currentHelp];
    if(this.currentExerc.currentHelp == this.getExercise().helps.length - 1)
      this.currentExerc.currentHelp = 0;
    else
      this.currentExerc.currentHelp += 1;
    return hText;
  },
  getReply: function(){
    return this.getExercise().reply;
  },
  evaluate: function(workspace, resp){
    var flag = true;
    for (var i = this.getExercise().blocks.length - 1; i >= 0; i--) {
      var types = workspace.getBlocksByType(this.getExercise().blocks[i], false);
      if(types.length == 0){
        flag = false;
        break;
      }
    }
    if(!flag){
      return false;
    }
    resp = resp.split("\n");
    var cleanResp = resp.filter(res => res != "");
    var replyResp = this.getReply();
    if(cleanResp.length == replyResp.length){
      for (var i = replyResp.length - 1; i >= 0; i--) {
        if(replyResp[i] != cleanResp[i]){
          flag = false;
          break;
        }
      }
    }else{
      flag = false;
    }
    return flag;
  },
  hasNext: function(){
    return this.getExercise().id == Exercises.length - 1;
  }
}
