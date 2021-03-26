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


/**
 * Login
 */
function Login() {

    const email = $('#LoginModal input[name="UserEmail"]').val();
    const password = $('#LoginModal input[name="UserPassword"]').val();

    // Validações:
    if (!email) { return Notification.Error('Informe seu e-mail.', 'Campo obrigatório'); }
    if (!password) { return Notification.Error('Digite sua senha.', 'Campo obrigatório'); }

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
    }, 0);

}


/**
 * Registrar Hora 
 */
function Register() {

    const date = $('#InsertModal [name="Date"]').val();
    const reason = $('#InsertModal [name="Reason"]').val();
    const timeIn = $('#InsertModal [name="TimeIn"]').val();
    const timeOut = $('#InsertModal [name="TimeOut"]').val();

    // Validações:
    if (!date) { return Notification.Error('Digite a data da marcação.', 'Campo obrigatório'); }
    if (!reason) { return Notification.Error('Selecione o motivo do registro.', 'Campo obrigatório'); }
    if (!timeIn) { return Notification.Error('Digite a hora de entrada.', 'Campo obrigatório'); }
    if (!timeOut) { return Notification.Error('Digite a hora de saída.', 'Campo obrigatório'); }

    // Hoje:
    let today = new Date();

    // Data:
    let day = parseInt(date.split('-')[2]);
    let month = parseInt(date.split('-')[1]);
    let year = parseInt(date.split('-')[0]);
    console.log('day, month, year', day, month, year);

    // Hora entrada:
    let inHour = parseInt(timeIn.split(':')[0]);
    let inMinute = parseInt(timeIn.split(':')[1]);
    console.log('inHour, inMinute, year', inHour, inMinute);

    // Hora saída:
    let outHour = parseInt(timeOut.split(':')[0]);
    let outMinute = parseInt(timeOut.split(':')[1]);
    console.log('outHour, outMinute', outHour, outMinute);

    // Construtores de Data:
    let dateIn = new Date(year, month, day, inHour, inMinute, 0, 0);
    let dateOut = new Date(year, month, day, outHour, outMinute, 0, 0);
    console.log('dateIn', dateIn);
    console.log('dateOut', dateOut);

    // Validar data de saída:
    if (dateOut.getTime() < dateIn.getTime()) { return Notification.Error('Data de saída não pode ser inferior a data de entrada.', 'Hora inválida'); }

    // Validar data de registro:
    if (dateIn.getDate() > today.getDate()) { return Notification.Error('Data de registro não pode ser superior ao dia atual.', 'Data inválida'); }

    // Bloquear Modal:
    $('#InsertModal input').attr('disabled', 'disabled');
    $('#InsertModal select').attr('disabled', 'disabled');
    $('#InsertModal button').attr('disabled', 'disabled');

    $('#InsertModal [name="OK"] i').attr('class', 'spinner-border spinner-border-sm');
    $('#InsertModal [name="OK"] span').html('Enviando para análise...');

}

/**
 * Editar Registro de Hora 
 */
function Edit() {

    const date = $('#EditModal [name="Date"]').val();
    const reason = $('#EditModal [name="Reason"]').val();
    const timeIn = $('#EditModal [name="TimeIn"]').val();
    const timeOut = $('#EditModal [name="TimeOut"]').val();

    // Validações:
    if (!date) { return Notification.Error('Digite a data da marcação.', 'Campo obrigatório'); }
    if (!reason) { return Notification.Error('Selecione o motivo do registro.', 'Campo obrigatório'); }
    if (!timeIn) { return Notification.Error('Digite a hora de entrada.', 'Campo obrigatório'); }
    if (!timeOut) { return Notification.Error('Digite a hora de saída.', 'Campo obrigatório'); }

    // Hoje:
    let today = new Date();

    // Data:
    let day = parseInt(date.split('-')[2]);
    let month = parseInt(date.split('-')[1]);
    let year = parseInt(date.split('-')[0]);
    console.log('day, month, year', day, month, year);

    // Hora entrada:
    let inHour = parseInt(timeIn.split(':')[0]);
    let inMinute = parseInt(timeIn.split(':')[1]);
    console.log('inHour, inMinute, year', inHour, inMinute);

    // Hora saída:
    let outHour = parseInt(timeOut.split(':')[0]);
    let outMinute = parseInt(timeOut.split(':')[1]);
    console.log('outHour, outMinute', outHour, outMinute);

    // Construtores de Data:
    let dateIn = new Date(year, month, day, inHour, inMinute, 0, 0);
    let dateOut = new Date(year, month, day, outHour, outMinute, 0, 0);
    console.log('dateIn', dateIn);
    console.log('dateOut', dateOut);

    // Validar data de saída:
    if (dateOut.getTime() < dateIn.getTime()) { return Notification.Error('Data de saída não pode ser inferior a data de entrada.', 'Hora inválida'); }

    // Validar data de registro:
    if (dateIn.getDate() > today.getDate()) { return Notification.Error('Data de registro não pode ser superior ao dia atual.', 'Data inválida'); }

    // Bloquear Modal:
    $('#EditModal input').attr('disabled', 'disabled');
    $('#EditModal select').attr('disabled', 'disabled');
    $('#EditModal button').attr('disabled', 'disabled');

    $('#EditModal [name="OK"] i').attr('class', 'spinner-border spinner-border-sm');
    $('#EditModal [name="OK"] span').html('Salvando registro...');



}