import { CircleLoader } from "@/views/components";

export default function ({posts}) {
  const loadPosts = posts ? '': CircleLoader();
  return `
        <section class="section">
            <h1> Home </h1>
            ${loadPosts}
            <ul>
                ${
                  posts &&
                  posts
                    .map(
                      (post) =>
                        `<li><a href="#/p/${post.id}">${post.title}</a></li>`
                    )
                    .join("\n ")
                }
            </ul>
        </section>
    `;
}
