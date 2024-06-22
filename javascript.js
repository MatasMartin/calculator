




document.addEventListener("DOMContentLoaded", function() {
    
    powerOn = false;
    const power = document.getElementById("power"); 
    let delay = false;

    const zero = document.getElementById("zero");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");

    power.addEventListener("click", function() {

        if(delay == false){
            powerOn = !powerOn;
            powerOnOff(powerOn);
            delay = true;
            setTimeout(() => {
                delay = false;
              }, "2000");
        }

    });

    if(powerOn==true) {

        zero.addEventListener("click", functionZero);
        one.addEventListener("click", functionOne);
        one.addEventListener("click", function Two);
        one.addEventListener("click", function Three);
        one.addEventListener("click", function Four);
        one.addEventListener("click", function One);
        one.addEventListener("click", function One);
        one.addEventListener("click", function One);
        one.addEventListener("click", function One);
        one.addEventListener("click", function One);

    }

});

function powerOnOff(powerOn) {
    
    const screen = document.querySelector("#power-screen"); 

    if(powerOn) {
        console.log("paspausta");
        screen.classList.add("move");
        setTimeout(() => {
            screen.classList.remove("move");
          }, "1000");
    }else {
        screen.classList.add("move");
        setTimeout(() => {
            screen.classList.remove("move");
          }, "1000");
    }
}