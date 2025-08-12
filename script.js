function getLyrics() {
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();

    if (artist === "" || song === "") {
        alert("Please enter both artist and song name!");
        return;
    }

    const apiUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;

    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            if (data.lyrics) {
                document.getElementById('lyrics').innerText = data.lyrics;
            } else {
                document.getElementById('lyrics').innerText = "Lyrics not found.";
            }
        })
        .catch(error => {
            console.error("API error:", error);
            document.getElementById('lyrics').innerText = "Error fetching lyrics.";
        });
}