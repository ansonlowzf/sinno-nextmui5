const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace(".js", "")
    .replace(".md", "")
    .replace("posts", "/posts");
  const route = path === "/index" ? "" : path;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "pages/**/*{.js}",
    "posts/*.md",
    "!pages/**/[id].js",
    "!pages/_*.js",
    "!pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
