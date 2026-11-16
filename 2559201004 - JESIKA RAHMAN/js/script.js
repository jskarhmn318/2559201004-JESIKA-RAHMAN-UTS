document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Terima kasih telah menghubungi KARA SCOOPS! Pesan kamu berhasil diisi.");

            contactForm.reset();
        });
    }
});