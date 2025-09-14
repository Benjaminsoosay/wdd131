// Temple data array
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: 1893,
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/salt-lake-temple-37762.jpg"
  },
  {
    name: "Logan Utah Temple",
    location: "Logan, Utah, USA",
    dedicated: 1884,
    area: 119619,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/800x500/logan-temple-775925-wallpaper.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah, USA",
    dedicated: 1888,
    area: 100373,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg"
  },
  {
    name: "St. George Utah Temple",
    location: "St. George, Utah, USA",
    dedicated: 1877,
    area: 112232,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/800x500/st-george-temple-720912-wallpaper.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/Rome-Temple-2167085.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: 2017,
    area: 44575,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-video.png"
  },
  // Added three more temples
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: 2005,
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California, USA",
    dedicated: 1993,
    area: 72000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-california-temple-765109-wallpaper.jpg"
  },
  {
    name: "Washington D.C. Temple",
    location: "Kensington, Maryland, USA",
    dedicated: 1974,
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-2.jpeg"
  }
];

// Function to create temple card HTML
function createTempleCard(temple) {
  return `
    <div class="temple-card">
      <div class="temple-image">
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
      </div>
      <div class="temple-details">
        <h2>${temple.name}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area.toLocaleString()} sq ft</p>
      </div>
    </div>
  `;
}

// Function to render temples
function renderTemples(templeList) {
  const container = document.getElementById('temple-cards');
  container.innerHTML = '';
  templeList.forEach(temple => {
    const cardElement = document.createElement('div');
    cardElement.innerHTML = createTempleCard(temple);
    container.appendChild(cardElement.firstElementChild);
  });
}

// Filter functions
function filterOldTemples() {
  return temples.filter(temple => temple.dedicated < 1900);
}

function filterNewTemples() {
  return temples.filter(temple => temple.dedicated > 2000);
}

function filterLargeTemples() {
  return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
  return temples.filter(temple => temple.area < 10000);
}

// Set active button
function setActiveButton(activeButton) {
  document.querySelectorAll('nav button').forEach(button => {
    button.classList.remove('active');
  });
  activeButton.classList.add('active');
}

// Event listeners for buttons
document.getElementById('home').addEventListener('click', () => {
  setActiveButton(document.getElementById('home'));
  renderTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
  setActiveButton(document.getElementById('old'));
  renderTemples(filterOldTemples());
});

document.getElementById('new').addEventListener('click', () => {
  setActiveButton(document.getElementById('new'));
  renderTemples(filterNewTemples());
});

document.getElementById('large').addEventListener('click', () => {
  setActiveButton(document.getElementById('large'));
  renderTemples(filterLargeTemples());
});

document.getElementById('small').addEventListener('click', () => {
  setActiveButton(document.getElementById('small'));
  renderTemples(filterSmallTemples());
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Set footer content
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  
  // Render all temples initially
  renderTemples(temples);
});
