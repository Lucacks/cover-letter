function trocarTema(){
    var corAtual = document.documentElement.getAttribute("data-theme");
    if(corAtual === "dark"){
        document.documentElement.setAttribute("data-theme", "light")
        document.getElementById("Layer_1").style.filter="invert(0)";
        document.getElementById("Layer_2").style.filter="invert(0)";
    }else{
        document.documentElement.setAttribute("data-theme", "dark")
        document.getElementById("Layer_1").style.filter="invert(100%)";
        document.getElementById("Layer_2").style.filter="invert(100%)";
    }
}