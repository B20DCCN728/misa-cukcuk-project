$(() => {
    const firstInputField = $('#employeeCode');

    // Open modal
    $(".app__content-add").on('click', function() {
        $('.modal').css('display', 'flex');
        $('#modal__body').css('display', '');
        $('.modal__body:last-child').css('display', 'none');
        firstInputField.focus();
    });

    // Close modal
    $('.form-header .exit').on('click', function() {
        $('.modal').css('display', 'none');
    });

    $('button[type="reset"]').on('click', function() {
        $('.modal').css('display', 'none');
    });

    // Modal delete product
    $('.app__content-table-cell-action-img').on('click', function() {
        $('.modal').css('display', 'flex');
        $('#modal__body').css('display', 'none');
        $('.modal__body:last-child').css('display', '');
    });

    // Modal confirm
    $('.modal-buttons .btn-cancel').on('click', function() {
        $('.modal').css('display', 'none');
    });

    $('.modal-content .close').on('click', function() {
        $('.modal').css('display', 'none');
    });
});
