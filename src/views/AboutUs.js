import { NavButton } from "../common/NavButton";
import { Restaurant } from "./Restaurant";
import { AboutRooms } from "./AboutRooms";
import { AboutTreatment } from "./AboutTreatments";

export function AboutUs() {
  const div = document.createElement("div");
  div.classList.add("aboutUs");

  const h3 = document.createElement("h3");
  h3.innerText = "Poznaj naszą ofertę";

  div.append(h3);

  const p = document.createElement("p");
  p.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Porttitor eget dolor morbi non arcu risus quis varius quam. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Eget dolor morbi non arcu risus. Etiam non quam lacus suspendisse faucibus interdum. Sed lectus vestibulum mattis ullamcorper velit. Quis commodo odio aenean sed. In nulla posuere sollicitudin aliquam ultrices. Amet nisl suscipit adipiscing bibendum est ultricies. Adipiscing at in tellus integer feugiat scelerisque varius morbi.";

  div.append(p);

  const sectionButtons = document.createElement("div");
  sectionButtons.classList.add("sectionButtons");

  const restaurantButton = NavButton("Restauracja", Restaurant);
  sectionButtons.append(restaurantButton);

  const treatmentButton = NavButton("Zabiegi", AboutTreatment);
  sectionButtons.append(treatmentButton);

  const roomButton = NavButton("Apartamenty", AboutRooms);
  sectionButtons.append(roomButton);

  div.append(sectionButtons);

  return div;
}
