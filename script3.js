// Extract query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const birthday = urlParams.get('birthday');
const email = urlParams.get('email');
const phoneNumber = urlParams.get('phoneNumber');

// Display the data
const displayedData = document.getElementById('displayedData');
displayedData.innerHTML = `
    <div class="Mulah-section">MULAH MEMBERSHIP</div>
    <div class="name-section">${name}</div>
    <div class="phoneNumber"><strong>Phone Number:</strong> ${phoneNumber}</div>
    <div class="email"><strong>Email:</strong> ${email}</div>
    <div class="birthday"><strong>Birthday:</strong> ${birthday}</div>`;

