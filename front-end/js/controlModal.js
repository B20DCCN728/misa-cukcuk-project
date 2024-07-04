const firstInputField = document.getElementById('employeeId');

// Open modal
const btnNew = document.querySelector(".app__content-add");
btnNew.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'flex';
        document.getElementById('modal__body').style.display = '';
        document.querySelector('.modal__body:last-child').style.display = 'none';
        firstInputField.focus();
    }
);

// Close modal
const btnClose = document.querySelector('.form-header .exit');
btnClose.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'none';
    }
);

const btnHuy = document.querySelector('button[type="reset"]');
btnHuy.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'none';
    }
);

// Modal delete product
const btnDelete = document.querySelectorAll('.app__content-table-cell-action-img');
for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener(
        'click',
        () => {
            document.querySelector('.modal').style.display = 'flex';
            document.getElementById('modal__body').style.display = 'none';
            document.querySelector('.modal__body:last-child').style.display = '';
        }
    );
};


// Modal confirm
const btnCancelDelete = document.querySelector('.modal-buttons .btn-cancel');
btnCancelDelete.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'none';
    }
);

const btnX = document.querySelector('.modal-content .close');
btnX.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'none';
    }
);