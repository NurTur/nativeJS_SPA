import Template from "./template";

let Error404 = {
  render: () => {
    return Template();
  },
  after_render: () => {},
};

export default Error404;
