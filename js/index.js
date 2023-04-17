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
for (let skill of skills) {
 let li = document.createElement('li');
 li.innerText = skill;
 skillsList.appendChild(li);
}
let messageForm = document.querySelector("[name='leave_message']");
let messageSection = document.getElementById('messages');
let messageList = messageSection.querySelector('ul');
messageSection.hidden = true;
messageForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = event.target.usersName.value;
	let email = event.target.usersEmail.value;
	let message = event.target.usersMessage.value;

	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Message:', message);

	let removeButton = document.createElement('button');
	let editButton = document.createElement('button');
	let newMessage = document.createElement('li');

	newMessage.innerHTML = `<a  href="mailto:${email} ">${name}  </a><span>wrote: ${message} </span>`;
	editButton.innerText = 'edit';
	editButton.type = 'button';
	removeButton.innerText = 'remove';
	removeButton.type = 'button';

	newMessage.appendChild(editButton);
	newMessage.appendChild(removeButton);
	messageList.appendChild(newMessage);
	messageForm.reset();
	messageSection.style.display = 'block';
	messageSection.hidden = false;

	removeButton.addEventListener('click', function () {
		const entry = removeButton.parentNode;
		entry.remove();
		console.log(messageSection.childElementCount)
		if (messageList.childElementCount === 0){
			messageSection.style.display = 'none';
		};
	});
	editButton.addEventListener('click', function (){
		let editedMessage = prompt('Enter the new message:',message);
		newMessage.innerHTML = `<a  href="mailto:${email} ">${name}  </a><span>wrote: ${editedMessage} </span>`
		message = editedMessage;
		newMessage.appendChild(editButton);
		newMessage.appendChild(removeButton);
		messageList.appendChild(newMessage);
	});
});
