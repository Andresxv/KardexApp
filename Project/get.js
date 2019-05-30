function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    tableData.forEach(function(rowData) {
    var row = document.createElement('tr');
    rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
    });
    tableBody.appendChild(row);
    });  
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

var nameStudent = document.getElementsByClassName("dddefault")[0].innerText;
var values=nameStudent+"Matriculado en "+document.getElementsByClassName("ddlabel")[12].innerText;
var collection=document.getElementsByClassName("dddefault");
var aux=0;
var subjects=[];
var arr=[];
Array.prototype.forEach.call(collection, function(element) {
    if(element.innerText=="UG"){ //element.colSpan == 5

        if(parseInt(collection[aux+2].innerText)>=3 && !isNaN(collection[aux+3].innerText)){            
            //green
            values=collection[aux-2].innerText+"-"+collection[aux-1].innerText+"\n"+collection[aux+1].innerText+"\n"+collection[aux+2].innerText+"\n"+parseInt(collection[aux+3].innerText);
            arr.push(values.split("\n"));
            //La línea de arriba no va 
        }else if(parseInt(collection[aux+2].innerText)<3){
            //red
        }else{
            //gray 
        }
        //values+=collection[aux-2].innerText+" "+collection[aux-1].innerText+"\n"+collection[aux+1].innerText+" "+collection[aux+2].innerText+" "+parseInt(collection[aux+3].innerText)+"\n";
    }
    aux++;
});
window.alert(arr);
createTable(arr);