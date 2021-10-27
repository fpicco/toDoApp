window.addEventListener("load", () => {
  const formulario = this.document.forms[0];
  const inputEmail = this.document.querySelector("#inputEmail");
  const inputPassword = this.document.querySelector("#inputPassword");
  const apiUrl = "https://ctd-todo-api.herokuapp.com/v1/users/login";

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const validationResult =
      fieldComplete(inputEmail.value) && fieldComplete(inputPassword.value);

    if (validationResult) {
      console.log(normalizationLogin(inputEmail.value, inputPassword.value));
      fetchApiLogin(
        apiUrl,
        normalizationLogin(inputEmail.value, inputPassword.value)
      );
    } else {
      alert("Alguno de los campos está incompleto.");
    }
    formulario.reset();
  });
});

function fieldComplete(field) {
  return !(field === "");
}

function normalizationLogin(email, password) {
  const user = {
    email: email.toLowerCase().trim(),
    password: password.trim(),
  };
  return user;
}

function fetchApiLogin(url, payload) {
  const settings = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  fetch(url, settings)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        location.href = "/mis-tareas.html"
      }
    });
}
