$("#generate-sig-btn").click(function () {

    //----- name and title -----

    //input
    var name = $("#input-name").val();
    var title = $("#input-title").val();

    //output
    $('#output-name').text(name);
    $('#output-title').text(title);

    //----- certifications -----

    //input
    var cert1_abbr = $("#input-cert1-abbr").val();
    var cert2_abbr = $("#input-cert2-abbr").val();
    var cert3_abbr = $("#input-cert3-abbr").val();
    var cert4_abbr = $("#input-cert4-abbr").val();
    var cert1_name = $("#input-cert1-name").val();
    var cert2_name = $("#input-cert2-name").val();
    var cert3_name = $("#input-cert3-name").val();
    var cert4_name = $("#input-cert4-name").val();

    //output
    $('#output-cert1-abbr').text(cert1_abbr);
    $('#output-cert2-abbr').text(cert2_abbr);
    $('#output-cert3-abbr').text(cert3_abbr);
    $('#output-cert4-abbr').text(cert4_abbr);
    $('#output-cert1-name').text(cert1_name);
    $('#output-cert2-name').text(cert2_name);
    $('#output-cert3-name').text(cert3_name);
    $('#output-cert4-name').text(cert4_name);

    //logic
    if (cert1_abbr === "") {
        $("#cert1").hide();
    } else {
        $("#cert1").show();
    }

    if (cert2_abbr === "") {
        $("#cert2").hide();
    } else {
        $("#cert2").show();
    }

    if (cert3_abbr === "") {
        $("#cert3").hide();
    } else {
        $("#cert3").show();
    }

    if (cert4_abbr === "") {
        $("#cert4").hide();
    } else {
        $("#cert4").show();
    }

    //----- phone numbers -----

    //input
    var phone1 = $("#input-phone1").val();
    var phone2 = $("#input-phone2").val();
    var phone3 = $("#input-phone3").val();
    var phone1_type = $("#input-phone1-type").val();
    var phone2_type = $("#input-phone2-type").val();
    var phone3_type = $("#input-phone3-type").val();

    //output
    $('#output-phone1-num').text(phone1);
    $('#output-phone2-num').text(phone2);
    $('#output-phone3-num').text(phone3);
    $('#output-phone1-type').text(phone1_type);
    $('#output-phone2-type').text(phone2_type);
    $('#output-phone3-type').text(phone3_type);

    //logic
    if (phone1 === "") {
        $("#phone1").hide();
    } else {
        $("#phone1").show();
    }

    if (phone2 === "") {
        $("#phone2").hide();
    } else {
        $("#phone2").show();
    }

    if (phone3 === "") {
        $("#phone3").hide();
    } else {
        $("#phone3").show();
    }


    //----- email address -----

    //input
    var email = $("#input-email").val();

    //output
    $('#output-email-name').text(email);

    //logic
    $("#output-email-link").attr("href", "mailto:" + email);


});

var signatureGenApp = (function () {

    function browserDetection() {

        var browserName = bowser.name;

        if (browserName === "Chrome" || browserName === "Firefox") {
            $("#alertArea").hide();
        } else {
            $("#alertArea").html("<div class='alert alert-danger alert-dismissible' id='browserDetectionAlert' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button> <strong>Warning! This app requires <a href='https://www.mozilla.org/en-US/firefox/new/' class='alert-link'>Firefox</a> or <a href='https://www.google.com/chrome/browser/desktop/' class='alert-link'>Chrome</a>. You're currently using: " + browserName + " <span id='browserDetectionMessage'></span></strong> </div>");
            $("#generate-sig-btn").addClass("disabled").removeAttr("data-target").removeAttr("data-toggle");
        }

    }

    return {
        browserDetection: browserDetection
    };
})();