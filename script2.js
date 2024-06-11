function toggleEmailField() {
    const emailInput = document.getElementById('email');
    const checkbox = document.getElementById('myCheckbox');

    
    emailInput.disabled = checkbox.checked; //disable email input

    
    if (checkbox.checked) {
        emailInput.value = "";
        emailInput.style.backgroundColor = "#cccccc"; 
    } else {
        emailInput.style.backgroundColor = ""; 
    }
}

function submitData() {
    const nameInput = document.getElementById('name');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const emailInput = document.getElementById('email');
    const checkbox = document.getElementById('myCheckbox');


    const urlParams = new URLSearchParams(window.location.search);
    const phoneNumber = urlParams.get('phoneNumber');

    if (nameInput.value === "" || dayInput.value === "" || monthInput.value === "" || yearInput.value === "" || (emailInput.value === "" && !checkbox.checked)) {
        alert("Please fill in all required fields.");
        return;
    }

    const birthdayValue = `${dayInput.value}/${monthInput.value}/${yearInput.value}`;
    const emailValue = checkbox.checked ? "Not available" : emailInput.value;
    const queryParams = `?name=${encodeURIComponent(nameInput.value)}&birthday=${encodeURIComponent(birthdayValue)}&email=${encodeURIComponent(emailValue)}&phoneNumber=${encodeURIComponent(phoneNumber)}`;
    window.location.href = `index3.html${queryParams}`;
}