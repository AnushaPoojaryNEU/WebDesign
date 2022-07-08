function validateInputFields(object, type, name) {
    var regExName = /^[a-zA-Z]+$/
    var regExEmail = /([\w\.]+)@(northeastern.edu)$/;
    var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExZip = /^[0-9]{5}(?:-[0-9]{4})?$/;

    var error = 'errorMsg' + name;

    switch (type) {
        case 1: if (!object.value.trim().match(regExName)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgfirstName").style.display = "block";
            object.value = "";
        }
        else {
            object.style.border = "";
            document.getElementById("errorMsgfirstName").style.display = "none";
        }
            break;

        case 2: if (!object.value.trim().match(regExName)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsglastName").style.display = "block";
            object.value = "";
        }
        else {
            object.style.border = "";
            document.getElementById("errorMsglastName").style.display = "none";
        }
            break;

        case 3: if (!object.value.match(regExEmail)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgEmailId").style.display = "block";
            object.value = "";
        }
        else {
            object.style.border = "";
            document.getElementById("errorMsgEmailId").style.display = "none";
        }
            break;

        case 4: if (!object.value.match(regExPhone)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgPhone").style.display = "block";
            object.value = "";
        }
        else {
            object.style.border = "";
            document.getElementById("errorMsgPhone").style.display = "none";
        }
            break;

        case 5: if (!object.value.match(regExZip)) {
            object.style.border = "2px solid red";
            document.getElementById("errorMsgzipcode").style.display = "block";
            object.value = "";
        }
        else {
            object.style.border = "";
            document.getElementById("errorMsgzipcode").style.display = "none";
        }
            break;
        case 6: chks = document.getElementsByName('source');
            var j = 0;
            for (var i = 0; i < chks.length; i++) {
                if (chks[i].checked) {
                    j++;
                    document.getElementById("errorMsgSource").style.display = "none";  
                } 
            }
                if(j==0){
                    document.getElementById("errorMsgSource").style.display = "block";
                }
            break;
            
    }

}

function addCheckbox(value) {
    document.getElementById('checkbox').innerHTML = "";
    if (value.length == 0) {
        document.getElementById("checkbox").innerHTML = "<input>";
    }
    else {
        var root = document.getElementById('checkbox');
        var chk = document.createElement('input');
        var text = document.createTextNode(value);
        chk.type = 'checkbox';
        chk.id = value;
        chk.onclick = function () {
            displayTextField(this);
        };
        root.appendChild(chk);
        root.appendChild(text);
        root.style.display = 'block';

    }
}
var newTextField = "";
function displayTextField(object) {
    var id = object.id;
    var check = document.getElementById(id).checked;
    if (check) {
        var root = document.getElementById('checkbox');
        var field = document.createElement('input');
        field.type = 'text';
        field.id = 'text' + id;
        field.style.marginLeft = '10px';
        newTextField = field.id;
        field.setAttribute("required", "required");
        root.appendChild(field);
    }
    else {
        if (newTextField) {
            document.getElementById(newTextField).remove();
        }
    }
}

function submitdata() {


    var title = document.getElementsByName('title');
    for (var i = 0; i < title.length; i++) {
        if (title[i].checked) {
            var radio = title[i].value;
            localStorage.setItem("title", radio);
        }
    }
    var firstName = document.getElementById('firstName');
    localStorage.setItem("firstName", firstName.value);
    var lastName = document.getElementById('lastName');
    localStorage.setItem("lastName", lastName.value);
    var email = document.getElementById('emailId');
    localStorage.setItem("email", email.value);
    var phoneNo = document.getElementById('phoneNumber');
    localStorage.setItem("phoneNo", phoneNo.value);
    var StreetAddress1 = document.getElementById('streetAddress1');
    localStorage.setItem("StreetAddress1", StreetAddress1.value);
    var StreetAddress2 = document.getElementById('streetAddress2');
    if (StreetAddress2.value == null) {
        StreetAddress2.value = "";
    }
    localStorage.setItem("StreetAddress2", StreetAddress2.value);
    var city = document.getElementById('city');
    localStorage.setItem("city", city.value);
    var State = document.getElementById('state');
    localStorage.setItem("State", State.value);
    var zipcode = document.getElementById('zipcode');
    localStorage.setItem("zipcode", zipcode.value);
    var socialMedia = document.getElementsByName('source');
    var socialValue = "";
    for (var i = 0; i < socialMedia.length; i++) {
        if (socialMedia[i].checked) {
            socialValue = socialValue + " " + socialMedia[i].value;
        }
    }
    localStorage.setItem("socialMedia", socialValue);
    var comments = document.getElementById('comments');
    localStorage.setItem("comments", comments.value);

}

