function checkLoyaltyPoints() {
    const phoneNumberInput = document.getElementById('mobileNumber');
    const phoneNumber = phoneNumberInput.value.trim();
    const validPhoneNumber = '60173527250';

    if (phoneNumber === validPhoneNumber) {
        window.location.href = `index2.html?phoneNumber=${encodeURIComponent(phoneNumber)}`;
    } else {
        alert('Invalid Number! Try again with 60173527250 ');
    }
}
