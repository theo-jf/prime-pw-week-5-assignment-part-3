console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

console.log("Album added: ", addToCollection("Portfolio", "Grace Jones", 1977));
console.log("Album added: ", addToCollection("Going for the One", "Yes", 1977));
console.log("Album added: ", addToCollection("Kid A", "Radiohead", 2000));
console.log("Album added: ", addToCollection("In Rainbows", "Radiohead", 2007));
console.log("Album added: ", addToCollection("WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", "Billie Eilish", 2019));
console.log("Album added: ", addToCollection("IGOR", "Tyler, The Creator", 2019));
console.log("Full collection: ", collection);