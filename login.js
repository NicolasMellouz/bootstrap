function redirecionar(){
    if (document.getElementById('estudante').checked){
        window.location.href="paginaestudante.html";
    }else if (document.getElementById('biblio').checked){
        window.location.href="paginabiblio.html";
    }else{
        alert("insira uma opção");
    }
}