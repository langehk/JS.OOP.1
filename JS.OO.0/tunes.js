'use strict'

class Tune {
    constructor(title, composer, year, performers){
        this.title = title;
        this.composer = composer;
        this.year = year;
        this.performers = [performers]; 
    }
/*
    addTune(title, composer, year, performers){
        let tune = new Tune(title, composer, year, performers); 
        let tunesArr = []; 
        tunesArr.push(tune); 
    }*/

    toString(){
        return `${this.title}`; 
    }
}

let tuneArr = []; 
let submit = document.getElementById('submit');
let divelm = document.getElementById('tunes');

function printTunes(arr){
    for (let i = 0; i < arr.length; i++) {
        
        //let txt = arr[i].title;
        let p = document.createElement('p');
        let title = document.createTextNode(`Title: ${arr[i].title}. `);
        let composer = document.createTextNode(`Composer: ${arr[i].composer}. `);
        let year = document.createTextNode(`Year: ${arr[i].year}. `);
        let performers = document.createTextNode(`Performers: ${arr[i].performers}.`);
        debugger;
        p.appendChild(title);
        p.appendChild(composer);
        p.appendChild(year);
        p.appendChild(performers);
        
        p.style.marginBottom = "20px";
        divelm.appendChild(p);  
    }
}



submit.addEventListener("click", function(){
    let title = document.getElementById('title').value;
    let composer = document.getElementById('composer').value;
    let year = document.getElementById('year').value;
    let performers = document.getElementById('performers').value;
    let tune = new Tune(title, composer, year, performers); 
    tuneArr.push(tune);
    tune.performers.push("test");
    
    divelm.innerHTML = "";
    
    printTunes(tuneArr);
    debugger;
});


