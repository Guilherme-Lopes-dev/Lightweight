var users = [
  {
    username: "gui",
    password: "123",
  },
  {
    username: "lipe",
    password: "lipao",
  },
];

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) 
    {
      alert(username + " , concluiu seu login com sucesso!");
    } 
    else {
      alert("Usuário ou senha incorretos");
    }
  }
}

//Rotina simples para autenticação
