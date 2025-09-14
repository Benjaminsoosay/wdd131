// Temple data array
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/salt-lake-temple-37762.jpg",
    imageAlt: "Salt Lake Temple"
  },
  {
    name: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884-05-17",
    area: 119000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/800x500/logan-temple-768051-wallpaper.jpg",
    imageAlt: "Logan Utah Temple"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 100000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg",
    imageAlt: "Manti Utah Temple"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Oahu, Hawaii",
    dedicated: "1919-11-27",
    area: 47000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-775369-wallpaper.jpg",
    imageAlt: "Laie Hawaii Temple"
  },
  {
    name: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-2.jpeg",
    imageAlt: "Washington D.C. Temple"
  },
  {
    name: "Portland Oregon Temple",
    location: "Lake Oswego, Oregon, United States",
    dedicated: "1989-08-19",
    area: 88000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/800x500/portland-temple-768074-wallpaper.jpg",
    imageAlt: "Portland Oregon Temple"
  },
  {
    name: "Bountiful Utah Temple",
    location: "Bountiful, Utah, United States",
    dedicated: "1995-01-08",
    area: 104000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/800x500/bountiful-temple-766497-wallpaper.jpg",
    imageAlt: "Bountiful Utah Temple"
  },
  // Additional temples
  {
    name: "Abuja Nigeria Temple",
    location: "Abuja, Nigeria",
    dedicated: "2005-03-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/abuja-nigeria/800x500/abuja-nigeria-temple-lds-273999-wallpaper.jpg",
    imageAlt: "Abuja Nigeria Temple"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/Rome-Temple-2163337.jpg",
    imageAlt: "Rome Italy Temple"
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California, United States",
    dedicated: "1993-04-25",
    area: 72000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/800x500/san-diego-temple-765109-wallpaper.jpg",
    imageAlt: "San Diego California Temple"
  }
];

// DOM elements
const templeCardsContainer = document.getElementById('temple-cards');
const navButtons = document.querySelectorAll('.nav-btn');

// Function to format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to format area with commas
function formatArea(area) {
  return area.toLocaleString('en-US');
}

// Function to create temple card HTML
function createTempleCard(temple) {
  return `
    <div class="temple-card">
      <img src="${temple.imageUrl}" alt="${temple.imageAlt}" class="temple-image" loading="lazy">
      <div class="temple-info">
        <h2 class="temple-name">${temple.name}</h2>
        <p class="temple-detail">
          <i class="fas fa-map-marker-alt"></i> ${temple.location}
        </p>
        <p class="temple-detail">
          <i class="fas fa-calendar-alt"></i> Dedicated: ${formatDate(temple.dedicated)}
        </p>
        <p class="temple-detail">
          <i class="fas fa-ruler-combined"></i> Area: ${formatArea(temple.area)} sq ft
        </p>
      </div>
    </div>
  `;
}

// Function to display temples based on filter
function displayTemples(filter = 'home') {
  templeCardsContainer.innerHTML = '';
  
  let filteredTemples = [];
  
  switch(filter) {
    case 'home':
      filteredTemples = temples;
      break;
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }
  
  filteredTemples.forEach(temple => {
    templeCardsContainer.innerHTML += createTempleCard(temple);
  });
}

// Set up navigation button event listeners
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Display temples based on filter
    displayTemples(button.id);
  });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  // Display all temples initially
  displayTemples();
  
  // Set footer content
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  
  // Add Font Awesome for icons (since we're using them in our temple cards)
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  document.head.appendChild(fontAwesome);
});
