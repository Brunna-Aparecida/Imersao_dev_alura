function jogar() {
    personagens = ["", "", ""];
    viloes = ["", "", ""];
  
    forcaPersonagens = 0;
    forcaVilao = 0;
  
    for (let i = 0; i < 3; i++) {
      escolhaPersonagem = prompt(
        "Digite o nome do seu personagem" + (i + 1) + "º personagem"
      );
      personagens[i] = escolhaPersonagem;
  
      forcaPersonagens += Math.floor(Math.random() * 10) + 1;
    }
  
    for (let i = 0; i < 3; i++) {
      indiceAleatorio = Math.floor(Math.random() * 5);
      viloesPossiveis = [
        "Thanos",
        "Loki",
        "Doutor Destino",
        "Ultron",
        "Dormammu"
      ];
      viloes[i] = viloesPossiveis[indiceAleatorio];
  
      forcaVilao += Math.floor(Math.random() * 10) + 1;
    }
  
    if (forcaPersonagens > forcaVilao) {
      alert("Os personagens ganharam!");
    } else if (forcaPersonagens < forcaVilao) {
      alert("Os Vilões ganharam!");
    } else {
      alert("Empate!");
    }
  
    alert(
      "Os personagens escolhidos foram: " +
        personagens[0] +
        ", " +
        personagens[1] +
        ", " +
        personagens[2] +
        ". \nForça Total: " +
        forcaPersonagens +
        "\nOs Viloes escolhidos foram: " +
        viloes[0] +
        ", " +
        viloes[1] +
        ", " +
        viloes[2] +
        ". \nForça total: " +
        forcaVilao +
        "."
    );
  }
  