var SpeechRecognition = window.webkitSpeechRecognition;'}'

var Recognition = new SpeechRecognition();

function start()
'{'
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
    

function setTimeOutButton() {
     setTimeOut(
         function(){
             alert("set TimeOut Button");
         }, 5000);
}

Recognition.onresult = function run (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
        console.log("taking selfie --- ");
        speak();
    }
       
}

 function speak () { 
     var synth = window.speechSynthesis;
    
      speak_data =  "Taking your Selfie in 5 Seconds";

      var uttertThis = new SpeechSynthesisUtterance(speak_data);

      synth.speak(uttertThis);
      Webcam.attach(camera);

      setTimeout (function()
      {
          take_snapshot();
          Save ();
      }, 5000);
 }
  
 Webcam.set({
     width:360,
     height:250,
     image_format: 'png',
     png_quality:90
 });
 camera = document.getElementById("camera");

 function take_snapshot()
 {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = '<img id="selfie_img"  src="'+data_uri+'">';
     });
 }


 function save() 
 {
     link = document.getElementById("link");
     image = document.getElementById("selfie_image").src ;
     link.href = image;
     link.click();
 }