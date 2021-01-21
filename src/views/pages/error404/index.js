import Template from "./template";

let Error404 = {
  render: async () => {
    return Template();
  },
  after_render: async () => {},
};

export default Error404;
