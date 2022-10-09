class Player {
  constructor(name, health) {
    this.name = name
    this.health = health
  }
  attack(competitor) {
    competitor.health -= 10
  }
  heal() {
    this.health += 10
  }
}

function displayP1Health(player1){
  document.getElementById("p1Health").innerText=player1.health
}

function displayP2Health(player2){
  document.getElementById("p2Health").innerText=player2.health
}


function startGame() {
   
  var enable=true
  //create 2 players qazi and lance
  const qazi = new Player("qazi", 100)
  const lance = new Player("lance", 100)
  //sounds
  const p1attackSound=document.getElementById('p1attack')
  const p1heal=document.getElementById('p1heal')
  const p2attack=document.getElementById('p2attack')
  const p2heal=document.getElementById('p2heal')
  
  

  function gameResult(player1,player2) {
    if (player1.health<=0) {
      document.getElementById("result").innerText=`${player2.name} won`
      enable=false
      return ;
    }
    if (player2.health<=0) {
      document.getElementById("result").innerText=`${player1.name} won`
      enable=false
      return ;
    }
  }

  function reset(player1,player2){
    player1.health=100
    player2.health=100
    displayP1Health(player1)
    displayP2Health(player2)
    document.getElementById("result").innerText=""
    enable=true
  }

  
  document.addEventListener("keydown",chooseKey)
  document.getElementById('reset').addEventListener("click",function() { 
    reset(lance,qazi)
    console.log("after reset" + enable);
   }
  )
  
  function chooseKey(event)
  {
    console.log("chooseKey :",enable);
    if (enable) { // enable=true game didn't finish yet 
    switch (event.key) {
      case ("q") :
      case ("Q") :
        p1attackSound.play()
        lance.attack(qazi)
        displayP2Health(qazi)
        gameResult(lance,qazi)
        break;
      case "a":
      case ("A") :
        p1heal.play()
        lance.heal()
        displayP1Health(lance)
        break;
      case "p":
      case "P":  
        p2attack.play()
        qazi.attack(lance)
        displayP1Health(lance)
        gameResult(lance,qazi)
        break;
      case "l":
      case "L":
        p2heal.play()
        qazi.heal()
        displayP2Health(qazi)
        break;
    }
  }
}

}

startGame()



