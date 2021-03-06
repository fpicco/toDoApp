// const { json } = require("stream/consumers");

// console.log('hola')
window.addEventListener("load", () => {
  /* -------------------------- Getting form elements ------------------------- */
  let arrayInput = document.querySelectorAll("input");
  let btnSignUp = document.querySelector("form button");
  let form = document.querySelector("form");

  /* --------------------------------- Events --------------------------------- */
  btnSignUp.addEventListener("click", signUp);

  /* --------------------------- Creating form object --------------------------- */
  //   let formKeys = ["firstName", "lastName", "email", "password", "passRepeat"];
  let formKeys = ["firstName", "lastName", "email", "password"];

  /* -------------------------------- Functions ------------------------------- */
  let userForm = {};

  function signUp(e) {
    e.preventDefault();
    for (let i = 0; i < formKeys.length; i++) {
      userForm[formKeys[i]] = arrayInput[i].value;
    }
    // validations();
    runFetch();
  }

  /* ----------------------------------- API ---------------------------------- */

  function runFetch() {
    const apiEndpoint = "https://ctd-todo-api.herokuapp.com/v1/users";
    const payload = JSON.stringify(userForm);
    const configuration = {
      method: "POST",
      body: payload,
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(apiEndpoint, configuration)
      .then((response) => {
        console.log(response.status);
        console.log(response);
        return response.json();
      })
      .then((json) => {
        // console.log("Recurso creado exitosamente");
        // window.location.href = '../index.html'
        // successfullySignUp();
        console.log(json);
      });
  }
  // function successfullySignUp() {
  //   form.innerHTML = `Su registro ha sido exitoso!`;
  // }

  /* ------------------------------- Validations ------------------------------- */
  // function validations() {
  //   validatePsw();
  //   fieldsCompleted();
  // }

  // function validatePsw() {
  //   if (arrayInput[3].value != arrayInput[4].value) {
  //     form.innerHTML = `Las contrase??as ingresadas no coinciden!`;
  //   }
  // }
  // function fieldsCompleted() {
  //   arrayInput.forEach((field) => {
  //     if (field.value == null) {
  //       form.innerHTML = `Debes completar todos los campos!`;
  //     }
  //   });
  // }
});
