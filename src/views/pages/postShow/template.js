import { CircleLoader } from "@/views/components";

export default function ({ post }) {
  const loadPost = post ? '': CircleLoader();
  return `
    <section class="section">
    ${loadPost}
      <h1> Post Id : ${ post && post.id }</h1>
      <p> Post Title : ${ post && post.title } </p>
      <p> Post Content : ${ post && post.content } </p>
      <p> Post Author : ${ post && post.name } </p>
    </section>
    `;
}
