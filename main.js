/**
 * Finds websites from a top-level domain (TLD).
 *
 * @param {string} TLD - The top-level domain to search for.
 * @returns {Promise<string[]>} - A promise that resolves to an array of website URLs.
 */
async function findWebsitesFromTLD(TLD) {
    const searchURL = 'https://corsproxy.io/?' + encodeURIComponent(`https://html.duckduckgo.com/html/?q=site:www.${TLD}`); // apparantly duckduckgo is unhappy with cors
    console.log('Searching URL:', searchURL);

    const response = await fetch(searchURL);
    console.log('Response:', response);

    const html = await response.text();
    console.log('HTML:', html);

    const urlRegex = /<a class="result__url" href="([^"]+)">/g;
    const results = Array.from(html.matchAll(urlRegex), match => match[1].split('/')[0]);

    console.log('Results:', results);
    return results;
}
