/// Open modal
const btnNew = document.querySelector(".app__content-add");
btnNew.addEventListener(
    'click',
    () => {
        document.querySelector('.modal').style.display = 'flex';
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