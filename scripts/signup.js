// const { json } = require("stream/consumers");

// console.log('hola')
window.addEventListener("load", () => {
  /* -------------------------- Getting form elements ------------------------- */
  let arrayInput = document.querySelectorAll("input");
  let btnSignUp = document.querySelector("form button");

  /* --------------------------------- Events --------------------------------- */
  btnSignUp.addEventListener("click", signUp);

  /* --------------------------- Creating form object --------------------------- */
  //   let formKeys = ["firstName", "lastName", "email", "password", "passRepeat"];
  let formKeys = ["firstName", "lastName", "email", "password"];

  /* -------------------------------- Functions ------------------------------- */
  let form = {};

  function signUp(e) {
    e.preventDefault();
    for (let i = 0; i < formKeys.length; i++) {
      form[formKeys[i]] = arrayInput[i].value;
    }
    runFetch();
  }

  /* ----------------------------------- API ---------------------------------- */

  function runFetch() {
    const apiEndpoint = "https://ctd-todo-api.herokuapp.com/v1/users";
    const payload = JSON.stringify(form);
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
        console.log(json);
        // console.log(payload);
      });
  }
});
