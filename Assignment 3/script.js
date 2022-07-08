

window.onload = function () {
  var getVal = document.getElementsByClassName('dropDownTextArea');
  for (var i = 0; i < getVal.length; i++) {
    getVal[i].style.display = 'none';
  }

  document.getElementById('button').disabled = true;
  document.getElementById('button').style.backgroundColor = 'gray';
  document.getElementById('button').style.color = 'white';
  document.getElementById('button').style.border = '1px solid gray';

  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  for (var i = 0; i < getTableRows.length; i++) {
    for (var j = 0; j < getTableRows[i].cells.length; j++) {
      if (j == (getTableRows[i].cells.length - 1)) {
        getTableRows[i].cells[j].style.visibility = 'hidden';
      }
      if (j == (getTableRows[i].cells.length - 2)) {
        getTableRows[i].cells[j].style.visibility = 'hidden';
      }
    }
  }
}


//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addNewStudent() {
  var tableVal = document.getElementById('myTable').getElementsByTagName('tbody')[0];
  var addNewRow = tableVal.insertRow(tableVal.rows.length);
  var columnCount = tableVal.rows[0].cells.length;
  for (var i = 0; i < columnCount; i++) {
    if (i == 0) {

      var newCell = addNewRow.insertCell(i);
      var addCheckbox = document.createElement('input');
      addCheckbox.type = 'checkbox';
      addCheckbox.id = i.toString();
      newCell.appendChild(addCheckbox);
      addCheckbox.onclick = function () {
        getCheckedValue();
      }
      var addImage = document.createElement('img');
      addImage.src = 'down.png';
      addImage.style.display = 'block';
      addImage.style.width = '25px';
      newCell.appendChild(addImage);
      addImage.onclick = function () {
        display();
      }
    } else if (i == (columnCount - 1)) {
      var newCell = addNewRow.insertCell(i);
      //  var createBtn = document.createElement('button');
      var newVal = document.createTextNode('');
      //  createBtn.id = 'delete' + i;
      // createBtn.appendChild(createBtnName);
      newCell.appendChild(newVal);
      newCell.style.visibility = 'hidden';

    } else {

      var newCell = addNewRow.insertCell(i);
      var newVal = document.createTextNode('Data');
      newCell.appendChild(newVal);

    }
  }
}



function getCheckedValue() {
  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  getTableRows[0].cells[getTableRows[0].cells.length - 2].style.visibility = 'visible';
  var getCheckBox = document.getElementById('myTable').getElementsByTagName('input');
  for (var i = 0; i < getCheckBox.length; i++) {
    if (getCheckBox[i].checked) {
      document.getElementById('button').disabled = false;
      var getRow = getCheckBox[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'yellow';
      if (!document.getElementById('delete' + i)) {
        var createBtn = document.createElement('button');
        var createBtnName = document.createTextNode('Delete');
        createBtn.id = 'delete' + i;
        createBtn.appendChild(createBtnName);
        createBtn.style.cursor = 'pointer';
        //   createBtn.addEventListener("click",removeRow());

        getRow.cells[getRow.cells.length - 2].appendChild(createBtn);
        createBtn.onclick = function () {
          removeSelectedRow(this);
        }

      }
     
      getRow.cells[getRow.cells.length - 1].style.visibility = 'visible';
      document.getElementById('button').style.backgroundColor = 'orange';
      document.getElementById('button').style.border = '1px solid orange';
    } else {
      var getRow = getCheckBox[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'white';
      // document.getElementById('button').style.backgroundColor = 'gray';
      // document.getElementById('button').style.border = '1px solid gray';
      if (document.getElementById('delete' + i)) {
        document.getElementById('delete' + i).remove();
      }
      getRow.cells[getRow.cells.length - 2].style.visibility = 'hidden';
    }
  }

  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'visible';
  var getCheckBox = document.getElementById('myTable').getElementsByTagName('input');

  for (var i = 0; i < getCheckBox.length; i++) {
    if (getCheckBox[i].checked) {
      document.getElementById('button').disabled = false;
      var getRow = getCheckBox[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'yellow';
     
      if (!document.getElementById('edit' + i)) {
        var createBtn = document.createElement('button');
        var createBtnName = document.createTextNode('Edit');
        createBtn.id = 'edit' + i;
        createBtn.appendChild(createBtnName);
        createBtn.style.cursor = 'pointer';
        //   createBtn.addEventListener("click",removeRow());

        getRow.cells[getRow.cells.length - 1].appendChild(createBtn);
        createBtn.onclick = function () {
          alert("Edit the details");
        }

      }
      getRow.cells[getRow.cells.length - 1].style.visibility = 'visible';
      document.getElementById('button').style.backgroundColor = 'orange';
      document.getElementById('button').style.border = '1px solid orange';
    } else {
      var getRow = getCheckBox[i].parentNode.parentNode;
      getRow.style.backgroundColor = 'white';
      if (document.getElementById('edit' + i)) {
        document.getElementById('edit' + i).remove();
      }
      getRow.cells[getRow.cells.length - 1].style.visibility = 'hidden';
    }
  }


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
  } else {
    for (var j = 0; j < getDropDownClass.length; j++) {
      getDropDownClass[j].cells[0].colSpan = "9";
    }
  }
}


function removeSelectedRow(getRow) {
  getRow.parentNode.parentNode.remove();
  var getTableRows = document.getElementById('myTable').getElementsByTagName('tr');
  getTableRows[0].cells[getTableRows[0].cells.length - 2].style.visibility = 'hidden';
  console.log(getTableRows[0].cells);
  // if(i == 0 )
  // {
  //   getTableRows[0].cells[getTableRows[0].cells.length - 1].style.visibility = 'hidden';
  // }
}

function display()
{
  var a = document.getElementsByClassName('dropDownTextArea');
  console.log(a.length);
}

function displayDiv(getImage) {
  var getImageID = getImage.id.slice(3);
  var getDropDownClass = document.getElementsByClassName('dropDownTextArea');
  console.log(getDropDownClass.length)
  for (var j = 0; j < getDropDownClass.length; j++) {
    if (j == getImageID - 1) {
      if (getDropDownClass[j].style.display == 'none') {
        getDropDownClass[j].style.display = 'contents';
        getDropDownClass[j].cells[getDropDownClass[j].cells.length - 1].style.visibility = 'visible';
      } else {
        getDropDownClass[j].style.display = 'none';
      }
    }
  }
}