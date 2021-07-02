function validar() {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var data = document.getElementById("data").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (nome == "") {
    alert('Preencha o campo nome.');

    return false;
  }
  if (sobrenome == "") {
    alert('Preencha o campo Sobrenome.');

    return false;
  }
  if (data == "") {
    alert('Preencha o campo Data de Nascimento.');
    formuser.data.focus();
    return false;
  }

  if (email == "" || email.indexOf('@') == -1) {
    alert('Não é um e-mail valido');
    return false;
  }

  if (senha == "" || senha.length <= 5) {
    alert('Preencha o campo senha com minimo 6 caracteres');
    return false;
  }
}