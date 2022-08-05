window.onload = () => {
  let url = document.baseURI
  const websites = [["google.", "search?"], ["bing.", "search?"], ["yandex.", "q="], ["duckduckgo.", "q="]];
  let website;
  for (const i of websites) {
    if (url.includes(i[0]) && url.includes(i[1])) {
      console.log(i);
      website = i[0].split(".")[0]
      break
    }
  }
}