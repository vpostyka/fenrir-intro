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

// List of technical skills
const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'];

// Get the skills section
const skillsSection = document.getElementById('skills');

// Get the unordered list element
const skillsList = skillsSection.querySelector('ul');

// Loop through the skills array and add each skill to the list
for (let i = 0; i < skills.length; i++) {
  // Create a new list item element
  const skill = document.createElement('li');

  // Set the inner text of the list item element to the current skill
  skill.innerText = skills[i];

  // Append the list item element to the unordered list
  skillsList.appendChild(skill);
}
