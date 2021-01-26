import { CircleLoader } from "@/views/components";

function showContent(posts) {
  return `<h1> Home </h1>
          <ul>
          ${posts
            .map((item) => `<li><a href="#/p/${item.id}">${item.title}</a></li>`)
            .join("\n ")}
          </ul>`;
}

export default function ({ posts }) {
  const content = posts ? showContent(posts) : CircleLoader();
  return `
        <section class="section">
            ${content}
        </section>
    `;
}
