
let newGame = true;
let vidas = 6;
let ListaR = [];
let PalavraCategoria ;
let PalavraSorteio ;
let  palavras = [];
let JogoSolo = true;

ListaMulty();
criePalavra();
function criePalavra(){
    const SortPalavra = parseInt(Math.random()* palavras.length)
    PalavraSorteio = palavras[SortPalavra].nome
    PalavraCategoria = palavras[SortPalavra].categoria
}
MontPalvra();
function MontPalvra(){
    const categoria = document.getElementById("tipo");
    categoria.innerHTML = PalavraCategoria;

    const Tela = document.getElementById("Secret-Word");
    Tela.innerHTML = "";
    for(i  =  0; i < PalavraSorteio.length; i++){
        if (ListaR[i] == undefined){
            if(PalavraSorteio[i] === " "){
                ListaR[i] = " "
                Tela.innerHTML =  Tela.innerHTML + " <div class='letrasEspaco'>" +  ListaR[i] + "</div>"
            }
            else{
                ListaR[i] = "&nbsp"
                Tela.innerHTML =  Tela.innerHTML + " <div class='letras'>" +  ListaR[i] + "</div>"
            }
        }
        else{
            if(PalavraSorteio[i] == " "){
                ListaR[i] = " "
                Tela.innerHTML =  Tela.innerHTML + " <div class='letrasEspaco'>" +  ListaR[i] + "</div>"
            }
           else{
                Tela.innerHTML =  Tela.innerHTML + " <div class='letras'>" +  ListaR[i] + "</div>"
            } 
        }
}
}
function VerLetra(letra){
    document.getElementById("T-" + letra).disabled = true;
    if (vidas > 0 ){
        mudarLetra("T-" + letra, false);
        compare(letra);
        MontPalvra();
    }  
}
function mudarLetra(tecla, teclaCerta){
    if(teclaCerta == false){
        document.getElementById(tecla).style.backgroundColor = "#AC1A00";
        document.getElementById(tecla).style.color =  "#FFFFFF";
    }
    else{
        document.getElementById(tecla).style.backgroundColor = "#01E816";
        document.getElementById(tecla).style.color =  "#FFFFFF";
    }
}
async function compare(letra){
    const pos = PalavraSorteio.indexOf(letra)
    if(! PalavraSorteio.includes(letra)){
        vidas--
        MudarImagem();
    }
    else{
        mudarLetra("T-" + letra, true);
        for( i = 0; i <PalavraSorteio.length; i++){
            if(PalavraSorteio[i] == letra){
            ListaR[i] = letra;
            }
        }
    }
    const letraTotal = PalavraSorteio.length;
    var letrasCertas = 0;
    for(var i = 0; i < letraTotal; i++){
        if(ListaR[i] == PalavraSorteio[i]){
            letrasCertas++;
        }
        else{
            break
        }
    }
    if(letrasCertas == letraTotal){
        AbriModal("PARABÉNS!!! VOCÊ VENCEU")
        // vidas = 0
        PiscaReset(true);
    }
    if(vidas == 0){
        AbriModal("IXI", "Infelimente você errou! Obrigado por tentar, a palavra secreta era<br>" + PalavraSorteio);
        PiscaReset(true);
    }
}
function MudarImagem(){
    switch(vidas){
        case 5: 
            document.getElementById("img").style.background = "url('./imagens/forca01.png')"
            
            break;
        case 4: 
            document.getElementById("img").style.background = "url('./imagens/forca02.png')"
            
            break;
        case 3: 
            document.getElementById("img").style.background = "url('./imagens/forca03.png')"
           
            break;
        case 2: 
            document.getElementById("img").style.background = "url('./imagens/forca04.png')"
            
            break;
        case 1: 
            document.getElementById("img").style.background = "url('./imagens/forca05.png')"
            
            break;
        case 0: 
            document.getElementById("img").style.background = "url('./imagens/forca06.png')"
           
            break;
        default:
            document.getElementById("img").style.background = "url('./imagens/forca.png')"
    }
}
function AbriModal(titulo, mensagem, som){
    let modTitulo = document.getElementById("exampleModalLabel");
    modTitulo.innerText = titulo;
    let modMensagem = document.getElementById("ModalMensagem");
    modMensagem.innerHTML = mensagem;
    $("#Modal").modal({
        show: true
    });
}
let reiniciar = document.querySelector("#reiniciar")
reiniciar.addEventListener("click", function(){
    AbriModal("OPA", "SOU O GUSTAVO, FIZ ESTE JOGO COM MUITO CARINHO ENTÃO APROVEITE. OBRIGADO POR JOGAR, LOGO IREI DESENVOLVER MAIS JOGOS 😁")
});
function Solo(){
    if(JogoSolo == true){
        document.getElementById("JogoSolo").innerHTML = "<i class='bx bx-play'></i>";
        palavras = [];
        JogoSolo = false;
        document.getElementById("ModalAddPalavra").style.display = "block";
        document.getElementById("status").innerText = "Modo Manual";
        document.getElementById("tipo").innerText = "";
        document.getElementById("Secret-Word").innerText = "";

        PalavraSorteio = "";
        PalavraCategoria = "";
    }
     else if(JogoSolo == false){
         document.getElementById("JogoSolo").innerHTML = "<i class='bx bx-pause-circle'></i>"
         JogoSolo = true;
         document.getElementById("ModalAddPalavra").style.display = "none";

         document.getElementById("status").innerText = "Modo Automatico";
     }
    
}

