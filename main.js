function bubbles() {
    var bubbles = document.getElementsByClassName("bubble");
    for(var i = 0; i < bubbles.length; i++){
        setInterval(function() {
            bubbles[i].classList.toggle("bubble");
          }, 6000);
          console.log(i);
          console.log("inside loop and setinterval");
    }
}