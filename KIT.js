var index = 1;
myfunc2();
function myfunc2(){
    var select = document.getElementById('DropdownMenu');
    var value = select.options[select.selectedIndex].value;
    var i;
    var x = document.getElementsByClassName("Ans-Box");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[value-1].style.display = "block";
}
