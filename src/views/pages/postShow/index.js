import Template from "./template.js";
import Utils from "./../../../services/Utils.js";
import { getPost } from "./model.js";

let PostShow = {
  render: async () => {
    return Template({ post: '' });
  },
  after_render: async () => {
    let request = Utils.parseRequestURL();
    let post = await getPost(request.id);
    return Template({ post });
  },
};

export default PostShow;
