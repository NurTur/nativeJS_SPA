import Template from "./template";
import { getPostsList } from "./model";

let Home = {
  render: () => {
    return Template(null);
  },
  after_render: async () => {
    let posts = await getPostsList();
    return Template(posts);
  },
};

export default Home;
