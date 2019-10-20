function playTrack(){
  //Tone.Transport.stop()
  var c1 = document.getElementById("chord1").value;
  var c2 = document.getElementById("chord2").value;
  var c3 = document.getElementById("chord3").value;
  var c4 = document.getElementById("chord4").value;
  var c1q = document.getElementById("c1q").value;
  var c2q = document.getElementById("c2q").value;
  var c3q = document.getElementById("c3q").value;
  var c4q = document.getElementById("c4q").value;
  
  
  var one = 220;
  switch(c1) {
    case "A#/Bb":
      one = 233.08;
      break;
    case "B":
      one = 246.94;
      break;
    case "C":
      one = 261.63;
      break;
    case "C#/Db":
      one = 277.18;
      break;
    case "D":
      one = 293.66;
      break;
    case "D#/Eb":
      one = 311.13;
      break;
    case "E":
      one = 329.63;
      break;
    case "F":
      one = 349.23;
      break;
    case "F#/Gb":
      one = 369.99;
      break;
    case "G":
      one = 392;
      break;
    case "G#/Ab":
      one = 415.3;
      break;
    default:
  }
var two = 220;
  switch(c2) {
    case "A#/Bb":
      two = 233.08;
      break;
    case "B":
      two = 246.94;
      break;
    case "C":
      two = 261.63;
      break;
    case "C#/Db":
      two = 277.18;
      break;
    case "D":
      one = 293.66;
      break;
    case "D#/Eb":
      one = 311.13;
      break;
    case "E":
      two = 329.63;
      break;
    case "F":
      two = 349.23;
      break;
    case "F#/Gb":
      two = 369.99;
      break;
    case "G":
      two = 392;
      break;
    case "G#/Ab":
      two = 415.3;
      break;
    default:
  }
var three = 220;
  switch(c3) {
    case "A#/Bb":
      three = 233.08;
      break;
    case "B":
      three = 246.94;
      break;
    case "C":
      three = 261.63;
      break;
    case "C#/Db":
      three = 277.18;
      break;
    case "D":
      three = 293.66;
      break;
    case "D#/Eb":
      three = 311.13;
      break;
    case "E":
      three = 329.63;
      break;
    case "F":
      three = 349.23;
      break;
    case "F#/Gb":
      three = 369.99;
      break;
    case "G":
      three = 392;
      break;
    case "G#/Ab":
      three = 415.3;
      break;
    default:
  }
var four = 220;
  switch(c4) {
    case "A#/Bb":
      four = 233.08;
      break;
    case "B":
      four = 246.94;
      break;
    case "C":
      four = 261.63;
      break;
    case "C#/Db":
      four = 277.18;
      break;
    case "D":
      four = 293.66;
      break;
    case "D#/Eb":
      four = 311.13;
      break;
    case "E":
      four = 329.63;
      break;
    case "F":
      four = 349.23;
      break;
    case "F#/Gb":
      four = 369.99;
      break;
    case "G":
      four = 392;
      break;
    case "G#/Ab":
      four = 415.3;
      break;
    default:
  }
  



  

  var timeSignature = document.getElementById("timeSignature").value;
  var tempo = document.getElementById("tempo").value;
  if(timeSignature == "2/4" || timeSignature == "3/4" || timeSignature == "4/4"){
    var div = 2
  }
  else {
    var div = 3
  }
  if(timeSignature == "2/4" || timeSignature == "6/8"){
    var beats = 2
  }
  else if(timeSignature == "3/4" || timeSignature == "9/8") {
    var beats = 3
  }
  else {
    var beats = 4
  }
  var total = div * beats
  var backbeat = div * 2
  var synth = new Tone.PolySynth(3, Tone.Synth, {
  oscillator : {
	 type : "square"
	}
  }).toMaster();


  var drums = new Tone.MembraneSynth().toMaster();
  var snare = new Tone.PluckSynth().toMaster();
  snare.volume.value = 10
  drums.volume.value = 15




  Tone.Transport.bpm.value = tempo;
  Tone.Transport.scheduleRepeat(repeat, "8n");
  var subbeat = 0;
  var bar = 1;
  var current = one;
  var major = c1q
  Tone.Transport.start();






  function repeat(){
    console.log(major)
    if(major == "Major"){
      synth.triggerAttackRelease([current, current * 1.2599, current * 1.4983], "8n");
    }
    else{
      synth.triggerAttackRelease([current, current * 1.19, current * 1.4983], "8n");
    }
    if(subbeat % div == 0){
      if(subbeat % backbeat == 0){
        drums.triggerAttackRelease("C0","8n")
      }
      else{
        snare.triggerAttackRelease("F#1", "18n")
      }
    }
      
    subbeat ++;
    if(subbeat == total){
      subbeat = 0;
      if(bar == 1){
        bar = 2;
        current = two
        major = c2q
      }
      else if(bar == 2){
        bar = 3;
        current = three
        major = c3q
      }
      else if(bar == 3){
        bar = 4
        current = four
        major = c4q
      }
      else{
        bar = 1
        current = one
        major = c1q
      }
    }
  }

}
