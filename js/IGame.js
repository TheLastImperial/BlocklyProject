var Game = {
  currentExerc: {
    id: 0,
    help: 0,
    tries: 0,
    time: "",
    points: 0,
    finish: false
  },
  exercises: [],
  try: function() {
    this.currentExerc.tries += 1;
  },
  save: function() {
    this.exercises.push(this.currentExerc);
    this.currentExerc = {
      id: 0,
      help: 0,
      tries: 0,
      time: "",
      points: 0,
      finish: false
    };
  }
}
