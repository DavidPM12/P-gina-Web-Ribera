document.addEventListener("DOMContentLoaded", function(){
var cuentaRegresiva=new Date("Aug 28, 2023 00:00:00").getTime();
var fecha=setInterval(function(){
    var actual=new Date().getTime();
    var tiempoDiferencia=cuentaRegresiva-actual;
    
    var dias=Math.floor(tiempoDiferencia/(1000*60*60*24));
    var horas=Math.floor((tiempoDiferencia%(1000*60*60*24))/(1000*60*60));
    var minutos=Math.floor((tiempoDiferencia%(1000*60*60))/(1000*60));
    var segundos=Math.floor((tiempoDiferencia&(1000*60))/(1000));

    document.getElementById("contador").innerHTML="Quedan: "+dias+"dias "+horas+"horas "+minutos+"minutos "+segundos+"segundos ";

    if(cuentaRegresiva<0){
        clearInterval(fecha);
        document.write("Ha terminado la cuenta atras");
    }
},1000);

var tamaño = document.getElementsByClassName("imgprogramas");
for(let i=0;i<tamaño.length;i++){
    tamaño[i].addEventListener("mouseover",function(){
        this.style.transform="scale(1.1)";
    });
    tamaño[i].addEventListener("mouseout",function(){
        this.style.transform="scale(1)";
    });
}


var color=document.getElementsByClassName("colores");
for(let i=0;i<color.length;i++){
    color[i].addEventListener("mouseover",function(){
        this.style.color="orange";
    });
    color[i].addEventListener("mouseout",function(){
        this.style.color="black";
    });
}

var negrita=document.getElementsByClassName("imgnegrita");

for(let i=0;i<negrita.length;i++){
    negrita[i].addEventListener("mouseover",function(){
        this.style.transform="scale(1.2)";
        this.style.filter = "grayscale(100%)";
    });
    negrita[i].addEventListener("mouseout",function(){
        this.style.transform="scale(1)";
        this.style.filter="none";
    });
}

var borde=document.getElementsByClassName("divprogramas");

for(let i=0;i<borde.length;i++){
    borde[i].addEventListener("mouseover",function(){
        this.style.transform="scale(1.01)";
        this.style.border = "3px solid white";
    });
    borde[i].addEventListener("mouseout",function(){
        this.style.transform="scale(1)";
        this.style.border="0px";
    });
}
})
