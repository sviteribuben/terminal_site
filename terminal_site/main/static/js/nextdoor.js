function showMessage(message) {
    document.getElementById('divMessage').innerHTML = message;
}

function toggleSaveDialog() {
    const saveDialog = document.getElementById('save');
    saveDialog.style.display = saveDialog.style.display === 'block' ? 'none' : 'block';
}