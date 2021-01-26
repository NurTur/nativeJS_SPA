import Template from "./template";

let Register = {
  render: () => {
    return Template();
  },
  after_render: () => {
    document
      .getElementById("register_submit_btn")
      .addEventListener("click", () => {
        let email = (<HTMLInputElement>document.getElementById("email_input"))
          .value;
        let pass = (<HTMLInputElement>document.getElementById("pass_input"))
          .value;
        let repeatPass = (<HTMLInputElement>(
          document.getElementById("repeat_pass_input")
        )).value;

        if (pass !== repeatPass) {
          alert(`The passwords dont match`);
        } else if (email === "" || pass === "" || repeatPass === "") {
          alert(`The fields cannot be empty`);
        } else {
          alert(`User with email ${email} was successfully submitted!`);
        }
      });
  },
};

export default Register;
