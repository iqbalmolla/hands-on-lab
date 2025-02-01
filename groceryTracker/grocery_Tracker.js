let grocery_1_amt;
let grocery_2_amt;
let grocery_3_amt;

function calculateTotalAmount() {
    grocery_1_amt=parseFloat(document.getElementById("grocery_1_amt").value);
    grocery_2_amt=parseFloat(document.getElementById("grocery_2_amt").value);
    grocery_3_amt=parseFloat(document.getElementById("grocery_3_amt").value);

let totalAmount = grocery_1_amt+grocery_2_amt+grocery_3_amt;

    document.getElementById("result").innerText=`The total amount is: ${totalAmount}`;
}