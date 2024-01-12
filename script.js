// creating a function 
function speechdetection(){
    let outputt=document.querySelector(".output");
    let action=document.querySelector(".action");


  let speech=window.SpeechRecognition||window.webkitSpeechRecognition;
    let speechrecognition=new speech();
    
    speechrecognition.onstart=function(){
      action.innerHTML="<p>Listening,please say in microphone</p>";
      
    };
    speechrecognition.onspeechend=function(){
      action.HTML="<p>Stopped listening,hope you have completed</p>";
      speechrecognition.stop();
    }
    speechrecognition.onresult=function(event){
      let transcript=event.results[0][0].transcript;
      let confidence=event.results[0][0].confidence;
      outputt.innerHTML=`Text is:${transcript} <br> Confidence is:${confidence}`
    //   confidence means how accurate the sppech is said it can be 0 to 1
      outputt.classList.remove("hide");
    };
  speechrecognition.start();
  }