const modal = document.getElementById("modal-al");
const botaoAbre = document.getElementById("ModalAddPalavra");

botaoAbre.onclick = function(){
    modal.style.display = "block";
}

const botaoFecha = document.getElementById("Modal-Fecha");
botaoFecha.onclick = function(){
    modal.style.display = "none";
    document.getElementById("Palavra-Add").value = "";
    document.getElementById("Categoria-Add").value = "";
}
window.onclick = function(){
    if(event.target == modal){
    modal.style.display = "none";
    document.getElementById("Palavra-Add").value = "";
    document.getElementById("Categoria-Add").value = "";
    }
}
function ListaMulty(){
     palavras = [
        palavra1 = {
            nome : "MONKEY D LUFFY",
            categoria : "ANIME",
        },
        palavra2 = {
            nome : "RORONOA ZORO",
            categoria : "ANIME",
        },
        palavra3 = {
            nome : "VINSMONKE SANJI",
            categoria : "ANIME",
        },
        palavra4 = {
            nome : "TRAFALGAR LAW",
            categoria : "ANIME",
        },
        palavra5 = {
            nome : "NICO ROBIN",
            categoria : "ANIME",
        },
        palavra6 = {
            nome : "GO D USOPP",
            categoria : "ANIME"
        },
        palavra7 = {
            nome : "PORTGAS D ACE",
            categoria : "ANIME",
        },
        palavra8 = {
            nome : "EDWARD NEWGATE",
            categoria : "ANIME",
        },
        palavra9 = {
            nome : "DONAQUIXOTE DOFLAMINGO", 
            categoria : "ANIME",
        },
        palavra10 = {
            nome :  "TONY TONY CHOPPER",
            categoria : "ANIME",
        } ,
        palavra11 = {
            nome : "ANAKIN SKYWALKER",
            categoria : "STAR WARS"
        },
        palavra12 = {
            nome : "OBIWAN KENOBI",
            categoria : "STAR WARS",
        },
        palavra13 = {
            nome : "DARTH VADER",
            categoria : "STAR WARS"
        },
        palavra14 = {
            nome : "LEIA ORGANA",
            categoria : "STAR WARS",
        },
        palavra15 = {
            nome : "PADME AMIDALA",
            categoria : "STAR WARS",
        },
        palavra16 = {
            nome : "LUKE SKIWALKER",
            categoria : "STAR WARS",
        },
        palavra17 = {
            nome : "ASTA",
            categoria : "ANIME"
        },
        palavra18 = {
            nome : "GOKU",
            categoria : "ANIME", 
        },
        palavra19 = {
            nome : "VEGETA",
            categoria : "ANIME",
        },
        palavra20 = {
            nome : "GOHAN",
            categoria : "ANIME",
        },
        palavra21 = {
            nome : "YUJI ITADORI",
            categoria : "ANIME",
        },
        palavra22 = {
            nome : "SATORU GOJO",
            categoria : "ANIME",
        },
        palavra23 = { 
            nome : "RYOMEI SUKUNA",
            categoria : "ANIME"
        },
        palavra24 = {
            nome  : "YUNO SPADE",
            categoria : "ANIME",
        },
        palavra25 = {
            nome :  "YAMI SUKEHIRO",
            categoria :  "ANIME",
        },
        palavra26 = {
            nome : "NOELLE SILVA",
            categoria : "ANIME"
        },
        palavra27 = {
            nome : "MAREOLEONA VERMILLION",
            categoria : "ANIME",
        },
        palavra28 = {
            nome : "MIMOSA VERMILLION",
            categoria : "ANIME"
        },
        palavra29 = {
            nome : "MAGNA SWING",
            categoria : "ANIME",
        },
        palavra30 = {
            nome : "LUCK VOLTIA",
            categoria : "ANIME",
        }
    ];
}
function addPalavra(){
    let adicionarNome = document.getElementById("Palavra-Add").value.toUpperCase();
    let adicionarTipo = document.getElementById("Categoria-Add").value.toUpperCase();
     if(verTexto(adicionarNome) || verTexto(adicionarTipo) || adicionarNome.length < 3 || adicionarTipo.length < 3){
         AbriModal("ESPERE !", "DIGITE UM NOME E/OU CATEGORIA VALIDA");
         return;
     }
   let palavra = {
        nome : adicionarNome,
        categoria : adicionarTipo,
    }
    palavras.push(palavra);
    sortear();
    document.getElementById("Palavra-Add").value = "";
    document.getElementById("Categoria-Add").value = "";
    
}
 function verTexto(input){
     return !input || !input.trim();
 }
function sortear(){
    if(JogoSolo == true){
        location.reload();
    }
    else{
        if(palavras.length > 0){
            ListaR = [];
            criePalavra();
            LimparTeclado();
            MontPalvra();

            vidas = 6;
            PiscaReset(false);
        }
    }
}
function LimparTeclado(){
    let teclas = document.querySelectorAll(".alfa > button");

    teclas.forEach((x) => {
        x.style.background = "#ffffff"
        x.style.color = "green";
        x.disabled = false;

    });
}
async function PiscaReset(LetsPlay){
    if(LetsPlay){
        document.getElementById("play").style.display = "block";

    }
    else{
        document.getElementById("play").style.display = "none";

    }
}