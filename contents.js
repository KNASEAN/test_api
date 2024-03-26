
    //contingency constants
    const env={
        liffId : "1657309677-1L2Qn6eY",
        appurl : "https://script.google.com/macros/s/AKfycbzvXOLV4dbmI9lUGHhe8Oj5tc_R3lOv_zuNWIUdqt_IX8GB7pHs_3cF76aym6SQ6eyD/exec",
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
