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

    invert(){
        let tempNumerator = this.numerator; 
        let tempDenominator = this.denominator; 
        this.numerator = tempDenominator; 
        this.denominator = tempNumerator; 
    }

    toString() {
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

    reduce(){
        if(this.numerator % this.denominator == 0){
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

let add = function(frac1, frac2){ //Plus to brøker
    let newFrac; 
    let newNum1; 
    let newNum2; 
    let newDen; 

    if(frac1.denominator != frac2.denominator){
        newDen = frac1.denominator * frac2.denominator; 
        newNum1 = frac1.numerator * frac2.denominator; 
        newNum2 = frac2.numerator * frac1.denominator; 
        newFrac= `${newNum1 + newNum2}/${newDen}`; 
        return newFrac; 
    }

    newFrac = `${frac1.numerator + frac2.numerator}/${frac1.denominator}`; 
    return newFrac; 
}

let sub = function(frac1, frac2){ //Træk to brøker fra hinanden
    let newFrac; 
    let newNum1; 
    let newNum2; 
    let newDen; 

    if(frac1.denominator != frac2.denominator){
        newDen = frac1.denominator * frac2.denominator; 
        newNum1 = frac1.numerator * frac2.denominator; 
        newNum2 = frac2.numerator * frac1.denominator; 
        newFrac= `${Math.abs(newNum1 - newNum2)}/${newDen}`; 
        return newFrac; 
    }

    newFrac = `${Math.abs(frac1.numerator - frac2.numerator)}/${frac1.denominator}`; 
    return newFrac; 
}

let newRational = new Rational(2,5);
let newRational1 = new Rational(7,4);
console.log(sub(newRational, newRational1)); 


// https://www.usingmaths.com/junior_secondary/javascript/multiplyfraction.php

