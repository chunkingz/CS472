
const calcTip = () => {
    let subTotal = document.forms["tipForm"]["subtotal"].value;
    const percentageTip = document.forms["tipForm"]["tip"].value;
    if(percentageTip > 0) {
        subTotal = parseFloat(subTotal) + subTotal * percentageTip / 100;
    } 
    document.getElementById("total").innerHTML = "$"+subTotal;
}
