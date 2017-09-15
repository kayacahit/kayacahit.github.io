function bubbles() {
    var bubbles = document.getElementsByClassName("bubbles");
    for(var i = 1; i < bubbles.length; i++){
        setInterval(function() {
            bubbles[i].classList.toggle("bubble");
          }, 6000);
          console.log(i);
          console.log("inside loop and setinterval");
    }
}
bubbles();