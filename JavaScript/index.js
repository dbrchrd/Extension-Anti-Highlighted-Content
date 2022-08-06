const websites = [["google.", "search?"], ["bing.", "search?"], ["yandex.", "q="], ["duckduckgo.", "q="]];

window.onload = () => {
  let url = document.baseURI
  const isSearchEngine = () => {
    for (const i of websites)
      (url.includes(i[0]) && url.includes(i[1])) ? i[0].split(".")[0] : null;
  }

  switch (isSearchEngine()) {
    case "google":
      document.querySelectorAll(".Pm5mre").forEach(el => { el.remove() })
      break;
    case "bing":
      document.querySelectorAll(".b_ad").forEach(el => { el.remove() })
      break;
    case "yandex":
      document.querySelectorAll(".serp-item").forEach(el => {
        if (el.attributes.length > 4) {
          el.remove()
        }
      })
      break;
    case "duckduckgo":
      document.querySelectorAll("#ads").forEach(el => { el.remove() })
      break;
  }
}