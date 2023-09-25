document.querySelector('#button-addItem').addEventListener('click', () => {
    showModal('modal-itemAddSuccess');
});
document.querySelector('#modal-itemAddSuccess-button-OK').addEventListener('click', () => {
    dismissModal('modal-itemAddSuccess');
    enableButton('button-createOrder');
});

document.querySelector('#button-createOrder').addEventListener('click', () => {
    if(randomInt(2) === 1)
        showModal('modal-orderSuccess');
    else
        showModal('modal-orderFailure');
});

document.querySelector('#modal-orderSuccess-button-newOrder').addEventListener('click', () => {
    window.location.reload();
});
document.querySelector('#modal-orderSuccess-button-seePending').addEventListener('click', () => {
    window.location = 'ordenes-pendientes.html';
});
document.querySelector('#modal-orderFailure-button-OK').addEventListener('click', () => {
    dismissModal('modal-orderFailure');
});