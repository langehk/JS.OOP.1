class Creditcard{
    constructor(creditcardnumber, expiration, name, cvv){
        this.creditcardnumber = creditcardnumber; 
        this.expiration = expiration; 
        this.name = name; 
        this.cvv = cvv; 
    }
}

function creditCardValidation(){
    //let creditcardnumber = document.getElementById('creditcardnumber'); 
    let creditcardnumber = 123465798;
    let arr = Array.from(creditcardnumber.toString()).map(Number);
    let newArr = arr.splice(-1,1); 
    newArr.reverse(); 

    console.log(newArr);
    
}

creditCardValidation();
//https://www.dcode.fr/luhn-algorithm
