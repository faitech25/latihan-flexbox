// Fungsi Validasi Formulir
function validateForm() {
    const usernameInput = document.getElementById('nama').value;
    console.log(usernameInput);

    const emailInput = document.getElementById('email').value;
    console.log(emailInput);

    const destinasi = document.getElementById('destinasi').value;
    console.log(destinasi);

    if (usernameInput == '') {
        alert('Form nama mohon diisi');
    } else if (emailInput == '') {
        alert('Form email mohon diisi');
    } else if (destinasi == '') {
        alert('Form destinasi mohon diisi');
    } else
    {
        alert ('Sukses mengirim form');
    }
}
