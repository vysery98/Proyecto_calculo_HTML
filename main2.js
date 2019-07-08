function Sumar() {
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    

    for ( var i = n1; i<=n2; i++ ){
        var total = (6*((i)*(i)*(i)))+(4(i)(i))+((i))- (6);
         html_total= html_total+("<+r> <+d>"+i+"<X+d> <+d>"+total+"</+d></+r>");
          $("#Total").html(html_total);
    }

}