// Navigate to the home screen
function returnHome() {
    window.location.href = 'index.html'; // Update to your home screen URL if different
}

// Open the Help Menu modal
function openHelpMenu() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'block';
}

// Close the Help Menu modal
function closeHelpMenu() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'none';
}

// Close the modal if clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('helpModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
