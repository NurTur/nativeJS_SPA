import Html from "./html.js";
import Utils from "./../../../services/Utils.js";
import { getPost } from "./model.js";

let PostShow = {
  render: async () => {
    return Html({ post: '' });
  },
  after_render: async () => {
    let request = Utils.parseRequestURL();
    let post = await getPost(request.id);
    return Html({ post });
  },
};

export default PostShow;
