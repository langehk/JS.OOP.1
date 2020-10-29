class Creditcard {
  constructor(creditcardnumber, expiration, name, cvv) {
    this.creditcardnumber = creditcardnumber;
    this.expiration = expiration;
    this.name = name;
    this.cvv = cvv;
  }
}
let isValid = document.getElementById("isValid");
let validateBtn = document.getElementById("validate");

function ccNumberValidation() {
  let creditcardnumber = document.getElementById("number").value;

  let arr = Array.from(creditcardnumber.toString()).map(Number); //Vi sætter kortnummeret ind i et array
  let removedDigit = arr.splice(-1); //Vi fjerner det sidste nummer

  let sum = 0;
  arr.reverse(); //Vi vender arrayet om

  for (let i = 0; i < arr.length; i += 2) {
    //vi bruger et for-loop til at gange hver anden op
    arr[i] = arr[i] * 2;

    if (arr[i] > 9) {
      //hvis det er større end 9, skal der trækkes 9 fra
      arr[i] = arr[i] - 9;
    }
  }

  for (let y = 0; y < arr.length; y++) {
    sum += arr[y]; //Det nye array lægges sammen
  }

  sum += removedDigit[0]; //vi lægger det fjernede nummer til

  console.log(arr, "sum: " + sum);

  if (!(sum % 10 == 0)) {
    isValid.innerHTML = "Credit card isn't valid!";
    isValid.style.color = "red";
    return false;
  }
  isValid.innerHTML = "Credit card is valid!";
  isValid.style.color = "green";
  return true; //Kortnummeret er validt
}

validateBtn.addEventListener("click", ccNumberValidation);

let cvvValid = document.getElementById("cvvIsValid");
let visaOrMastercard = /^[0-9]{3}$/; // Ser om den indeholder 3 digits
let americanExpress = /^[0-9]{4}$/; // Ser om den indeholder 4 digits

// Visa & Mastercard har 3 tal
// American Express har 4.
function validateCvv() {
  let cvvInput = document.getElementById("cvvId").value;
  debugger;
  let checkVisaOrMaster = visaOrMastercard.exec(cvvInput);
  let checkAmerican = americanExpress.exec(cvvInput);
  debugger;
  if (cvvInput != checkVisaOrMaster && cvvInput != checkAmerican) {
    cvvValid.innerHTML = "CVV isn't valid";
    cvvValid.style.color = "red";
    return false;
  } else {
    cvvValid.innerHTML = "CVV is valid";
    cvvValid.style.color = "green";
    return true;
  }
}

validateBtn.addEventListener("click", validateCvv);
