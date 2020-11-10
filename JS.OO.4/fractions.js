'use strict';

class Rational {
    constructor(numerator, denominator) {
      this.numerator = numerator; 
      this.denominator = denominator; 

      if(numerator == null || denominator == null){
        return new Rational(0,1);
        
        }
    }

    negate(){
        if(Math.sign(this.numerator) == 1 ){ //Hvis numerator er positiv
            this.numerator = -Math.abs(this.numerator)
            return this.numerator;
        }

        if(Math.sign(this.numerator) == -1 ){ //Hvis numerator er negativ
            this.numerator = Math.abs(this.numerator)
            return this.numerator;
        }
    }

    invert(){ //Brøken vendes om
        let tempNumerator = this.numerator; 
        let tempDenominator = this.denominator; 
        this.numerator = tempDenominator; 
        this.denominator = tempNumerator; 
    }

    toString() { //Brøken skrives, som vi kender det, fx 2/5 
        let fraction;
        if(this.denominator == 1){
            fraction = `${this.numerator}`; 
            return fraction; 

        }
        fraction = `${this.numerator}/${this.denominator}`; 
        return fraction;
    }

    toFloat(){
        let float = this.numerator/this.denominator; 
        float = float.toFixed(2);
        return float; 
    }

    reduce(){ //Brøken reduceres så meget som muligt
        if(this.numerator % this.denominator == 0){ //Hvis brøken er et helt tal returneres dette
            this.numerator = this.numerator/this.denominator; 
            return this.numerator; 
        }

        while(this.numerator % 2 == 0 && this.denominator % 2 == 0){
            
            this.numerator = this.numerator / 2; 
            this.denominator = this.denominator / 2;
            return this.toString(); 
        }

    }

}

/*
frac1 = den ene brøk (Rational objekt)
frac2 = den anden brøk (Rational objekt)
*/
let add = function(frac1, frac2){ //Plus to brøker
    let newFrac; 
    let newNum1; 
    let newNum2; 
    let newDen; 

    if(frac1.denominator != frac2.denominator){ //Hvis denominators ikke er det samme
        newDen = frac1.denominator * frac2.denominator; //For at få denominator til at være det samme i begge brøker
        newNum1 = frac1.numerator * frac2.denominator; //Vi ganger på kryds
        newNum2 = frac2.numerator * frac1.denominator; //Vi ganger på kryds
        newFrac= `${newNum1 + newNum2}/${newDen}`; //Numerators kan lægges til hinanden
        return newFrac; 
    }

    newFrac = `${frac1.numerator + frac2.numerator}/${frac1.denominator}`; 
    return newFrac; 
}

/*
frac1 = den ene brøk (Rational objekt)
frac2 = den anden brøk (Rational objekt)
*/
let sub = function(frac1, frac2){ //Træk to brøker fra hinanden
    let newFrac; 
    let newNum1; 
    let newNum2; 
    let newDen; 

    if(frac1.denominator != frac2.denominator){ //Hvis denominators ikke er det samme
        newDen = frac1.denominator * frac2.denominator; //For at få denominator til at være det samme i begge brøker
        newNum1 = frac1.numerator * frac2.denominator; //Vi ganger på kryds
        newNum2 = frac2.numerator * frac1.denominator;  //Vi ganger på kryds
        newFrac= `${Math.abs(newNum1 - newNum2)}/${newDen}`; //Toppen af brøkerne kan trækkes fra hinanden 
        return newFrac; 
    }

    newFrac = `${Math.abs(frac1.numerator - frac2.numerator)}/${frac1.denominator}`; 
    return newFrac; 
}

/*
https://www.mathsisfun.com/fractions_multiplication.html

frac1 = den ene brøk (Rational objekt)
frac2 = den anden brøk (Rational objekt)
*/

let mul = function(frac1, frac2){ //Gange to brøker

    let mulFrac = new Rational((frac1.numerator * frac2.numerator), (frac1.denominator * frac2.denominator)); 
    mulFrac.reduce(); //Vi kalder funktionen i objektet for at reducere brøken
    return mulFrac.toString(); //Vi skriver brøken pænt ud

}

/*
https://www.mathsisfun.com/fractions_division.html

frac1 = den ene brøk (Rational objekt)
frac2 = den anden brøk (Rational objekt)
*/

let div = function(frac1, frac2){

    frac2.invert(); //Vi vender den ene brøk om
    let dividFrac = mul(frac1, frac2); //Vi kalder vores gange-funktion
    return dividFrac; 

}

let newRational = new Rational(2,5);
let newRational1 = new Rational(7,4);
console.log(div(newRational, newRational1)); 


// https://www.usingmaths.com/junior_secondary/javascript/multiplyfraction.php

