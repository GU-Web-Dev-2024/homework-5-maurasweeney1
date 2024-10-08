let viewedCount = 0;
let artPieces = document.querySelectorAll('.art-panel');
resetScreen();

// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

/* art panel click event */
for (let i = 0; i < artPieces.length; i++) {
    artPieces[i].addEventListener("click", function() {
        viewedArt(artPieces[i]);
    });
}

function viewedArt(artPanel) {
    if (!artPanel.classList.contains('viewed')) {
        artPanel.classList.add('viewed');
        viewedCount++;
        document.getElementById('counter').textContent = `Artworks Viewed: ${viewedCount}`;
    }
}

/* Reset button */
document.getElementById('reset-button').addEventListener("click", resetScreen);

function resetScreen() {
    artPieces = document.querySelectorAll('.art-panel');
    for (let i = 0; i < artPieces.length; i++) {
        artPieces[i].classList.remove('viewed');
    }
    viewedCount = 0;
    document.getElementById('counter').textContent = `Artworks Viewed: ${viewedCount}`;
}

/* add artwork */
document.getElementById('add-art-button').addEventListener("click", addArt);


function addArt() {
    if (newArtworks.length === 0) {
        console.log("No artworks left to select.");
        return null; 
    }

    const randomIndex = Math.floor(Math.random() * newArtworks.length);
    const selectedArtwork = newArtworks[randomIndex]; 

    newArtworks.splice(randomIndex, 1);

    const artPanel = document.createElement('div');
    artPanel.className = 'art-panel'; 

    const img = document.createElement('img');
    img.src = selectedArtwork.img; 
    img.alt = selectedArtwork.title;

    const description = document.createElement('p');
    description.textContent = `${selectedArtwork.title} by ${selectedArtwork.artist}`;

    artPanel.appendChild(img);
    artPanel.appendChild(description);

    document.querySelector('.art-grid').appendChild(artPanel);

    artPanel.addEventListener("click", function() {
        viewedArt(artPanel);
    });
}

