function bubbles() {
    var bubbles = document.getElementsByClassName("bubbles");
    for(var i = 0; i < bubbles.length; i++){
        setInterval(function() {
            bubbles[i].classList.toggle("bubble"+[i+1]);
          }, 2000);
          console.log(i+1);
          console.log("inside loop and setinterval");
    }
}
bubbles();