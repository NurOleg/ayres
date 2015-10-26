$(document).ready(function () {
    $(".fancy").magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll',
        preloader: false,
        callbacks: {
            ajaxContentAdded: function() {
                $('#phone').inputmask("+7(999)999-99-99");
                $('form').on('submit', function(e) {
                    e.preventDefault();
                    var phone = $(this).find('#phone');
                    if(phone.val() != '') {
                        phone.css('border', '');
                        alert('Спасибо за Вашу заявку!');
                    } else {
                        phone.css('border', '1px solid red');
                    }
                });
            }
        }

    });
});