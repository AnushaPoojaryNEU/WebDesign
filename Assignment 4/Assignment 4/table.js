function displayData()
{
        document.getElementById('userTable').style.display = 'block';
        var content = "";
        
        content += "<tr><td>"+localStorage.getItem('title')+"</td><td>"+localStorage.getItem('firstName')+"</td><td>"+localStorage.getItem('lastName')+"</td><td>"+localStorage.getItem('email')+"</td><td>"+localStorage.getItem('phoneNo')+"</td><td>"+localStorage.getItem('StreetAddress1')+"</td><td>"+localStorage.getItem('StreetAddress2')+"</td><td>"+localStorage.getItem('city')+"</td><td>"+localStorage.getItem('State')+"</td><td>"+localStorage.getItem('zipcode')+"</td><td>"+localStorage.getItem('socialMedia')+"</td><td>"+localStorage.getItem('comments')+"</td>";
        
        var userTable = document.getElementById("userTable");
        userTable.tBodies[0].innerHTML = content;
        userTable.style.display = 'block';
        userTable.style.fontFamily = 'Times New Roman';
}

function goToForm()
{
    window.location.href = "Form.html";
}

