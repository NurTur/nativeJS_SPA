import { CircleLoader } from "../../components";

interface IPost {
  id: any;
  title: any;
  content: any;
  name: any;
}

function showContent(post: IPost) {
  return `<h1> Post Id : ${post.id}</h1>
  <p> Post Title : ${post.title} </p>
  <p> Post Content : ${post.content} </p>
  <p> Post Author : ${post.name} </p>`;
}

export default function (post: IPost | null) {
  const content = post ? showContent(post) : CircleLoader();
  return `
    <section class="section">
      ${content}  
    </section>
    `;
}
