document.getElementById('sosButton').addEventListener('click', function() {
    // Functionality to send location or alert can be added here
    let statusMessage = document.getElementById('statusMessage');
    statusMessage.innerText = 'Sending your location to nearby police station...';

    // Simulate sending the location
    setTimeout(() => {
        statusMessage.innerText = 'Location sent successfully!';
    }, 2000);
});
