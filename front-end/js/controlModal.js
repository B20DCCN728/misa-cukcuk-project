const firstInputField = document.getElementById('employeeId');

// Open modal
const btnNew = document.querySelector(".app__content-add");
btnNew.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'flex';
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

// Modal delete product
const btnDelete = document.querySelectorAll('.app__content-table-cell-action-img');
for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener(
        'click',
        () => {
            console.log('delete');
            document.querySelector('.modal').style.display = 'flex';
            document.querySelector('.modal__body:first-child').style.display = 'none';
        }
    );
};