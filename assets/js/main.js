(function () {


    //
    // Aplicar máscaras nos inputs de texto que contenham o atributo 'mask'.
    //

    'use strict'
    var ApplyMasks = (f => {

        const inputsForMasks = $('input[type="text"][mask]');
        for (let index = 0; index < inputsForMasks.length; index++) {
            const element = $(inputsForMasks[index]);
            const mask = element.attr('mask');
            element.mask(mask);
        }

    })()

    //
    // Aplicar tooltips nos elementos.
    //

    'use strict'
    var Tooltips = (f => {

        $('[tooltip="true"]').tooltip();

    })()


    $('#ListPanel table tbody tr .td-options i[name="edit"]').click(() => {
        $('#EditModal').modal('show');
    })

    $('#ListPanel table tbody tr .td-options i[name="delete"]').click(() => {
        $('#DeleteModal').modal('show');
    })

})();


/**
 * Exibir notificação no sistema.
 * @returns 
 */
const Notification = {
    Success: (message, title = '') => { $.toaster({ message, title, priority: 'success' }); },
    Error: (message, title = '') => { $.toaster({ message, title, priority: 'danger' }); }
}


// Login:
function Login() {

    let email = $('#LoginModal input[name="UserEmail"]').val();
    let password = $('#LoginModal input[name="UserPassword"]').val();

    if (!email) {
        return Notification.Error('Informe seu e-mail.', 'Campo obrigatório');
    }

    if (!password) {
        return Notification.Error('Digite sua senha.', 'Campo obrigatório');
    }

    // Bloquear modal:
    $('#LoginModal input').attr('disabled', 'disabled');
    $('#LoginModal button').attr('disabled', 'disabled');
    $('#LoginModal button[name="login"] i').attr('class', 'spinner-border spinner-border-sm');
    $('#LoginModal button[name="login"] span').html('Entrando...');

    // tempo apenas para simular chamada da api:
    setTimeout(() => {
        $('#MainContent').show();
        $('#WelcomeBanner').hide();
        $('#LoginModal').modal('hide');
    }, 5000);



}




