/* Developer: Owen Woods
			  Contact: ojwoods@eagles.usi.edu
			  Last Updated: 09/04/23 */
function myFunction() {
  var x = document.getElementById("male").required;
  document.getElementById("demo").innerHTML = x;
}
function myFunction() {
  var x = document.getElementById("female").required;
  document.getElementById("demo").innerHTML = x;
}
function myFunction() {
  var x = document.getElementById("other").required;
  document.getElementById("demo").innerHTML = x;
}
function myFunction() {
  confirm("Press a button!");
}
function myFunction() {
  document.getElementById("myForm").reset();
}
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("button", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value} and email of ${email.value}`
    );

    name.value = "";
    email.value = "";
  }
});