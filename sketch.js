//variáveis da bolinha
let xBolinha = 250;
let yBolinha = 250;
let diametro = 20;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = -7;

//variáveis da raquete
let xRaquete = 10;
let yRaquete = 250;
let wRaquete = 10;
let hRaquete = 90;

//variáveis do oponente
let xOponente = 580;
let yOponente = 250;
let velocidadeyOpoente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xOponente, yOponente);
  movimentaOponente();
  verificaColisaoOponente();
  placar();
  marcaPonto();
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width ||
     xBolinha -raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x, y){
  rect (x, y, wRaquete, hRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 5;
  }
  if (keyIsDown(83)){
    yRaquete += 5;
  }
}

function verificaColisaoRaquete(){
   if (xBolinha - raio < xRaquete + wRaquete && yBolinha - raio < yRaquete + hRaquete && yBolinha + raio > yRaquete)
   {
    velocidadeXBolinha *= -1;
   }
}

function verificaColisaoOponente(){
   if (xBolinha + raio > xOponente + wRaquete && yBolinha - raio < yOponente + hRaquete && yBolinha + raio > yOponente)
   {
    velocidadeXBolinha *= -1;
   }
}

function movimentaOponente(){
  if (keyIsDown(UP_ARROW)){
    yOponente -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yOponente += 5;
  }
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(18);
  fill(color(255,140,0))
  rect(180,10,40,20);
  rect(380,10,40,20);
  fill(255);
  text(meusPontos, 200, 26);
  text(pontosOponente, 400, 26)
}

function marcaPonto(){
  if (xBolinha > 595){
    meusPontos = meusPontos + 1;
  }
  if (xBolinha < 5){
    pontosOponente = pontosOponente + 1;
  }
}