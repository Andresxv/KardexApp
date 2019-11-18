
function loadTable(element) {
    var allSemesters;
    //var name=returnName;
    var semester1=["HUMANISMO Y CULTURA CIUDADANA", "LÓGICA DE PROGRAMACIÓN","INT. INGEN. SISTEMAS E INFORM","CALCULO DIFERENCIAL","GEOMETRIA Y TRIGONOMETRIA"]
    var semester2=["PROGRAMACION I","MECÁNICA","LENGUA Y CULTURA","CALCULO INTEGRAL","GEOMETRIA ANALITICA"]
    var semester3=["PROGRAMACIÓN II","ÉTICA GENERAL","ELECTRICIDAD Y MAGNETISMO","CALCULO MULTIVARIABLE","ALGEBRA LINEAL","MATEMÁTICAS DISCRETAS I"]
    allSemesters=[semester1,semester2,semester2]
    //document.write(name);
    for (var semestre = 1; semestre < 4; semestre++) {

        dos(element, semestre,allSemesters[semestre-1])
    }
}
function dos(element, semestre, allSemesters){
    var file = element.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (e) {
            var rawLog = reader.result;
            var tableData = CSVToArray(reader.result);
            var table = document.createElement('table');
            var tableBody = document.createElement('tbody');
            var headerList = ["CÓDIGO", "NOMBRE", "NOTA", "CRÉDITOS"];
            var masterHeaderList = ["Semestre I", "Semestre II", "Semestre III", "Semestre IV", "Semestre V", "Semestre VI", "Semestre VII", "Semestre VIII", "Semestre IX", "Semestre X"];
           // for (var semestre = 1; semestre < 11; semestre++) {
                var tr = document.createElement('tr'); // Header row
                var th = document.createElement('th');
                th.className = "pricing-table-header-medium";
                th.style = " padding: 15px";
                var text = document.createTextNode(masterHeaderList[semestre-1]);
                th.appendChild(text);
                tr.appendChild(th);
                table.appendChild(tr);             
                 // Hay que crear un row para ponerle un heacer
                var tr = document.createElement('tr'); // Header row
                for (var j = 0; j < 4; j++) {
                    var th = document.createElement('th'); //column
                    th.className = "pricing-table-header-medium";
                    th.style = " padding: 15px";
                    var text = document.createTextNode(headerList[j]); //cell
                    th.appendChild(text);
                    tr.appendChild(th);                    
                }
                //
                // Crear tabla de 8 elementos, luego crear tabla nueva
                // El array tendrá vacíos en cada fila sin materias (solo las del semestre tienen datos)
                // Lista de materias separada por ; en cada cambio de semestre
                // 
                table.appendChild(tr);
                tableData.forEach(function (rowData) {
                    var row = document.createElement('tr');
                    rowData.forEach(function (cellData) {
                        var cell = document.createElement('td');
                        cell.appendChild(document.createTextNode(cellData));
                        row.appendChild(cell);
                        console.log(cell);
                    });
                    tableBody.appendChild(row);
                });
                table.appendChild(tableBody);
                document.body.appendChild(table);
            
        }
    }
}