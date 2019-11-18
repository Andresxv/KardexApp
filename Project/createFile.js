var studentName=toString(document.getElementsByClassName("dddefault")[0].innerText);
var studentEnrollment="Matriculado en "+document.getElementsByClassName("ddlabel")[12].innerText;

var message="Para mayor informacion, porfavor descargue el archivo y cárguelo en la extensión de su derecha.";
function returnName(){
    return studentName;
}
var collection=document.getElementsByClassName("dddefault");
studentName=collection[0].innerText;
var aux=0;
//var subjects=[];
var totalCred=166;
var arr=[]; 
var value=0;
var credits=0;
var multiplier=0;
Array.prototype.forEach.call(collection, function(element) {
    if(element.innerText=="UG"){ //element.colSpan == 5
        if(parseFloat(collection[aux+2].innerText)>=3 && !isNaN(collection[aux+3].innerText)&& collection[aux-2].innerText!="DEPO" && collection[aux-2].innerText!="LGAP" && collection[aux-2].innerText!="ALEA"){            
            //green
            values=collection[aux-2].innerText+"-"+collection[aux-1].innerText+"\n"+collection[aux+1].innerText+"\n"+collection[aux+2].innerText+"\n"+parseInt(collection[aux+3].innerText);
            arr.push(values.split("\n"));
            credits=credits+parseFloat(collection[aux+3].innerText);
            //La línea de arriba no va 
            multiplier=parseFloat(collection[aux+2].innerText)*parseFloat(collection[aux+3].innerText);
            value=parseFloat(value+multiplier);

        }else if(parseInt(collection[aux+2].innerText)<3){
            //red
        }else{
            //gray 
        }
        value=parseFloat(value+(parseFloat(collection[aux+2].innerText)*parseInt(collection[aux+3].innerText)));
        //values+=collection[aux-2].innerText+" "+collection[aux-1].innerText+"\n"+collection[aux+1].innerText+" "+collection[aux+2].innerText+" "+parseInt(collection[aux+3].innerText)+"\n";
    }
    aux++;
});


// Regex para capturar optativas y electivas -> opt, elec
var reOpt = /opt/i;
var reEle = /ele/i;

// Datos del estudiante a pasar por cookies
document.cookie="studentName="+studentName+"; path=/";
document.cookie="studentEnrollment="+studentEnrollment+"; path=/";

window.alert("Hola "+studentName+" \n"
+"tu promedio es: "+value+"\n"
+"has visto: "+credits+" creditos de "+totalCred+"\n"
+ message);//falta el promedio y el resto de cosas
function funcionara(){
    window.alert(message);
}

//window.alert(arr);
//Creating and downloading file
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
