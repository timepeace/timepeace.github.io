var googleFormEmailEntry = 'entry.897871725';
var googleFormUrl = 'https://docs.google.com/forms/d/1Duae8q3dBV8TAo9AfJpxvZRsF7j8NNw8GliEkTJUX6A/formResponse';

var Router = Backbone.Router.extend({
    routes: {
        "variant/:section/:id": "variant"
    },

    variant: function(section, id) {
        $('.' + section).hide();
        $('#' + id + '.' + section).show().removeClass('hide');
    }
});


var joinButtonHandler = function(e) {
    submit();
};

var joinTextInputHandler = function(e) {
    if (13/*Enter*/ === e.keyCode) {
        submit();
    }
};

var readyHandler = function() {
    var router = new Router();
    Backbone.history.start();

    $('#cta').delegate('form', 'submit', submit);
};

var submit = function() {
    ga('send', 'event', 'CTA', 'Join');
    var email = encodeURIComponent($("#join input").val());
    $(this)[0].action = (googleFormUrl + '?' + googleFormEmailEntry + '=' + email + '&submit=submit');
    $('#thankyou').show();
    $('#join').hide();
};

var yieldFocus = function() {
    window.focus();
    $('#cta').find('input').focus();
};

$(readyHandler);
