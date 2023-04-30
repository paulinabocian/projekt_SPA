import { NavButton } from "../common/NavButton";
import { RoomList } from "./RoomList";

export function AboutRooms() {
  window.scrollTo(0, 0);
  const div = document.createElement("div");
  div.classList.add("aboutRooms");

  const h2 = document.createElement("h2");
  h2.innerText = "Nasze apartamenty";

  div.appendChild(h2);

  const description = document.createElement("p");
  description.classList.add("roomsDescription");
  description.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Porttitor eget dolor morbi non arcu risus quis varius quam. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Eget dolor morbi non arcu risus.";

  div.append(description);

  const roomsImg = document.createElement("img");
  roomsImg.src = require("../assets/aboutrooms.jpg");

  div.append(roomsImg);

  const h3 = document.createElement("h3");
  h3.innerHTML = "Idealna lokalizacja";

  div.append(h3);
  const menuDescription = document.createElement("p");
  menuDescription.classList.add("roomsDescription");

  menuDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Porttitor eget dolor morbi non arcu risus quis varius quam. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.";

  div.append(menuDescription);

  const mapImg = document.createElement("img");
  mapImg.src = require("../assets/map.png");

  div.append(mapImg);

  const roomsButton = NavButton("Sprawdż", RoomList);

  div.append(roomsButton);

  return div;
}
