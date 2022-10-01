function calc (val) {
    document.getElementById("textField").value+=val
    
}
function evall () {
    let numberToCalc = document.getElementById("textField").value;
    let result=eval(numberToCalc);
    document.getElementById("textField").value=result
    
}
function clearScreen(){
    document.getElementById("textField").value=""
    console.log("cleared");
}