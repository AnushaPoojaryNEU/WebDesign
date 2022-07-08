

$(document).ready(function () {
  $('#login_username').on('input', function () {
    var input = $(this);
    var is_name = input.val();
    if (is_name.length != "") { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });

  $("#login_password").on('input', function () {

    var rules = [{
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
    ];

    var password = $(this).val();

    //length
    $("#Length").removeClass(password.length > 6 ? "invalid" : "valid");
    $("#Length").addClass(password.length > 6 ? "valid" : "invalid");

    if ($("#Length").hasClass("invalid")) {
      $("#Length").show();
      $("#Length").html(
        "**Must be at least 7 charcters"
      );
      $("#Length").css("color", "red");
    }
    else {

      $("#Length").hide();
    }

    for (var i = 0; i < rules.length; i++) {

      $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "invalid" : "valid");
      $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "valid" : "invalid");
    }
    //UpperCase
    if ($("#UpperCase").hasClass("invalid")) {
      $("#UpperCase").show();
      $("#UpperCase").html(
        "**Must have atleast 1 upper case character"
      );
      $("#UpperCase").css("color", "red");
    }
    else {

      $("#UpperCase").hide();
    }

    //LowerCase
    if ($("#LowerCase").hasClass("invalid")) {
      $("#LowerCase").show();
      $("#LowerCase").html(
        "**Must have atleast 1 lower case character"
      );
      $("#LowerCase").css("color", "red");
    }
    else {

      $("#LowerCase").hide();
    }

    //Numbers
    if ($("#Numbers").hasClass("invalid")) {
      $("#Numbers").show();
      $("#Numbers").html(
        "**Must have atleast 1 numeric character"
      );
      $("#Numbers").css("color", "red");
    }
    else {

      $("#Numbers").hide();
    }

    //Symbols

    if ($("#Symbols").hasClass("invalid")) {
      $("#Symbols").show();
      $("#Symbols").html(
        "**Must have atleast 1 special character (!@@#$%^&*)"
      );
      $("#Symbols").css("color", "red");
    }
    else {

      $("#Symbols").hide();
    }


  });



  $('#login_email').on('input', function () {
    var input = $(this);
    var re = /([\w\.]+)@(northeastern.edu)$/;
    var is_email = re.test(input.val());
    if (is_email) { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });

})



$("#login_btn").click(function (event) {
  var form_data = $("#login").serializeArray();
  var error_free = true;
  for (var input in form_data) {
    var element = $("#login_" + form_data[input]['name']);
    var valid = element.hasClass("valid");
    var error_element = $("span", element.parent());

    if (form_data[input]['name'] == "password") {


      if (form_data[input]['value'].length != "") {

        $('#login_password').removeClass("invalid").addClass("valid");
        error_element.removeClass("error_show").addClass("error");
      }
      else {
        $('#login_password').removeClass("valid").addClass("invalid");
        error_element.removeClass("error").addClass("error_show");
        error_free = false;
      }
    }

    if ((form_data[input]['name'] == "username") || (form_data[input]['name'] == "email")) {
      if (!valid) { error_element.removeClass("error").addClass("error_show"); error_free = false; }
      else { error_element.removeClass("error_show").addClass("error"); }
    }

  }

  if (!error_free) {
    event.preventDefault();

  }
  else {
    alert('No errors: Form will be submitted');
    var url = "calculate_jquery.html?name=" + encodeURIComponent($("#login_username").val());
    // $.cookie("name", $("#login_username").val());
    //var url = 'calculate_jquery.html';
    window.open(url);
   
  }
});