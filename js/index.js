// Get the current date
const today = new Date();

// Get the current year
const thisYear = today.getFullYear();

// Get the footer element
const footer = document.querySelector('footer');

// Create a new paragraph element for the copyright text
const copyright = document.createElement('p');

// Set the inner HTML of the copyright element to display your name and the current year
copyright.innerHTML = 'Vladimir ' + '&copy;' + thisYear;

// Append the copyright element to the footer
footer.appendChild(copyright);