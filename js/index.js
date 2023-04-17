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
let idCounter = 0;
function makeId() {
	let id = 'entry' + idCounter++;
	return id;
}

let entryById={};
messageForm.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = event.target.usersName.value;
	let email = event.target.usersEmail.value;
	let message = event.target.usersMessage.value;

	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Message:', message);
	const uid = makeId();
	let newMessage = document.createElement('li');

	newMessage.innerHTML = `<a  href="mailto:${email} ">${name}  </a><span>wrote: ${message} </span>`;
	newMessage.setAttribute('id', uid);

	entryById[uid] = {usersName: name, usersEmail: email, usersMessage:message};
	console.log("BEFORE : "+ entryById[uid]);
	newMessage.appendChild(makeRemoveButton(uid));
	newMessage.appendChild(makeEditButton(uid));

	messageList.appendChild(newMessage);
	messageForm.reset();
	messageSection.style.display = 'block';
	messageSection.hidden = false;
});

function makeRemoveButton(uid){
	let removeButton = document.createElement('button');
	removeButton.innerText = 'remove';
	removeButton.type = 'button';
	removeButton.addEventListener('click', () => {
		let entry = removeButton.parentNode;
		let uid1 = entry.getAttribute('id');
		delete entryById[uid1];
		entry.remove();
		if (messageList.childElementCount === 0){
			messageSection.style.display = 'none';
		};
		console.log("AFTER DELETE : " + entryById)
	})
	return removeButton;
};

function makeEditButton(uid) {
	const editButton = document.createElement('button');
	editButton.innerText = 'edit';
	editButton.type = 'button';
	editButton.addEventListener('click', () => {
		const entry = editButton.parentNode;
		let clonedForm = messageForm.cloneNode(true);
		clonedForm.usersName.value = entryById[uid].usersName;
		clonedForm.usersEmail.value = entryById[uid].usersEmail;
		clonedForm.usersMessage.value = entryById[uid].usersMessage;
		clonedForm.addEventListener('submit', function editMessage(event) {
			event.preventDefault();
			entryById[uid].usersName = event.target.usersName.value;
			entryById[uid].usersEmail = event.target.usersEmail.value;
			entryById[uid].usersMessage = event.target.usersMessage.value;
			entry.innerHTML = `<a href="mailto:${entryById[uid].usersEmail}">${entryById[uid].usersName}</a><span>wrote: ${entryById[uid].usersMessage}</span>`;
			entry.appendChild(makeRemoveButton(uid));
			entry.appendChild(makeEditButton(uid));
			clonedForm.remove();
		});
		entry.appendChild(clonedForm);
	});
	return editButton;
};

