import { ReservationFormStep1 } from "./ReservationFormStep1";
import { NavButton } from "../common/NavButton";

export function ReservationFormStep0() {
  const form = document.createElement("div");
  form.classList.add("reservationFormStep0");

  const h2 = document.createElement("h2");
  h2.setAttribute("id", "step0");
  h2.innerText = `Rezerwacja`;

  form.append(h2);

  const firstStep = document.createElement("div");
  firstStep.classList.add("step");

  const firstStepParagraph = document.createElement("p");
  firstStepParagraph.innerHTML = "Dane osoby rezerwujacej:";

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("row", "mb-3");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "colFormLabelSm");
  nameLabel.classList.add("col-sm-2", "col-form-label", "col-form-label-sm");
  nameLabel.innerText = "Imię i nazwisko";

  const nameInputDiv = document.createElement("div");
  nameInputDiv.classList.add("col-sm-6");

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "name");

  inputName.classList.add("inputs", "form-control", "form-control-sm");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("min", "3");

  nameDiv.append(nameLabel);

  nameDiv.append(nameInputDiv);
  nameInputDiv.append(inputName);
  firstStep.append(nameDiv);

  const emailDiv = document.createElement("div");
  emailDiv.classList.add("row", "mb-3");

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "colFormLabelSm");
  emailLabel.classList.add("col-sm-2", "col-form-label", "col-form-label-sm");
  emailLabel.innerText = "Adres e-mail";

  const emailInputDiv = document.createElement("div");
  emailInputDiv.classList.add("col-sm-6");

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("id", "email");
  inputEmail.classList.add("inputs", "form-control", "form-control-sm");
  inputEmail.setAttribute("type", "email");

  emailDiv.append(emailLabel);

  emailDiv.append(emailInputDiv);
  emailInputDiv.append(inputEmail);
  firstStep.append(emailDiv);

  form.appendChild(firstStep);

  const nextStepButton = NavButton("Następny krok", ReservationFormStep1);
  if (inputName.value === "") {
    nextStepButton.setAttribute("disabled", "");
  }

  inputName.addEventListener("change", () => {
    let key = "personalName";
    localStorage.setItem(key, inputName.value);
    nextStepButton.removeAttribute("disabled", "");
  });

  inputEmail.addEventListener("change", () => {
    let key = "personalEmail";
    localStorage.setItem(key, inputEmail.value);
  });

  form.append(nextStepButton);
  return form;
}
