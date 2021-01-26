import { CircleLoader } from "@/views/components";

function showContent(post) {
  return `<h1> Post Id : ${post.id || ""}</h1>
  <p> Post Title : ${post.title || ""} </p>
  <p> Post Content : ${post.content || ""} </p>
  <p> Post Author : ${post.name || ""} </p>`;
}

export default function ({ post }) {
  const content = post ? showContent(post) : CircleLoader();
  return `
    <section class="section">
      ${content}  
    </section>
    `;
}
