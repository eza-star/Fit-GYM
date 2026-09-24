```javascript
// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// ===============================
// NAVIGASI MENU
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// ===============================
// PILIH PROGRAM
// ===============================

const programButtons = document.querySelectorAll(".program-btn");

programButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const programName =
            button.parentElement.querySelector("h3").textContent;

        alert(
            "Anda memilih program: " +
            programName +
            "\nSilakan hubungi Fit GYM untuk informasi lebih lanjut."
        );

    });

});


// ===============================
// PILIH PAKET MEMBERSHIP
// ===============================

const priceButtons = document.querySelectorAll(".price-btn");

priceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedPlan =
            button.getAttribute("data-plan");

        alert(
            "Anda memilih paket " +
            selectedPlan +
            ".\nSilakan isi formulir kontak untuk melanjutkan."
        );

    });

});


// ===============================
// FORM KONTAK
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama =
        document.getElementById("nama").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const pesan =
        document.getElementById("pesan").value.trim();


    // VALIDASI FORM

    if (nama === "" || email === "" || pesan === "") {

        alert(
            "Silakan isi semua data terlebih dahulu."
        );

        return;
    }


    // PESAN BERHASIL

    alert(
        "Terima kasih, " +
        nama +
        "!\nPesan kamu berhasil dikirim."
    );


    // RESET FORM

    contactForm.reset();

});
```
