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

// Select the message form by name
const messageForm = document.forms.leave_message;

// Add event listener for form submit
messageForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Retrieve the form field values
  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;

  // Log the form field values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

const messageSection = document.querySelector('#messages');
//const messageSectionHeader = document.querySelector('h2');
const messageList = messageSection.querySelector('ul');

// function hideMessageSection() {
//   if (messageList.children.length === 0 ) {
//     messageSection.style.display = 'none';   
//   } else {
//     messageSection.style.display = 'block';
//   }
// }

// function createEditButton(){
//   const editButton = document.createElement('button');
//   editButton.innerText = 'edit';
//   editButton.type = 'button';

//   editButton.addEventListener('click', function(){
//     const newMessage = prompt('enter new message: ');
//     if (newMessage !== null) {
//       message = newMessage;
//     }
//   });
//   return editButton;
// };

const newMessage = document.createElement('li');
newMessage.innerHTML = `<a href="mailto:${email} ">${name}  </a><span>wrote: ${message} </span>`;
// Create a new remove button
const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';

// Add event listener for remove button click
removeButton.addEventListener('click', function() {
  // Find the parent element of the button and remove it
  const entry = removeButton.parentNode;
  entry.remove();
  //hideMessageSection();
});

// Append the remove button to the new message element
newMessage.appendChild(removeButton);
//newMessage.appendChild(createEditButton(newMessage.querySelector('span')));


// Append the new message to the message list
messageList.appendChild(newMessage);

// Clear the form
  messageForm.reset();

  messageSection.style.display = 'block';
  //hideMessageSection();
});
