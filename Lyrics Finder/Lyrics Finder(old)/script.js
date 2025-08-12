function getLyrics() {
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();

    if (artist === "" || song === "") {
        alert("Please enter both artist and song name!");
        return;
    }

    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.lyrics) {
                document.getElementById('lyrics').innerText = data.lyrics;
            } else {
                document.getElementById('lyrics').innerText = "Lyrics not found.";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('lyrics').innerText = "An error occurred.";
        });
}
