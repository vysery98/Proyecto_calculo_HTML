function Sumar() {
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;

    var total = parseInt(n1)  + parseInt(n2)*2;

    $("#total").html(total);

}