var users = [
  {
    username: "gui",
    password: "cuia",
  },
  {
    username: "lipe",
    password: "lipao",
  },
];

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      console.log(username + " , concluiu seu login com sucesso!");
    } else {
      console.log("Usuário ou senha incorretos");
    }
  }
}
