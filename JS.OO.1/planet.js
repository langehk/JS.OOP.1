class Planet{
    constructor(name, sidereal, synodic, ecentricity, orbit){
        this.name = name; 
        this.sidereal = sidereal; 
        this.synodic = synodic; 
        this.ecentricity = ecentricity; 
        this.orbit = orbit; 
    }
    
    toString(){

    }
}
let planetArr = [];

let sun = new Planet("Sun", 0 ,0 ,0 ,0);
let jupiter = new Planet("Jupiter", 0, 0, 0, 0);
let superSmartPlanet = new Planet("Smart Planet", 543,46457,1345,200);
let pluto = new Planet("Pluto", "11.862 years", "398.9 days", "0.048", "1.31°");
let venus = new Planet("Venus", "11.862 years", "398.9 days", "0.048", "1.41°");
let earth = new Planet("Earth", "11.862 years", "398.9 days", "0.048", "1.61°");
let saturn = new Planet("Saturn", "11.862 years", "398.9 days", "0.048", "1.31°");
let neptune = new Planet("Neptune", "11.862 years", "398.9 days", "0.048", "1.31°");
let pancake = new Planet("Pancake", "11.862 years", "398.9 days", "0.048", "1.31°");
let mars = new Planet("Mars", "11.862 years", "398.9 days", "0.048", "1.31°");

planetArr.push(sun, jupiter, superSmartPlanet, pluto, venus, earth, saturn, neptune, pancake, mars);

let radioButtons = document.getElementsByName('planet');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", function(){
        printPlanetInfo(radioButtons[i].value);
    })
    
}

function printPlanetInfo(index){
    let divelm = document.getElementById("planetinfo"); 
    divelm.innerHTML = ""; 

    let planetInfo = document.createTextNode
        (`
        Navn: ${planetArr[index].name}.
        Sidereal: ${planetArr[index].sidereal}. 
        Synodic: ${planetArr[index].synodic}. 
        Ecentricity: ${planetArr[index].ecentricity}.
        Orbit: ${planetArr[index].orbit}.
        `); 
        divelm.appendChild(planetInfo);
    
}


