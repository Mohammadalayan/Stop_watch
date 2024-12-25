window.onload = function(){
    let seconds = 0;
    let tens = 0;
    let min=0;
    let OutputSeconds = document.getElementById("seconds");
    let OutputTens = document.getElementById("tens");
    let OutputMin = document.getElementById("min");

    let buttonStart = document.getElementById("btn-start");
    let buttonStop = document.getElementById("btn-stop");
    let buttonReset = document.getElementById("btn-reset");
    let Interval;
    buttonStart.addEventListener('click', () => {
        Interval = setInterval(startTimer, 10);
    });
    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });
    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        min=0;
        OutputSeconds.innerHTML = "00";
        OutputTens.innerHTML = "00";
        OutputMin.innerHTML = "00";
    });
    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML ="0" + tens;
        }
      
        
        if(tens > 9){
            
            OutputTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            tens=0;
            OutputSeconds.innerHTML = seconds;
          }
        if(seconds <= 9){
            OutputSeconds.innerHTML ="0"+seconds ;
        }
        if(seconds > 9){
                     OutputSeconds.innerHTML =seconds ;
        }
        if(seconds > 59){
            seconds=0;
            OutputSeconds.innerHTML =seconds ;
            min++
            OutputMin.innerHTML=min;
}
        if(min <= 9){
            OutputMin.innerHTML ="0"+min ;

}
if(min >9){
    OutputMin.innerHTML=min;
}
    }
}