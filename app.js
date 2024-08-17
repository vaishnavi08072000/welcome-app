function fetchMessage() {
    fetch('/api/message')
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        });
}

