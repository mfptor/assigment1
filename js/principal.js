function enviarDados (event) {
    event.preventDefault();
    let pessoa = {
        empresa : document.querySelector("#empresa").value,
        nome : document.querySelector("#nome").value,
        email : document.querySelector("#email").value
    }

    console.log(empresa.value);

    function reqListener () {
        if(this.readyState == 4) {
            console.log(this.responseText),
            console.log(this)
        }
      };

      let request = new XMLHttpRequest();

      request.onload = reqListener;
      request.open("POST", "https://assigment-28f0a.firebaseio.com/contatos.json");
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(pessoa));


}