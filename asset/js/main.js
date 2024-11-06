/////////////////////Selections////////////////////////////
const F_name = document.querySelector(".inp1");
const L_name = document.querySelector(".inp2");
const Gmail = document.querySelector(".inp3");
const Password = document.querySelector(".inp4");
const CheckBox = document.querySelector(".inp5");
const submit = document.querySelector(".btn1");
const fp = document.querySelector(".forget_pass");

/////////////////////F_name Keyup////////////
F_name.addEventListener("input", (e) => {
  // Allow uppercase and lowercase letters only
  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");

  /<script.*?>.*?<\/script>/i.test(e.target.value) && (e.target.value = "");
});

/////////////////////L_name Keyup////////////
L_name.addEventListener("input", (e) => {
  // Allow uppercase and lowercase letters only
  e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");

  /<script.*?>.*?<\/script>/i.test(e.target.value) && (e.target.value = "");
});

///////////////////////Gmail Keyup////////////
Gmail.addEventListener("input", (e) => {
  // Allow specific characters in password
  e.target.value = e.target.value.replace(
    /[^A-Z-a-z0-9@&_[}{#(./|?!,'";:]/g,
    ""
  );
});

/////////////////////Password Keyup////////////
Password.addEventListener("input", (e) => {
  // Allow specific characters in password
  e.target.value = e.target.value.replace(
    /[^a-z A-Z 0-9@&_[}{#(./|?!,'";:]/g,
    ""
  );
});

/////////////////////Submit Button Click////////////
submit.addEventListener("click", () => {
  const passwordVal = Password.value;
  const Gmailval = Gmail.value;

  // Gmail validation: ensure it has @ and ends with a valid domain
  const validGmailFormat =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|ir|net|tr)$/.test(Gmailval);

  // Check password conditions
  const hasMinLength = passwordVal.length >= 8;
  const hasLowercase = /[a-z]/.test(passwordVal);
  const hasUppercase = /[A-Z]/.test(passwordVal);
  const hasNumber = /[0-9]/.test(passwordVal);
  const hasSpecialChar = /[-_$@!?&.,]/.test(passwordVal);

  // Gmail validation check
  if (!validGmailFormat) {
    alert(
      "The Gmail is not valid. Please ensure it includes '@' and ends with .tr , .com, .ir, or .net."
    );
  }
  // Password validation check
  else if (
    !hasMinLength ||
    !hasLowercase ||
    !hasUppercase ||
    !hasNumber ||
    !hasSpecialChar
  ) {
    alert(
      "Your password should be at least 8 characters and include a combination of uppercase and lowercase letters, numbers, and special characters (-, _, @, $, !, ?, ., ,)."
    );
  } else {
    alert("Your account has been created successfully.");
    location.reload();
  }
});
