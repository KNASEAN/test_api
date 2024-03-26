
    //contingency constants
    const env={
        liffId : "1657309677-Q0Y7E841",
        appurl : "https://script.google.com/macros/s/AKfycbxEy2hBJEjANmSQWV2z2tFYLdUX2fD7RNSCRWU3xQ8Y8PP49OW3FpxCBqqkrZwngTb9/exec",
    }

    //create table from array
    function createTable(dataArray) {
        var table = document.createElement('table');
        var tableContainer = document.getElementById('data-container');
    
        for (var i = 0; i < dataArray.length; i++) {
            var row = document.createElement('tr');
            for (var j = 0; j < dataArray[i].length; j++) {
                var cell = document.createElement('td');
                cell.textContent = dataArray[i][j];
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    
        tableContainer.appendChild(table);
    }
