import { CircleLoader } from "../../components";

interface IPosts {
  id: any;
  title: any;
}

function showContent(posts: Array<IPosts>) {
  return `<h1> Home </h1>
          <ul>
          ${posts
            .map(
              (item) => `<li><a href="#/p/${item.id}">${item.title}</a></li>`
            )
            .join("\n ")}
          </ul>`;
}

export default function ( posts: Array<IPosts> | null ) {
  const content = posts ? showContent(posts) : CircleLoader();
  return `
        <section class="section">
            ${content}
        </section>
    `;
}
