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

console.log("Album added: ", addToCollection("'Portfolio'", "Grace Jones", 1977));
console.log("Album added: ", addToCollection("'Going for the One'", "Yes", 1977));
console.log("Album added: ", addToCollection("'Kid A'", "Radiohead", 2000));
console.log("Album added: ", addToCollection("'In Rainbows'", "Radiohead", 2007));
console.log("Album added: ", addToCollection("'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?'", "Billie Eilish", 2019));
console.log("Album added: ", addToCollection("'IGOR'", "Tyler, The Creator", 2019));
console.log("Full collection: ", collection);

function showCollection(array) {
    console.log("Number of items in collection: ", array.length);
    console.log("Items:")
    for (let i = 0; i < array.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    }
}

showCollection(collection);

function findByArtist(artist) {
    results = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            results.push(collection[i]);
        }
    }
    return results;
}

console.log("Collection items by 'Radiohead': ", findByArtist("Radiohead"));
console.log("Collection items by 'Fiona Apple': ", findByArtist("Fiona Apple"));
console.log("Collection items by 'Grace Jones': ", findByArtist("Grace Jones"));

function search(object) {
    results = [];
    if (object === undefined || Object.keys(object).length === 0) {
        return collection;
    }
    for (let i = 0; i < collection.length; i++) {
        if (object.artist === collection[i].artist && object.year === collection[i].yearPublished) {
            results.push(collection[i]);
        }
    }
    return results;
}

let emptyObject = {
}

let incorrectObject = {
    artist: "Radiohead",
    day: 2007
}

let searchObject = {
    artist: "Radiohead",
    year: 2007
}

console.log("Search without input, expecting full collection: ", search());
console.log("Search with empty object, expecting full collection: ", search(emptyObject));
console.log("Search with object containing incorrect search parameters, expecting empty array: ", search(incorrectObject));
console.log("Search with object with correct parameters, expecting 'In Rainbows' by Radiohead: ", search(searchObject));

