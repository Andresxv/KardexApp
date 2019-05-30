var archivo=new XMLHttpRequest();
archivo.open("GET","subjects.txt",true);
archivo.send(null);
var txt=archivo.responseText.split("\n");
var list=new Array();
window.alert("a");
for(var i=0;i<txt.length;i++){
    let obj= {name:txt[i], semester, color, credits, code, note};
    list.push(obj);
}
window.alert(list.length);