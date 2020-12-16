var all = [];
var atual = 0;



function listar(){
    for(var i = 1; i <= 5; i++){
        all.push(document.getElementById("a"+i))
    }
}
function troca(){
    listar()
    if(all[atual].style.opacity = 1 && atual <= 5){
        all[atual].style.opacity = 0;
        atual++;
        all[atual].style.opacity = 1;

    }
    else{
        atual = 1;
        all[atual].style.opacity = 0;
        atual++;
        all[atual].style.opacity = 1;
    }
}

document.onload(setInterval(troca, 5000))