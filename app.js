//handle ticket

function handleTicket(ticketClass, isIncrease) {

    const ticketCount = getInputValue(ticketClass);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticketClass + '-count').value = ticketNewCount;
    totalCalculate();
}
//ticket price calculate

function totalCalculate() {

    const firstClassTicket = getInputValue('firstClass');
    const economyTicket = getInputValue('economy');
    const totalPrice = firstClassTicket * 150 + economyTicket * 100;
    document.getElementById('subtotal').innerText = '$' + totalPrice;
    const vat = totalPrice / 100 * 10;
    document.getElementById('vat').innerText = '$' + vat;
    const grandTotal = totalPrice + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}
//ticket count value

function getInputValue(ticketClass) {
    const ticketInput = document.getElementById(ticketClass + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
//handle booking now button

function bookingNow() {
    document.getElementById('firstClass-count').value = 0;
    document.getElementById('economy-count').value = 0;
    document.getElementById('subtotal').innerText = '$00';
    document.getElementById('vat').innerText = '$00';
    document.getElementById('grand-total').innerText = '$00';
    document.querySelector('.main-body').style.filter = 'blur(8px)'
    document.getElementById('booking-success').style.display = 'block';

}
//handle success buttton

function completeBtn() {
    document.getElementById('booking-success').style.display = 'none';
    document.querySelector('.main-body').style.filter = 'blur(0)'
}