import Template from "./template";

let Register = {
  render: () => {
    return Template();
  },
  after_render: () => {
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
