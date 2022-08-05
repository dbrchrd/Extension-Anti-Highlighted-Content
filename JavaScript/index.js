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
  switch (website) {
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

    default:
      break;
  }
}