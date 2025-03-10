//your JS code here. If required.

document.getElementById("userForm").addEventListener("click",(e)=>{
	e.preventDefault();

	let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let email = document.getElementById("email").value.trim();

	let message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;

    alert(message);
})
