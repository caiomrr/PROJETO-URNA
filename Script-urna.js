let seuvotopara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector(".d-1-2 span");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaatual = 0;
let numero = '';
let votobranco = false;

function comecaretapa(){
    let etapa = etapas[etapaatual];
    let numerohtml = '';
    numero = '';
    votobranco = false;

    for(let i=0;i<etapa.numeros;i++){
        if(i===0){
            numerohtml += '<div class="numero pisca"></div>';
        }else{
        numerohtml += '<div class="numero"></div>';
    }
}

    seuvotopara.style.display = "none";
    cargo.innerHTML=etapa.titulo;
    descricao.innerHTML = "";
    aviso.style.display = "none";
    lateral.innerHTML = "";
    numeros.innerHTML = numerohtml;
}

function atualizainterface(){
    let etapa = etapas[etapaatual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    });
    if(candidato.length>0){
        candidato=candidato[0];
        seuvotopara.style.display = "block";
        aviso.style.display = "block";
        descricao.innerHTML = `Nome:${candidato.nome}<br/>Partido:${candidato.partido}`;
        
        let fotoshtml = '';
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotoshtml += `<div class="d-1-image small"><img src="${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
            }else{
            fotoshtml += `<div class="d-1-image"><img src="${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
        }
        }
        lateral.innerHTML = fotoshtml;
    } else{
        seuvotopara.style.display = "block";
        aviso.style.display = "block";
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';
    }
    
}

function clicou(n) {
   let elnumero = document.querySelector('.numero.pisca');
   if(elnumero !== null){
       elnumero.innerHTML = n;
       numero = `${numero}${n}`;

       elnumero.classList.remove('pisca');
       if(elnumero.nextElementSibling !== null){
       elnumero.nextElementSibling.classList.add('pisca');
    }else{
        atualizainterface();
    }
   }
}
function branco(){
    if(numero === ''){
        votobranco = true;
        seuvotopara.style.display = "block";
        aviso.style.display = "block";
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    }else{
        alert('ERRO! Aperte apenas a tecla *BRANCO* para votar em Branco.');
    }
}
function corrige(){
    comecaretapa();
}
function confirma(){
    let etapa = etapas[etapaatual];
    let votoconfirmado = false;
    
    if(votobranco === true){
        votoconfirmado = true;
        console.log("Confirma como Branco");
    }else if (numero.length === etapa.numeros){
        votoconfirmado = true;
        console.log("Confirmando como "+numero);
    }
    if(votoconfirmado){
        etapaatual++;
        if(etapas[etapaatual] !== undefined){
            comecaretapa();
        }else{
           document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM!</div>';
        }
    }
}

comecaretapa();