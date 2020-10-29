class Creditcard{
    constructor(creditcardnumber, expiration, name, cvv){
        this.creditcardnumber = creditcardnumber; 
        this.expiration = expiration; 
        this.name = name; 
        this.cvv = cvv; 
    }
}

function ccNumberValidation(){
    let creditcardnumber = document.getElementById('creditcardnumber').value; 
    
    
    let arr = Array.from(creditcardnumber.toString()).map(Number); //Vi sætter kortnummeret ind i et array
    let removedDigit = arr.splice(-1);  //Vi fjerner det sidste nummer
    
    let sum = 0; 
    arr.reverse(); //Vi vender arrayet om 
    
    for(let i = 0; i < arr.length; i+=2){ //vi bruger et for-loop til at gange hver anden op
        arr[i] = arr[i]*2; 

        if(arr[i] > 9 ){ //hvis det er større end 9, skal der trækkes 9 fra
            arr[i]= arr[i] - 9;
        }
        
        
    }

    for(let y = 0; y < arr.length; y++){
      
        sum += arr[y]; //Det nye array lægges sammen
    }

    sum += removedDigit[0]; //vi lægger det fjernede nummer til

    console.log(arr, "sum: " + sum);
debugger;
    if(sum%10 == 0){
        return true; //Kortnummeret er validt
    }
    else{
        return false; 
    }

    
    
}

ccNumberValidation();
//https://www.dcode.fr/luhn-algorithm
