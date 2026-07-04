const docsRoot = document.querySelector("#docsMarkdown");
const docsNav = document.querySelector("#docsNav");

function openExternalLinksInNewTabs(root = document) {
  root.querySelectorAll('a[href^="http://"], a[href^="https://"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function appendInlineMarkdown(target, text) {
  const tokens = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let cursor = 0;
  for (const match of text.matchAll(tokens)) {
    target.append(document.createTextNode(text.slice(cursor, match.index)));
    const value = match[0];
    if (value.startsWith("`")) {
      const code = document.createElement("code");
      code.textContent = value.slice(1, -1);
      target.append(code);
    } else if (value.startsWith("**")) {
      const strong = document.createElement("strong");
      appendInlineMarkdown(strong, value.slice(2, -2));
      target.append(strong);
    } else {
      const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(value);
      const href = linkMatch ? linkMatch[2].trim() : "";
      if (/^(https:\/\/|http:\/\/|\/|#|\?)/.test(href)) {
        const link = document.createElement("a");
        link.href = href;
        appendInlineMarkdown(link, linkMatch[1]);
        target.append(link);
      } else {
        target.append(document.createTextNode(linkMatch ? linkMatch[1] : value));
      }
    }
    cursor = match.index + value.length;
  }
  target.append(document.createTextNode(text.slice(cursor)));
}

function isMarkdownBlockStart(line) {
  return /^(#{1,3}\s+|[-*]\s+|\d+\.\s+|>\s?|```)/.test(line);
}

function createMarkdownNode(tagName, text) {
  const node = document.createElement(tagName);
  appendInlineMarkdown(node, text.trim());
  return node;
}

function renderMarkdown(markdown) {
  const fragment = document.createDocumentFragment();
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }
    if (line.startsWith("```")) {
      const codeLines = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) codeLines.push(lines[index++]);
      index += 1;
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      code.textContent = codeLines.join("\n");
      pre.append(code);
      fragment.append(pre);
      continue;
    }
    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      fragment.append(createMarkdownNode(`h${heading[1].length}`, heading[2]));
      index += 1;
      continue;
    }
    const list = /^([-*]|\d+\.)\s+(.+)$/.exec(line);
    if (list) {
      const isOrdered = /\d+\./.test(list[1]);
      const node = document.createElement(isOrdered ? "ol" : "ul");
      while (index < lines.length) {
        const pattern = isOrdered ? "^\\d+\\.\\s+(.+)$" : "^[-*]\\s+(.+)$";
        const item = new RegExp(pattern).exec(lines[index]);
        if (!item) break;
        node.append(createMarkdownNode("li", item[1]));
        index += 1;
      }
      fragment.append(node);
      continue;
    }
    const paragraph = [];
    while (index < lines.length && lines[index].trim() && !isMarkdownBlockStart(lines[index])) paragraph.push(lines[index++]);
    fragment.append(createMarkdownNode("p", paragraph.join(" ")));
  }
  return fragment;
}

function fallbackManifest() {
  try {
    return JSON.parse(document.querySelector("#docsManifestFallback")?.textContent || "{}");
  } catch {
    return { pages: [] };
  }
}

async function loadManifest() {
  if (location.protocol === "file:") return fallbackManifest();
  try {
    const response = await fetch("manifest.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("manifest");
    return await response.json();
  } catch {
    return fallbackManifest();
  }
}

function pageFromUrl(pages) {
  const requested = new URLSearchParams(location.search).get("page") || "index";
  return pages.find((page) => page.id === requested) || pages[0];
}

async function loadMarkdown(page) {
  const fallback = document.querySelector(`[data-doc-page="${page.id}"]`)?.textContent.trim() || "";
  if (location.protocol === "file:") return fallback;
  try {
    const response = await fetch(page.src, { cache: "no-cache" });
    if (!response.ok) throw new Error("markdown");
    return await response.text();
  } catch {
    return fallback;
  }
}

function renderNav(pages, activePage) {
  docsNav.replaceChildren(
    ...pages.map((page) => {
      const link = document.createElement("a");
      link.href = page.id === "index" ? "index.html" : `index.html?page=${encodeURIComponent(page.id)}`;
      link.textContent = page.title;
      if (page.id === activePage.id) link.setAttribute("aria-current", "page");
      return link;
    })
  );
}

async function renderPage(page, pages) {
  renderNav(pages, page);
  const markdown = await loadMarkdown(page);
  docsRoot.replaceChildren(renderMarkdown(markdown || "# Missing documentation"));
  openExternalLinksInNewTabs(docsRoot);
  document.title = page.id === "index" ? "Quartz Documentation" : `Quartz Docs - ${page.title}`;
}

async function bootDocs() {
  const manifest = await loadManifest();
  const pages = Array.isArray(manifest.pages) ? manifest.pages.filter((page) => page.id && page.title && page.src) : [];
  if (!pages.length) {
    docsRoot.textContent = "Documentation could not be loaded.";
    return;
  }
  await renderPage(pageFromUrl(pages), pages);
}

bootDocs();
