var botaoAdicionar = document.querySelector("#buscar-pacientes");
var erroAjax = document.querySelector("#erro-ajax");

botaoAdicionar.addEventListener("click", function(){

  console.log("Buscando pacientes");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){

    if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        erroAjax.classList.add("invisivel");
        
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
