$("#submit").hide();
$(document).on("ready change", function () {
    var correct = true;
    if ($("#firstName").val() == "") {
        $("#firstNameMandatory").show();
        correct = false;
    }
    else {
        $("#firstNameMandatory").hide();
    }
    if ($("#lastName").val() == "") {
        $("#lastNameMandatory").show();
        correct = false;
    }
    else {
        $("#lastNameMandatory").hide();
    }
    if ($("#email").val() == "" && $("#newsletter").prop('checked')) {
        $("#emailMandatory").show();
        correct = false;
    }
    else {
        $("#emailMandatory").hide();
    }
    if ($("#mediaChannelSelect").val() == "Other") {
        $("#otherMediaChannel").show();
    }
    else {
        $("#otherMediaChannel").hide();
    }
    if (correct == false) {
        $("#submit").hide();
    }
    else {
        $("#submit").show();
    }
});
