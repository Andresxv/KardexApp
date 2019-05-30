var student=document.getElementsByClassName("dddefault")[0].innerText+"\nMatriculado en "+document.getElementsByClassName("ddlabel")[12].innerText+"\n\n\nPorfavor descargue el archivo y cárguelo en la extensión de su derecha.";
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
window.alert(student);//falta el promedio y el resto de cosas
window.alert(arr);
let csvContent = "data:text/csv;charset=utf-8," 
    + arr.map(e => e.join(",")).join("\n");
//var encodedUri = encodeURI(csvContent);
//window.open(encodedUri);
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); // Required for FF

link.click(); // This will download the data file named "my_data.csv".

//var blob = new Blob(["This is my first text."], {type: "text/plain;charset=utf-8"});
//saveAs(blob, "testfile21.txt");
