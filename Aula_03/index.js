rodada = 1
while(rodada <=3) {
  console.log("Rodada:" + rodada)
  
  escolhaJogador = prompt("Nível "+rodada+", escolha vidro (1, 2 ou 3)?")
  pisoQuebrado = Math.floor(Math.random()*3 + 1);
  
  if(escolhaJogador == pisoQuebrado) {
    alert("Vidro quebrou! Acabou o jogo para você")
    rodada = 1000;
  }
  else {
    alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
  }
  
  rodada = rodada + 1
}

// Rodada >= 4

if(rodada == 4) {
  alert("Você venceu! Parabéns!!!")
}