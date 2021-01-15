import Html from "./html.js";

let Register = {
  render: async () => {
    return Html();
  },
  after_render: async () => {
    document
      .getElementById("register_submit_btn")
      .addEventListener("click", () => {
        let email = document.getElementById("email_input");
        let pass = document.getElementById("pass_input");
        let repeatPass = document.getElementById("repeat_pass_input");
        if (pass.value != repeatPass.value) {
          alert(`The passwords dont match`);
        } else if (
          (email.value == "") |
          (pass.value == "") |
          (repeatPass == "")
        ) {
          alert(`The fields cannot be empty`);
        } else {
          alert(`User with email ${email.value} was successfully submitted!`);
        }
      });
  },
};

export default Register;
