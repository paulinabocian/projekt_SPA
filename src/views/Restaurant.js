export function Restaurant() {
  window.scrollTo(0, 0);

  const div = document.createElement("div");
  div.classList.add("restaurant");
  div.setAttribute("id", "restaurant");

  const h2 = document.createElement("h2");
  h2.innerText = "Restauracja";

  div.appendChild(h2);

  const description = document.createElement("p");
  description.classList.add("restaurantDescription");
  description.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Porttitor eget dolor morbi non arcu risus quis varius quam. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet.";

  h2.append(description);
  const restaurantImg = document.createElement("img");
  restaurantImg.src = require("../assets/restaurant.jpg");

  div.appendChild(restaurantImg);

  const h3 = document.createElement("h3");
  h3.innerText = "Wyjatkowe menu...";

  div.appendChild(h3);
  const menuDescription = document.createElement("p");
  menuDescription.classList.add("restaurantDescription");

  menuDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Porttitor eget dolor morbi non arcu risus quis varius quam. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet.";

  h3.append(menuDescription);

  return div;
}
