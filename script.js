function login(){

    let score = 0;
    let round = 0;
    let time = 0;
    let best = 0;
    const winMusic = new Audio("music/yay.mp3")
    const failMusic = new Audio("music/fail.mp3")
    let randomNo = Math.floor(Math.random() * 4)

    function loading(){
        document.getElementById("kolor-start").style.display = "none"
        document.getElementById("gamePage").style.filter = "none"
        playGame()
    }

    setTimeout(loading,800)

    function playGame(){
        let symbol = "0123456789ABCDEF"
        let color = "#"
    
        for(let i = 0; i < 6; i++){
            color += symbol[Math.floor(Math.random() * 16)]
            document.getElementById("header").style.background = color
        }
    
       let circles = document.getElementsByClassName("color-circle")
     
       let boxColor = generateRandomColor(circles.length)
       for(let i = 0; i < circles.length ; i++){
          if(boxColor[i]){
            circles[i].style.background = boxColor[i]
          }
       }
    
       let colorCircle = circles[randomNo]
       colorCircle.style.background = color
    }

    let circles = document.getElementsByClassName("color-circle")

    for(let i = 0; i < circles.length; i++){
    circles[i].addEventListener("click",(e)=>{
        if(circles[i].id == randomNo){
            winMusic.play()
            playGame()

        }else{
            failMusic.play()
        }
    })
   }

   function generateRandomColor(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

   function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
   }
}


