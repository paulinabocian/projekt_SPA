import { NavButton } from "../common/NavButton";
import { RoomList } from "./RoomList";
import { ReservationFormStep0 } from "./ReservationFormStep0";

export function RoomDetails(roomId) {
  const div = document.createElement("div");
  div.classList.add("roomDetails");

  div.innerHTML = `
  
    <p class="loading">Ładuję pokój...</p>
  `;

  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then((response) => response.json())
    .then((room) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <h3>${room.name}</h3>
        <p>Liczba łóżek: ${room.beds} x 🛌</p>
        <p>Liczba gości: ${room.guests} x 🧑</p>
        <div class="imgRoomDetails" id=room${room.id}></div>
        <p>${room.description}</p>
        <p>
          <strong>${room.price.toFixed(2)} PLN</strong>
        </p>
      `;

      const divButtons = document.createElement("div");
      divButtons.classList.add("buttons");

      const backButton = NavButton("Pokaż wszytskie pokoje", RoomList);
      const addButton = NavButton("Zarezerwuj", ReservationFormStep0);

      divButtons.append(backButton);
      divButtons.append(addButton);
      article.append(divButtons);
      div.querySelector(".loading").remove();
      div.append(article);
    });
  return div;
}
