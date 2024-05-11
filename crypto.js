let balance = 0;

function updateBalance(amount) {
    balance += amount;
    document.getElementById("balance").innerText = balance + " BTC";
}

function makeTransaction() {
    const amount = parseFloat(document.getElementById("amount").value);
    const recipient = document.getElementById("recipient").value;

    if (isNaN(amount) || amount <= 0 || !recipient.trim()) {
        alert("Please enter a valid amount and recipient address.");
        return;
    }

    updateBalance(amount);
    alert(`Transaction of ${amount} BTC sent to ${recipient}`);
}
