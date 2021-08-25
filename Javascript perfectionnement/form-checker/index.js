//1 - regex lors de la saisi pseudo => 1) listener sur type,+ maj span 2) regex sur value
//2 - regex lors de la saisi email => 1) listener sur type,+ maj span 2) regex sur value
//3 - regex lors de la saisi Mot de passe  => 1) listener sur type,+ maj span  et p +  2 regex sur value + controle contenue de MDP Confirm sinon span de confirm
//4 - regex lors de la saisi Confirm MDP  => 1) listener sur type,+ maj span  et p +  2 regex sur value + Après saisi ici,  controle contenue de MDP sinon span de confirm
const inputs = document.querySelectorAll(
  'input[type="text"], input[type ="password"]'
);
console.log(inputs);
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector(`.${tag}-container`);
  const span = document.querySelector(`.${tag}-container > span`);
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = "";
  }
};
let pseudo, email, password, confirmPass;
let progressBar = document.getElementById("progress-bar");
let progressBar2 = document.querySelector(".password-container > p");
let form = document.querySelector("form");
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit être entre 3 et 20 caractère");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]+$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};
const emailChecker = (value) => {
  if (!value.match(/^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,4}$/)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
const passwordChecker = (value) => {
  progressBar.classList = "";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    errorDisplay("password", "", true);
    password = value;
    progressBar.classList.add("progressBlue");
  } else {
    errorDisplay("password", "", true);
    password = value;
    progressBar.classList.add("progressGreen");
  }

  if (confirmPass !== undefined) {
    if (confirmPass.length > 0) {
      confirmPasswordChecker(confirmPass);
    }
  }
};
const confirmPasswordChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = value;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "password":
        passwordChecker(e.target.value);
        break;

      case "confirm":
        confirmPasswordChecker(e.target.value);
        break;

      default:
        null;
        break;
    }
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass === password) {
    const data = {
      pseudo,
      email,
      password,
    };
    console.log(data);

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    form.reset();
    progressBar.classList = "";
    alert("inscription validée");
  } else {
    alert("veuillez renseigner les info");
  }
});
