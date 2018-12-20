document.addEventListener("DOMContentLoaded",function(){
  console.log("This is code is ran when the page is finished loading!!!");

// Find the avaliable box

var squares = document.getElementsByTagName("td");
var playerTurns = document.body.children[1].innerHTML = "";
var counter = 0;

for (var i = 0; i < squares.length; i++) {
  var square = squares[i];

  square.addEventListener("click", function(event){
    while ( this.innerHTML == "") {
      if (counter % 2 == 0) {
        document.body.children[1].innerHTML = "It is X's turn";
        this.classList.add("X");
        this.innerHTML = "X" ;
        counter++;
      }else if (counter % 2 == 1) {
        document.body.children[1].innerHTML = "It is 0's turn"
        this.classList.add("0");
        this.innerHTML = "0" ;
        counter++;
      }
    }

    // else {
    //   alert("A move has already been made on this space");
    // }

  })
}

var resetbtn = document.getElementById("reset")

resetbtn.addEventListener("click", function(){
for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "";
    squares[i].classList.remove("X","0");
    counter = 0;
  }
})

var function detectWin() {

}































})
