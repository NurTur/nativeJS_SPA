import Utils from "@/services/Utils";
import Template from "./template";
import { getPost } from "./model";

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
