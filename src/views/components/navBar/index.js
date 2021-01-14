import Html from "./html.js";

let NavBar = {
  before_render: async () => { console.log('tttttttttttt1 '); },
  render: async () => {
    console.log('tttttttttttt2 ');
    return Html();
  },
  after_render: async () => { console.log('tttttttttttt3 '); },
};

export default NavBar;
