document.addEventListener("DOMContentLoaded", function () {
    let balance = 0;
    const claimBtn = document.getElementById("claim-btn");
    const message = document.getElementById("message");
    const balanceDisplay = document.getElementById("balance");

    function claimBitcoin() {
        balance += 0.00001; // Contoh jumlah klaim
        balanceDisplay.textContent = balance.toFixed(5);
        message.textContent = "Berhasil klaim! Tunggu 5 menit untuk klaim lagi.";
        claimBtn.disabled = true;

        setTimeout(() => {
            claimBtn.disabled = false;
            message.textContent = "";
        }, 300000); // 5 menit (300000 ms)
    }

    claimBtn.addEventListener("click", claimBitcoin);
});
