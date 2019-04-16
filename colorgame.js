  var squareNumber = 6;
  var newColors = document.querySelector("#newcolors");
  var easyBtn = document.querySelector("#easy");
  var hardBtn = document.querySelector("#hard");
  var squares = document.querySelectorAll(".square");
  var colors = generateRandomColor(squareNumber);
  var color = pickColor();

  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  // answer
  document.querySelector("#title").textContent = color;
  // wrong anwer reaction
  for(var j=0; j<squares.length; j++){
    squares[j].addEventListener("click", function(){
      // get clicked color and compare to the answer
      var clickedColor = this.style.backgroundColor;
      if (clickedColor != color) {
        this.style.backgroundColor = "black";  
        document.querySelector("#message").textContent = "Try again"
      }
      else{
        changeColor(color);
        document.querySelector("h1").style.color = color;
        document.querySelector("#message").textContent = "Correct!"
        newcolors.textContent = "Play Again";
      }
    })
  }

  newColors.addEventListener("click", function(){
    clearMessage();
    newcolors.textContent = "New Colors";
    colors = generateRandomColor(squareNumber);
    color = pickColor();
    document.querySelector("#title").textContent = color;
    document.querySelector("h1").style.color = "white";

    for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  })

  easyBtn.addEventListener("click", function(){
    clearMessage();
    this.classList.add("blue");
    hardBtn.classList.remove("blue");
    squareNumber = 3;
    colors = generateRandomColor(squareNumber);
    color = pickColor();
    document.querySelector("#title").textContent = color;
    document.querySelector("h1").style.color = "white";
    for(var i=0; i<squares.length; i++){
      if (colors[i]) {
        squares[i].style.backgroundColor = colors[i];
      }
      else{
        squares[i].style.display = "none";
      }  

    }
  })

  hardBtn.addEventListener("click", function(){
    clearMessage();
    this.classList.add("blue");
    easyBtn.classList.remove("blue");
    squareNumber = 6;
    colors = generateRandomColor(squareNumber);
    color = pickColor();
    document.querySelector("#title").textContent = color;
    document.querySelector("h1").style.color = "white";
    for(var i=0; i<squares.length; i++){  
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
  })

  function changeColor(color){
    for(var i=0; i<squares.length; i++){
      squares[i].style.backgroundColor = color;
    }
  }

  function pickColor(){
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];
  }

  function generateRandomColor(num){
    var arr = [];
    // return array with 'num' colors
    for(var i=0; i<num; i++){
      arr.push(randomColor());
    }
    return arr;
  }

  function randomColor() {
    // generate r, g, b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g +", " + b +")";
  }

  function clearMessage(){
    document.querySelector("#message").textContent = "";
  }
