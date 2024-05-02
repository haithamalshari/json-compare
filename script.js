const turkishBtn = document.getElementById('turkishBtn');
const arabicBtn = document.getElementById('arabicBtn');
const turkishDataDiv = document.getElementById('turkishData');
const arabicDataDiv = document.getElementById('arabicData');

const turkishFileURL = 'https://drive.google.com/file/d/1sMFIkTG2u1YUlDJ1Omt2kl6EElB2FbjD';
const arabicFileURL = 'https://drive.google.com/file/d/1MnTzPw9geyZQKlF-oWcI5LrPDvV61ldO';

turkishBtn.addEventListener('click', () => {
    loadJSON(turkishFileURL);
});

arabicBtn.addEventListener('click', () => {
    loadJSON(arabicFileURL);
});

function loadJSON(fileURL) {
    fetch(fileURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Display JSON data
        turkishDataDiv.innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error loading JSON file:', error));
}
