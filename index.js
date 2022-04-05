async function getUsers() {
	let response = await fetch("users.json");
	let users = await response.json();
	return users;
}

function getUserDiv(user) {
	return `
        <div class="online-user">
            <div class="username">${user.username}</div>
            <div class="online-circle"></div>
        </div>
    `;
}

getUsers().then((users) => {
	document.body.innerHTML = `<div class="online-users">
        ${users.map((user) => getUserDiv(user)).join("")}
    </div>`;
});
