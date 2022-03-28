let seuvotopara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector(".d-1-2 span");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaatual = 0;
let numero = '';

function comecaretapa(){
    let etapa = etapas[etapaatual];
    let numerohtml = '';
    
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
            fotoshtml += `<div class="d-1-image"><img src="${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
        }
        lateral.innerHTML = fotoshtml;
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
    alert('Clicou em BRANCO!');
}
function corrige(){
    alert('Clicou em CORRIGE!');
}
function confirma(){
    alert('Clicou em CONFIRMA!');
}

comecaretapa();