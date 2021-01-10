var personalAudio = document.getElementById("personalAudio");
var backgroundAudio = document.getElementById("finalMusic");


function playMusic(){
  backgroundAudio.play();

 if(personalAudio.paused)
     backgroundAudio.volume = 0.8;
 else
   backgroundAudio.volume = 0.3;
}

function volumeMusicLow(){
  backgroundAudio.volume = 0.2;
}

function volumeMusicHigh(){
  backgroundAudio.volume = 0.8;
}
