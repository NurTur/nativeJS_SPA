import Template from "./template.js";
import { getPostsList } from "./model.js";

let Home = {
  render: async () => {
    return Template({ posts: "" });
  },
  after_render: async () => {
    let posts = await getPostsList();
    return Template({ posts });
  },
};

export default Home;
