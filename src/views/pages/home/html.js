export default function ({posts}) {
  return `
        <section class="section">
            <h1> Home </h1>
            <h1> Home2 </h1>
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
