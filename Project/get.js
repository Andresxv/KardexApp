var ia = document.getElementsByClassName("dddefault")[0].innerText;
var dddefault=document.getElementsByClassName("dddefault");
for(var i=21; i<document.getElementsByClassName("dddefault").length;i+=8){
    ia+=document.getElementsByClassName("dddefault")[i].innerText+"  \n";
}
window.alert(ia);