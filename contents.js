
    //contingency constants
    const env={
        liffId : "1657309677-1L2Qn6eY",
        appurl : "https://script.google.com/macros/s/AKfycbz0jl2yopjlOLg6H-6wqawiXFFN4_toTTwPPEyXeP9uyi7FzABSrOw3jMLyh1PHT4Un/exec",
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
