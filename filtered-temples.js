// Temple array with the required properties
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temples (student added)
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/2-Rome-Temple-2190090.jpg"
  },
  {
    templeName: "Copenhagen Denmark",
    location: "Copenhagen, Denmark",
    dedicated: "2004, May, 23",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16182.jpg"
  }
];

// Function to create temple cards
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';
  
  card.innerHTML = `
    <img src="${temple.imageUrl}" alt="${temple.templeName}" class="temple-img" loading="lazy">
    <div class="temple-info">
      <h2 class="temple-name">${temple.templeName}</h2>
      <p class="temple-detail"><strong>Location:</strong> ${temple.location}</p>
      <p class="temple-detail"><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p class="temple-detail"><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </div>
  `;
  
  return card;
}

// Function to display temples based on filter
function displayTemples(filter = 'home') {
  const container = document.getElementById('temple-cards');
  container.innerHTML = '';
  
  let filteredTemples = temples;
  
  if (filter === 'old') {
    filteredTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(',')[0]);
      return year < 1900;
    });
  } else if (filter === 'new') {
    filteredTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(',')[0]);
      return year > 2000;
    });
  } else if (filter === 'large') {
    filteredTemples = temples.filter(temple => temple.area > 90000);
  } else if (filter === 'small') {
    filteredTemples = temples.filter(temple => temple.area < 10000);
  }
  
  filteredTemples.forEach(temple => {
    const card = createTempleCard(temple);
    container.appendChild(card);
  });
}

// Set up filter buttons
document.getElementById('home').addEventListener('click', function() {
  setActiveButton(this);
  displayTemples('home');
});

document.getElementById('old').addEventListener('click', function() {
  setActiveButton(this);
  displayTemples('old');
});

document.getElementById('new').addEventListener('click', function() {
  setActiveButton(this);
  displayTemples('new');
});

document.getElementById('large').addEventListener('click', function() {
  setActiveButton(this);
  displayTemples('large');
});

document.getElementById('small').addEventListener('click', function() {
  setActiveButton(this);
  displayTemples('small');
});

function setActiveButton(activeButton) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => button.classList.remove('active'));
  
  // Add active class to clicked button
  activeButton.classList.add('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Display all temples initially
  displayTemples();
  
  // Set footer content
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
