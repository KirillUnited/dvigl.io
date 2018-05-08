$(document).ready(function () {
    $('body').on('click', '.js-login__btn', function () {
        $('.popups, .popup__sign-in').fadeIn();
        return false;
    });
    $('body').on('click', '.js-registration__btn', function () {
        $('.popups, .popup__sign-up').fadeIn();
        return false;
    });
});
