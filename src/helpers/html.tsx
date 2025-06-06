export function decodeHtml(html: string) {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
}
