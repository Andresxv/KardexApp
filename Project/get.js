var nameStudent = document.getElementsByClassName("dddefault")[0].innerText;
var values=nameStudent+"\nMatriculado en "+document.getElementsByClassName("ddlabel")[12].innerText+"\n";
var collection=document.getElementsByClassName("dddefault");
var aux=0;
Array.prototype.forEach.call(collection, function(element) {
    if(element.innerText=="UG"){ //element.colSpan == 5
        values+=collection[aux-2].innerText+" "+collection[aux-1].innerText+"\n"+collection[aux+1].innerText+" "+collection[aux+2].innerText+" "+parseInt(collection[aux+3].innerText)+"\n";
    }
    aux++;
});
window.alert(values);