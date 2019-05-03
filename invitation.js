function showGreeting() {
  let name = document.form.name.value;
  let isValid = isValidName(name);
  if (isValid) {
    let message = "Hello " + name;
    alert(message);
  } else {
    let defaultMessage = "Hello Friend!";
    alert(defaultMessage);
  }
}

function isValidName(name) {
  let isString = typeof name === "string";
  let isNotEmpty = name !== "";
  let isValid = isString && isNotEmpty;
  return isValid;
}

function checkName() {
  let name = document.form.name.value;
  if (isValidName(name)) {
    return true;
  } else {
    alert("Please enter a valid name");
    return false;
  }
}


