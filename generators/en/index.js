const wiktionary = require("wiktionary");

async function getData ()
{
    const wiktionaryEntry = await wiktionary('Appendix:English given names', 'en');
    return wiktionaryEntry.html
        .match(/<li>\w* - [\w\/, ]*<\/li>/g)
        .map(li => li.replace(/<\/?li>/g, ''))
        .map(line => line.split(/ - |, |\//));
}

module.exports = getData;
