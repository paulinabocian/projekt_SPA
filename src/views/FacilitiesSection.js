import { NavButton } from "../common/NavButton";
import { ReservationFormStep0 } from "./ReservationFormStep0";

export function FacilitiesSection() {
  const section = document.createElement("div");

  section.innerHTML = `<h3>Wykorzystaj możliwości, jakie daje pobyt w naszym SPA:</h3>`;
  const div = document.createElement("div");

  div.innerHTML = `
  <div class="facilities">
  <ul>
  <li> <i class="fa-solid fa-dog"></i>&nbsp&nbsp&nbspPrzyjazne zwierzętom</li>
  <li> <i class="fa-solid fa-wifi"></i>&nbsp&nbsp&nbspDarmowy dostęp do Wi-Fi</li>
  <li> <i class="fa-solid fa-brain"></i>&nbsp&nbsp&nbspMożliwość wyciszenia</li>
  <li> <i class="fa-solid fa-people-roof"></i>&nbsp&nbsp&nbspKameralna atmosfera</li>
  <li> <i class="fa-solid fa-volleyball"></i>&nbsp&nbsp&nbspDostęp do pływalni i strefy boisk</li>
  </ul>
  </div>`;

  div.classList.add("facilitiesSection");
  const reservationButton = NavButton("Zarezerwuj pobyt", ReservationFormStep0);

  div.appendChild(reservationButton);
  section.append(div);

  return section;
}
