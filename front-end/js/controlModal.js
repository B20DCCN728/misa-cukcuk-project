const modal = Document.getElementById('modal');

const addEmployee = Document.getElementByClassName('app__content-add');
addEmployee.addEventListener('click', () => {
    modal.style.display = 'block';
});