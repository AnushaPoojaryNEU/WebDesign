
window.onload = function () {
  var getDropDown = document.getElementsByClassName('dropDownTextArea');
  for (var i = 0; i < getDropDown.length; i++) {
    getDropDown[i].style.display = 'none';
  }

  document.getElementById('button').disabled = true;
  document.getElementById('button').style.backgroundColor = 'gray';
  document.getElementById('button').style.color = 'white';
  document.getElementById('button').style.border = '1px solid gray';

  var getRows = document.getElementById('myTable').getElementsByTagName('tr');
  console.log(getRows.length);
  for (var i = 0; i < getRows.length; i++) {
    for (var j = 0; j < getRows[i].cells.length; j++) {
      if (j == (getRows[i].cells.length - 1)) {
        getRows[i].cells[j].style.visibility = 'hidden';
      }
      if (j == (getRows[i].cells.length - 2)) {
        getRows[i].cells[j].style.visibility = 'hidden';
      }
    }
  }
}


var flag = false;
function addRow() {
  var table = document.getElementById('myTable');
  var rowCount = table.rows.length;
  var aRowCount = (rowCount + 1) / 2;
  console.log(aRowCount);
  var tr = table.insertRow(rowCount);
  var columnCount = table.rows[0].cells.length;
  for (var i = 0; i < columnCount; i++) {
    var td;
    td = document.createElement('td');
    if (i == 0) {
      td = tr.insertCell(i);
      //To add Checkbox in first cell.
      var addCheckbox = document.createElement('input');
      addCheckbox.type = 'checkbox';
      td.appendChild(addCheckbox);
      addCheckbox.onclick = function () {
        showDeleteEditButtons();
      }

      //To add Down Arrow Icon in first cell.
      var addIcon = document.createElement('img');
      addIcon.src = 'down.png';
      addIcon.style.display = 'block';
      addIcon.style.width = '25px';
      td.appendChild(addIcon);
      var table = document.getElementById('myTable');
      var newRow = table.insertRow(table.rows.length);
      var row = newRow.insertCell();
      row.innerHTML = "<td> Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br /></td>";
      row.id = 'row' + aRowCount;
      document.getElementById(row.id).style.display = 'none';
      addIcon.onclick = function () {
        var c = document.getElementById('row' + aRowCount.toString());
        if (c.style.display == 'none') {
          // c.style.display = 'table-row';
          c.style.display = 'table-cell';
          c.parentNode.cells[0].colSpan = "8";
        }
        else {
          c.style.display = 'none';
        }
      }

    }
    else if (i == (columnCount - 1)) {
      var newTd = tr.insertCell(i);
      newTd.style.visibility = 'hidden';
    }
    else {
     td = tr.insertCell(i);
    }
    
  }
  var updatedTable = document.getElementById('myTable');
  var lastRow = updatedTable.rows[updatedTable.rows.length - 2];
  var rowCount = updatedTable.rows.length;
  console.log(rowCount);
  var aRowCount = ((rowCount-2) + 1) / 2;
  console.log(aRowCount);
  var cell1 = lastRow.cells[1];
  var StudentInp = document.createTextNode("Student " +aRowCount);
  cell1.appendChild(StudentInp);
  var cell2 = lastRow.cells[2];
  var TeacherInp = document.createTextNode("Teacher " +aRowCount);
  cell2.appendChild(TeacherInp);
  var cell3 = lastRow.cells[3];
  cell3.innerHTML ="<td>Approved</td>";
  var cell4 = lastRow.cells[4];
  cell4.innerHTML ="<td>Fall</td>";
  var cell5 = lastRow.cells[5];
  cell5.innerHTML ="<td>TA</td>";
  var cell6 = lastRow.cells[6];
  var randImp = Math.floor(10000 + Math.random() * 90000);
  var RandomInp = document.createTextNode(""+randImp);
  cell6.appendChild(RandomInp);
  var cell7 = lastRow.cells[7];
  cell7.innerHTML ="<td>100%</td>";
  
  alert("Record addded successfully");
}

