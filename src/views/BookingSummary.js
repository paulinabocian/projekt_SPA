import { Cart } from "./Cart";
import { NavButton } from "../common/NavButton";

export function BookingSummary() {
  const div = document.createElement("div");
  div.classList.add("reservationForm");

  const h2 = document.createElement("h2");
  h2.innerText = "Podsumowanie rezerwacji";

  div.append(h2);

  const h5 = document.createElement("h5");
  h5.innerText = "Dane osoby rezerwującej:";

  div.append(h5);

  const name = localStorage.getItem("personalName");
  const nameParagraph = document.createElement("p");
  nameParagraph.innerText = "Imię i nazwisko: " + name;

  h5.append(nameParagraph);

  const email = localStorage.getItem("personalEmail");
  const emailParagraph = document.createElement("p");
  emailParagraph.innerText = "Adres email: " + email;

  h5.append(emailParagraph);

  const bookingInfo = document.createElement("h5");
  bookingInfo.innerText = "Informacje o rezerwacji: ";

  div.append(bookingInfo);

  const arrival = localStorage.getItem("arrival");
  const arrivalParagraph = document.createElement("p");
  arrivalParagraph.innerText = "Data przyjazdu " + arrival;

  bookingInfo.append(arrivalParagraph);

  const departure = localStorage.getItem("departure");
  const departureParagraph = document.createElement("p");
  departureParagraph.innerText = "Data wyjazdu " + departure;

  bookingInfo.append(departureParagraph);

  const days = localStorage.getItem("calculatedDays");
  const daysParagraph = document.createElement("p");
  daysParagraph.innerText = "Doby hotelowe: " + days;

  bookingInfo.append(daysParagraph);

  const cartButton = NavButton("Przejdź do koszyka", Cart);

  div.append(cartButton);

  return div;
}
