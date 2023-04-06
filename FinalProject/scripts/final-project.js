//WEATHER API
    // SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town')
const myGraphic = document.querySelector('#graphic')
const myDescription = document.querySelector('#description')
const myTemperature = document.querySelector('#temperature')

const townName = "Rigby"
const myKey = "595ac2cc14ab1d9e32e1f8e790eaf129"
const myURL = `//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}&units=imperial`;

fetch(myURL)
    .then((response) => response.json())
    .then((data) => displayData(data));

    function displayData(data) {
        // console.log(data)
        myTown.innerHTML = data.name
        myGraphic.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        myGraphic.alt = data.weather[0].main
        myDescription.innerHTML = data.weather[0].description
        myTemperature.innerHTML = `${data.main.temp}&deg;F`
    }
//END OF WEATHER APP


//NUMBER OF PAGE VISTS JS
    //INITIALIZE DISPLAY ELEMENTS
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

    //GET THE STORED VALUE IN LOCALSTORAGE
let numVisits = Number(window.localStorage.getItem("visits-ls"));

    //DETERMINE IF THIS IS THE FIRST VISIT OR DISPLAY THE NUMBER OF VISITS.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
    //INCREMENT THE NUMBER OF VISITS
numVisits++;
    //STORE THE NEW NUMBER OF VISITS VALUE
localStorage.setItem("visits-ls", numVisits);

// END NUMBER OF PAGE VISITS JS


// GETDATES FOR FOOTER JS 
const d = new Date();
let year = d.getFullYear();
document.getElementById("newDate").innerHTML = year;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date; 
// END GETDATES FOR FOOTER JS 
