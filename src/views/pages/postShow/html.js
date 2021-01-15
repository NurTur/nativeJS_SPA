export default function ({ post }) {
  return `
    <section class="section">
      <h1> Post Id : ${post && post.id || ''}</h1>
      <p> Post Title : ${post && post.title || ''} </p>
      <p> Post Content : ${post && post.content || ''} </p>
      <p> Post Author : ${post && post.name || ''} </p>
    </section>
    `;
}
