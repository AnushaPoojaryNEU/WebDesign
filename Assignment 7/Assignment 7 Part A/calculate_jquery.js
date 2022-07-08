$(document).ready(function () {

    var queryString = new Array();
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
        }
        if (queryString["name"] != null) {
            var data = "Welcome";
            data += "&nbsp" + "<b>" + queryString["name"] + "<b>";
            $("#lblData").html(data);
        }
    });

    $("#txtNo1").on('input', function () {
        var inputVal = $(this).val();

        $("#txtNo1Err").removeClass($.isNumeric(inputVal) ? "invalid" : "valid");
        $("#txtNo1Err").addClass($.isNumeric(inputVal) ? "valid" : "invalid");

        if ($("#txtNo1Err").hasClass("invalid")) {
            $("#txtNo1Err").show();
            $("#txtNo1Err").html(
                "**Only Numbers allowed"
            );
            $("#txtNo1Err").css("color", "red");
        }
        else {

            $("#txtNo1Err").hide();
        }
    });

    $("#txtNo2").on('input', function () {
        var inputVal = $(this).val();

        $("#txtNo2Err").removeClass($.isNumeric(inputVal) ? "invalid" : "valid");
        $("#txtNo2Err").addClass($.isNumeric(inputVal) ? "valid" : "invalid");

        if ($("#txtNo2Err").hasClass("invalid")) {
            $("#txtNo2Err").show();
            $("#txtNo2Err").html(
                "**Only Numbers allowed"
            );
            $("#txtNo2Err").css("color", "red");
        }
        else {

            $("#txtNo2Err").hide();
        }
    });

    $("#btnAdd").on('click', function () {
        var val = "add";
        calculate(val);
    });
    $("#btnSubstract").on('click', function () {
        var val = "sub";
        calculate(val);
    })
    $("#btnMultiply").on('click', function () {
        var val = "mul";
        calculate(val);
    })
    $("#btnDivide").on('click', function () {
        var val = "divide";
        calculate(val);
    })


    let calculate = (val) => {

        switch (val) {

            case "add":
                var no1 = parseInt($("#txtNo1").val());
                var no2 = parseInt($("#txtNo2").val());
                var result = no1 + no2;
                $('#result').val(result);
                break;
            case "sub":
                var no1 = parseInt($("#txtNo1").val());
                var no2 = parseInt($("#txtNo2").val());
                var result = no1 - no2;
                $('#result').val(result);
                break;
            case "mul":
                var no1 = parseInt($("#txtNo1").val());
                var no2 = parseInt($("#txtNo2").val());
                var result = no1 * no2;
                $('#result').val(result);
                break;
            case "divide":
                var no1 = parseInt($("#txtNo1").val());
                var no2 = parseInt($("#txtNo2").val());
                var result = no1 / no2;
                $('#result').val(result);
                break;
        }

        if ($('#result').val != '')
            $("#result").attr("disabled", "disabled");
        else
            $("#result").removeAttr("disabled");
    }







});