function showDeleteEditButtons() {
  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  getTableRows[0].cells[getTableRows[0].cells.length - 2].style.visibility = 'visible';
  var getRows = document.getElementById('myTable').getElementsByTagName('input');
  for (var i = 0; i < getRows.length ; i++) {
    if (getRows[i].checked) {
      document.getElementById('button').disabled = false;
      var getRow = getRows[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'yellow';
      if (!document.getElementById('delete' + i)) {
        var deleteBtn = document.createElement('button');
        var deleteBtnName = document.createTextNode('Delete');
        deleteBtn.id = 'delete' + i;
        deleteBtn.appendChild(deleteBtnName);
        deleteBtn.style.cursor = 'pointer';

        getRow.cells[getRow.cells.length - 2].appendChild(deleteBtn);
        deleteBtn.onclick = function () {
          console.log(this.parentNode.parentNode.rowIndex,);
          deleteRow(this.parentNode.parentNode.rowIndex, this.parentNode.parentNode.rowIndex + 1);
        }

      }
      
      getRow.cells[getRow.cells.length - 2].style.visibility = 'visible';
      document.getElementById('button').style.backgroundColor = 'orange';
      document.getElementById('button').style.border = '1px solid orange';
    }
    else {
      var getRow = getRows[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'white';
      if (document.getElementById('delete' + i)) {
        document.getElementById('delete' + i).remove();
      }
      getRow.cells[getRow.cells.length - 2].style.visibility = 'hidden';
    }
  }

  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'visible';
  var getRows = document.getElementById('myTable').getElementsByTagName('input');

  disable();

  for (var i = 0; i < getRows.length; i++) {
    if (getRows[i].checked) {
      document.getElementById('button').disabled = false;
      var getRow = getRows[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'yellow';
     
      if (!document.getElementById('edit' + i)) {
        var editBtn = document.createElement('button');
        var editBtnName = document.createTextNode('Edit');
        editBtn.id = 'edit' + i;
        editBtn.appendChild(editBtnName);
        editBtn.style.cursor = 'pointer';

        getRow.cells[getRow.cells.length - 1].appendChild(editBtn);
        editBtn.onclick = function () {
        alert("Edit the Details");
        }

      }
      getRow.cells[getRow.cells.length - 1].style.visibility = 'visible';
      document.getElementById('button').style.backgroundColor = 'orange';
      document.getElementById('button').style.border = '1px solid orange';
    }
    else {
      var getRow = getRows[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'white';
     if (document.getElementById('edit' + i)) {
        document.getElementById('edit' + i).remove();
      }
      getRow.cells[getRow.cells.length - 1].style.visibility = 'hidden';
    }
  }


  disable();

}



function disable() {
  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  var checkedVal = document.querySelectorAll('input:checked');
  var getDropDownClass = document.getElementsByClassName('dropDownTextArea');
  if (checkedVal.length == 0) {
    getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'hidden';
    document.getElementById('button').style.backgroundColor = 'gray';
    document.getElementById('button').style.border = '1px solid gray';
    document.getElementById('button').disabled = true;
    getTableRows[0].cells[getTableRows[0].cells.length - 2].style.visibility = 'hidden';
    document.getElementById('button').style.backgroundColor = 'gray';
    document.getElementById('button').style.border = '1px solid gray';
    document.getElementById('button').disabled = true;

    for (var j = 0; j < getDropDownClass.length; j++) {
      getDropDownClass[j].cells[0].colSpan = "8";
    }
  }
  else {
    for (var j = 0; j < getDropDownClass.length; j++) {
      getDropDownClass[j].cells[0].colSpan = "9";
    }
  }
}

function deleteRow(currentRow, nextRow) {
  //selectedRow.parentNode.parentNode.remove();
  //console.log( selectedRow.id);
  document.getElementById('myTable').deleteRow(nextRow);
  document.getElementById('myTable').deleteRow(currentRow);
  //var dropdown = document.getElementsByClassName('dropDownTextArea');
  /* for(var i = 0; i < dropdown.length; i++)
   {
     dropdown[i].remove();
     console.log(i);
   }*/
  disable();
  
  alert("Record Deleted Succesfully");
}

function expandRow(image) {
  var id = image.id.slice(5);
  var dropdown = document.getElementsByClassName('dropDownTextArea');
  for (var i = 0; i < dropdown.length; i++) {
    if (i == (id - 1)) {
      if (dropdown[i].style.display == 'none') {
        dropdown[i].style.display = 'contents';
        dropdown[i].cells[dropdown[i].cells.length - 1].style.visibility = 'visible';
      }
      else {
        dropdown[i].style.display = 'none';
      }
    }
  }
}



