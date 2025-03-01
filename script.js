//your JS code here. If required.

document.getElementById("userForm").addEventListener("click",(e)=>{
	e.preventDefault();

	let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let email = document.getElementById("email").value.trim();

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`);
})
