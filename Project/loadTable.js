function loadTable(element) {
    
    var file = element.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e){
            var rawLog = reader.result;
            var tableData = CSVToArray(reader.result);
            var table = document.createElement('table');
            var tableBody = document.createElement('tbody');
            var headerList = ["CÓDIGO","NOMBRE","NOTA","CRÉDITOS"];
            var tr = document.createElement('tr'); // Header row
            
            for (var j = 0; j < 4; j++) {
            
                var th = document.createElement('th'); //column
                th.className= "pricing-table-header-medium";
                th.style = " padding: 15px";
                var text = document.createTextNode(headerList[j]); //cell
                th.appendChild(text);
                tr.appendChild(th);
            }
            table.appendChild(tr);
            tableData.forEach(function(rowData) {
                var row = document.createElement('tr');
                rowData.forEach(function(cellData) {
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
