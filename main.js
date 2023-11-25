async function findWebsitesFromTLD(TLD) {
    const searchURL = `https://corsproxy.io/?${encodeURIComponent(`https://html.duckduckgo.com/html/?q=site:www.${TLD}`)}`;
    const response = await fetch(searchURL);
    const html = await response.text();
    const results = html.match(/<a class="result__url" href="([^"]+)">/g)
        .map((match) => match.match(/<a class="result__url" href="([^"]+)">/)[1].split('/')[0]);
    return results;
}
