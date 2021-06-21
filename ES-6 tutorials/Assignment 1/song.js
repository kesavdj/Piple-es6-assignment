/* First assignment on variables types on songs attributes
*/

// data type - string
var song_name="Theme from Mission Impossible";
console.log("song_name :",song_name)

// data type - int
var Recorded_year=1967;
console.log("Recorded_year :", Recorded_year);

// data type - int
var released_year= 1967;
console.log("released_year :", released_year);

//data type - int
var length= 3.27;
console.log("length :", length);

//data type - object
var Track_listing={
    Side_A:"Mission: Impossible - 2:31",
    Side_b:"Jim on the Move - 3:12",
};
console.log("Track_listing :", Track_listing);
console.log("Side_b",Track_listing.Side_b);

// Data type  -string
var Songwriter="Lalo Schifrin";
console.log("Songwriter :",Songwriter);

//data type :array
var films=["Mission Impossible","Mission Impossible 2","Mission: Impossible III","Ghost Protocol","Rogue Nation","FalloutMission", "Impossible 7"];
console.log("films :",films);

// array length
console.log("No of films",films.length);

// data type boolean
console.log(Boolean(isNaN(films.length)));
console.log(Boolean(films));

//data type object
var cover_version={
    1:{recorded_by:"Jimmy Smith",year:1968},
    2:{recorded_by:"Lizzy Mercier Descloux",year:1979},
    3:{recorded_by:"Limp Bizkit's",year:2000},
    4:{recorded_by:["Kanye West","Jon Brion"],year:2008},
};
console.log(cover_version);
console.log(cover_version[1]);
console.log(cover_version[2]);
console.log(cover_version[3]);
console.log(cover_version[3].recorded_by);
console.log(cover_version[4].recorded_by);
