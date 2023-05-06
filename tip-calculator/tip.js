
const calcTip = () => {
    let subTotal = document.getElementById("subtotal").value;
    const percentageTip = document.getElementById("tip").value;
    if(percentageTip > 0) {
        subTotal = parseFloat(subTotal) + subTotal * percentageTip / 100;
    } 
    document.getElementById("total").innerHTML = "$"+subTotal;
}
