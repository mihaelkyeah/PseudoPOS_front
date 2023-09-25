document.querySelector('#button-markReady').addEventListener('click', () => {
    if(randomInt(2) === 1) {
        showModal('modal-orderReadySuccess');
        enableButton('button-markDelivered');
        disableButton('button-markReady');
    }
    else
        showModal('modal-orderReadyFailure');
});

document.querySelector('#modal-orderReadySuccess-button-OK').addEventListener('click', () => {
    dismissModal('modal-orderReadySuccess');
});
document.querySelector('#modal-orderReadyFailure-button-OK').addEventListener('click', () => {
    dismissModal('modal-orderReadyFailure');
});

document.querySelector('#button-markDelivered').addEventListener('click', () => {
    if(randomInt(2) === 1)
        showModal('modal-orderDeliverySuccess');
    else
        showModal('modal-orderDeliveryFailure');
});

document.querySelector('#modal-orderDeliverySuccess-button-OK').addEventListener('click', () => {
    dismissModal('modal-orderDeliverySuccess');
});
document.querySelector('#modal-orderDeliveryFailure-button-OK').addEventListener('click', () => {
    dismissModal('modal-orderDeliveryFailure');
});