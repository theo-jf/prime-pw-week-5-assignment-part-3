console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracksArray) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracksArray
    }
    collection.push(album);
    return album;
}

console.log("Album added: ", addToCollection("'Portfolio'", "Grace Jones", 1977, tracks = [["'Send in the Clowns'", "7:33"], ["'What I Did for Love'", "5:15"], ["Tomorrow", "5:48"], 
                                                                                            ["'La Vie en rose'", "7:27"], ["'Sorry'", "3:58"], ["'That's the Trouble'", "3:36"], 
                                                                                            ["'I Need a Man'", "3:23"]]));
console.log("Album added: ", addToCollection("'Going for the One'", "Yes", 1977, tracks = [["'Going for the One'", "5:32"], ["'Turn of the Century'", "7:55"], ["Parallels", "5:58"], 
                                                                                            ["'Wonderous Stories'", "3:49"], ["'Awaken'", "15:34"]]));
console.log("Album added: ", addToCollection("'Kid A'", "Radiohead", 2000, tracks = [["'Everything in Its Right Place'", "4:11"], ["'Kid A'", "4:44"], ["The National Anthem", "5:51"], 
                                                                                        ["'How to Disappear Completely'", "5:56"], ["'Treefingers'", "3:42"], ["'Optimistic'", "5:15"], 
                                                                                        ["'In Limbo'", "3:31"], ["'Idioteque'", "5:09"], ["'Morning Bell'", "4:35"], 
                                                                                        ["'Motion Picture Soundtrack'", "3:20"], ["'Untitled'", "0:52"]]));
console.log("Album added: ", addToCollection("'In Rainbows'", "Radiohead", 2007, tracks = [["'15 Step'", "3:57"], ["'Bodysnatchers'", "4:02"], ["Nude", "4:15"], 
                                                                                            ["'Weird Fishes/ Arpeggi'", "5:18"], ["'All I Need'", "3:48"], ["'Faust Arp'", "2:09"], 
                                                                                            ["'Reckoner'", "4:50"], ["'House of Cards'", "5:28"], ["'Jigsaw Falling Into Place'", "4:08"], 
                                                                                            ["'Videotape'", "4:39"]]));
console.log("Album added: ", addToCollection("'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?'", "Billie Eilish", 2019, tracks = [["'!!!!!!!'", "0:13"], ["'bad guy'", "3:14"], ["xanny", "4:03"], 
                                                                                                                            ["'you should see me in a crown'", "3:00"], ["'all the good girls go to hell'", "2:48"], 
                                                                                                                            ["'wish you were gay'", "3:41"], ["'when the party's over'", "3:16"], ["'8'", "2:53"], 
                                                                                                                            ["'my strange addiction'", "2:59"], ["'bury a friend'", "3:13"], ["'ilomilo'", "2:36"], 
                                                                                                                            ["'listen before i go'", "4:02"], ["'i love you'", "4:51"], ["'goodbye'", "1:59"]]));
console.log("Album added: ", addToCollection("'IGOR'", "Tyler, The Creator", 2019, tracks = [["'IGOR'S THEME'", "3:20"], ["'EARFQUAKE'", "3:10"], ["I THINK", "3:32"], 
                                                                                                ["'EXACTLY WHAT YOU RUN FROM YOU END UP CHASING'", "0:14"], ["'RUNNING OUT OF TIME'", "2:57"], 
                                                                                                ["'NEW MAGIC WAND'", "3:15"], ["'A BOY IS A GUN*'", "3:30"], ["'PUPPET'", "2:59"], 
                                                                                                ["'WHAT'S GOOD'", "3:25"], ["'GONE, GONE / THANK YOU'", "6:15"], ["'I DON'T LOVE YOU ANYMORE'", "2:41"], 
                                                                                                ["'ARE WE STILL FRIENDS?'", "4:25"]]));
console.log("Full collection: ", collection);

function showCollection(array) {
    console.log("Number of items in collection: ", array.length);
    console.log("Items:")
    for (let i = 0; i < array.length; i++) {
        let tracks = array[i].tracks;
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}:`);
        for (let i = 0; i < tracks.length; i++) {
            console.log(`${i + 1}. ${tracks[i][0]}: ${tracks[i][1]}`);
        }
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
    let results = [];
    let trackResults;
    if (object === undefined || Object.keys(object).length === 0) {
        return collection;
    }  
    for (let i = 0; i < collection.length; i++) {
        if (Object.keys(object).length === 1) {
            if (object.artist === collection[i].artist) {
                results.push(collection[i]);
            } else if (object.year === collection[i].yearPublished) {
                results.push(collection[i]);
            } else {
                let tracks = collection[i].tracks;
                for (j = 0; j < tracks.length; j++) {
                    if (object.trackName === tracks[j][0]) {
                        results.push([tracks[j][0], collection[i]]);
                    }
                }
            }
        } else if (Object.keys(object).length === 2) {
            if (object.artist === collection[i].artist && object.year === collection[i].yearPublished) {
                results.push(collection[i]);
            } else if (object.year === collection[i].yearPublished || object.artist === collection[i].artist) {
                let tracks = collection[i].tracks;
                for (j = 0; j < tracks.length; j++) {
                    if (object.trackName === tracks[j][0]) {
                        results.push([tracks[j][0], collection[i]]);
                    }
                }
            }
        } else if (Object.keys(object).length === 3) {
            if (object.artist === collection[i].artist && object.year === collection[i].yearPublished) {
                let tracks = collection[i].tracks;
                for (j = 0; j < tracks.length; j++) {
                    if (object.trackName === tracks[j][0]) {
                        results.push([tracks[j][0], collection[i]]);
                    }
                }
            }
        }
    }
    return results;
}

let emptyObject = {
}

let incorrectObject1 = {
    time: "Radiohead"
}

let incorrectObject2 = {
    artist: "Radiohead",
    day: 2007
}

let incorrectObject3 = {
    artist: "Radiohead",
    year: 2007,
    name: "'Videotape'"
}

let searchObject1 = {
    trackName: "'RUNNING OUT OF TIME'"
}

let searchObject1Point5 = {
    year: 1977
}

let searchObject2 = {
    artist: "Radiohead",
    year: 2000
}

let searchObject3 = {
    artist: "Radiohead",
    year: 2007,
    trackName: "'Videotape'"
}



console.log("Search without input, expecting full collection: ", search());
console.log("Search with empty object, expecting full collection: ", search(emptyObject));
console.log("Search with objects containing incorrect search parameters, expecting 3 empty arrays: ", search(incorrectObject1));
console.log(search(incorrectObject2));
console.log(search(incorrectObject3));
console.log("Search with object containing 1 correct trackName parameter, expecting 'RUNNING OUT OF TIME' from 'IGOR' by Tyler, The Creator: ", search(searchObject1));
console.log("Search with object containing 1 correct year parameter, expecting 'Portfolio' by Grace Jones and 'Going for the One' by Yes: ", search(searchObject1Point5));
console.log("Search with object containing 2 correct parameters, expecting 'Kid A' by Radiohead: ", search(searchObject2));
console.log("Search with object containing 3 correct parameters, expecting 'Videotape' from 'In Rainbows' by Radiohead: ", search(searchObject3));

