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
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("login-message");

    const auth = firebase.auth();

    // Login
    loginBtn.addEventListener("click", () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                loginMessage.textContent = "Login berhasil!";
            })
            .catch(error => {
                loginMessage.textContent = error.message;
            });
    });

    // Register
    registerBtn.addEventListener("click", () => {
        const email = emailInput.value;
        const password = passwordInput.value;
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                loginMessage.textContent = "Registrasi berhasil, silakan login!";
            })
            .catch(error => {
                loginMessage.textContent = error.message;
            });
    });

    // Logout
    logoutBtn.addEventListener("click", () => {
        auth.signOut().then(() => {
            loginMessage.textContent = "Logout berhasil!";
        });
    });

    // Cek Status Login
    auth.onAuthStateChanged(user => {
        if (user) {
            loginMessage.textContent = `Login sebagai: ${user.email}`;
        } else {
            loginMessage.textContent = "Silakan login atau daftar.";
        }
    });
});
