var joinButtonHandler = function(e) {
    submit();
};

var joinTextInputHandler = function(e) {
    if (13/*Enter*/ === e.keyCode) {
        submit();
    }
};

var readyHandler = function() {
    $('#join').delegate('button', 'click', joinButtonHandler);
    $('#join').delegate('input', 'keyup', joinTextInputHandler);
};

var submit = function() {
    var email = $("#join input").val();
    $("#join").hide();
    $("#thankyou").show();
};

$(readyHandler);
