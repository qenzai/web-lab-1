function findLongestWord() {
    let text = document.getElementById("textInput").value;
    let words = text.split(/\s+/);
    let longest = words.reduce((a, b) => (a.length > b.length ? a : b), "");
    document.getElementById("output").innerText = `Найдовше слово: "${longest}" (${longest.length} літер)`;
}