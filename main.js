/* global $*/ /*global warn*/ 

$(document).ready(function(){
   var test = confirm("Is this website is working?");
    if(test == true){
        alert("Great!");
    } else {
        alert("Not so great!");
    }
});
$('#button1').on('click', function(){
 var list = $("#text").val();

 $('table').append(list);

});
    function math(a) {
 var a = prompt("What do you wan to multiply first?");
 var b = prompt("What do you want to multiply second?");
    var square = a * b;
    
     alert(square);
}


