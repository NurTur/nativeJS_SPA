import Html from "./html.js";
import { getPostsList } from "./model.js";

let Home = {
  render: async () => {
    return Html({ posts: "" });
  },
  after_render: async () => {
    let posts = await getPostsList();
    return Html({ posts });
  },
};

export default Home;
