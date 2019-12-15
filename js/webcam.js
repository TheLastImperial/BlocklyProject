var interval = 0
function initCam(){
    Webcam.set({
        width: 250,
        height: 170,
        image_format: 'jpeg',
        jpeg_quality: 90
    });
    Webcam.attach( '#divVideo' );
    interval = setInterval(take_snapshot, 5000);
}

function stopWebCam(){
    Webcam.reset();
    clearInterval(interval);
    $("#lblFeel").text("");
}

function pauseWebCam(){
    clearInterval(interval);
    $("#lblFeel").text("");
}

function startWebCam(){
    interval = setInterval(take_snapshot, 5000);
}

function take_snapshot() {
    var result;
    Webcam.snap( function(data_uri) {
        var data = {
            data: data_uri,
            height: 170,
            width: 250
        }
        $.post('http://thelastimperial.com:8080/imgData', data)
        .done(function(res){
            $("#lblFeel").text(res);
            makeFeeling()
        }).fail(function(err){
            console.log(err);
        });
    });
}
function makeFeeling(feeling){
    var goodFeel = [ "enganchado", "interesado", "relajado" ];
    var badFeelings = ["concentrado", "aburrido", "excitado" ];

    var feelings = ["aburrido", "enganchado", "excitado",
        "concentrado", "interesado", "relajado"];
    var good = goodFeel.indexOf(feeling);
    var bad = badFeelings.indexOf(feeling);

    if(good < 0 && bad >= 0){
    // if(true){
        var r = Math.random();
        if( r < .40){
            Game.lessTry();
            $("#tdTries").text(Game.currentExerc.tries);
        }else if(r > .40 && r < .70){
            Timer.lessTime();
        }else if(r > .70 && r < .90){
            showMessage("mensaje", "Vamos tu puedes, tomate un respiro.", false);
            Timer.pause();
        }
    }
}
