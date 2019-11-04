var Game = {
  currentExerc: null,
  finishExercises: [],
  try: function() {
    this.currentExerc.tries += 1;
  },
  save: function() {
    this.finishExercises.push(this.currentExerc);
    var idS = this.currentExerc.id;
    if(idS == Exercises.length - 1){
      console.log("Todo")
    } else {
      idS += 1;
    }
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
  evaluate: function(resp){
    resp = resp.split("\n");
    var cleanResp = resp.filter(res => res != "");
    var replyResp = this.getReply();
    var flag = true;
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
  }
}
