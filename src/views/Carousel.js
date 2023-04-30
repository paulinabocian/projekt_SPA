export function Carousel() {
  const div2 = document.querySelector("#carouselExampleControlsNoTouching");
  const div = document.createElement("div");
  div.classList.add("carousel-inner");

  div2.appendChild(div);
  const carouselItemActive = document.createElement("div");

  carouselItemActive.classList.add("carousel-item", "active");
  div.append(carouselItemActive);

  const firstImg = document.createElement("img");
  firstImg.src = require("../assets/spa_zabiegi.jpg");
  firstImg.classList.add("d-block", "w-100");
  const firstdiv = document.createElement("div");
  firstdiv.classList.add("carousel-caption", "d-none", "d-md-block");
  const firstH = document.createElement("h5");
  firstH.innerText = "Niezapomniany wypoczynek";
  const firstP = document.createElement("p");
  firstP.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consequatur deleniti quibusdam cum maiores, iusto expedita voluptate magni itaque quaerat, sit tenetur dicta quam! Impedit est odio quos temporibus in.";
  firstdiv.append(firstH, firstP);
  carouselItemActive.appendChild(firstImg);
  carouselItemActive.appendChild(firstdiv);

  const carouselItem2 = document.createElement("div");
  carouselItem2.classList.add("carousel-item");
  const secondImg = document.createElement("img");
  secondImg.src = require("../assets/apartamentyroz.jpg");
  secondImg.classList.add("d-block", "w-100");
  const seconddiv = document.createElement("div");
  seconddiv.classList.add("carousel-caption", "d-none", "d-md-block");
  const secondtH = document.createElement("h5");
  secondtH.innerText = "Luksusowe apartamenty";
  const secondP = document.createElement("p");
  secondP.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consequatur deleniti quibusdam cum maiores, iusto expedita voluptate magni itaque quaerat, sit tenetur dicta quam! Impedit est odio quos temporibus in.";
  seconddiv.append(secondtH, secondP);
  carouselItem2.appendChild(secondImg);
  carouselItem2.appendChild(seconddiv);

  const carouselItem3 = document.createElement("div");
  carouselItem3.classList.add("carousel-item");
  const thirdImg = document.createElement("img");
  thirdImg.src = require("../assets/masaz.jpg");
  thirdImg.classList.add("d-block", "w-100");
  const thirddiv = document.createElement("div");
  thirddiv.classList.add("carousel-caption", "d-none", "d-md-block");
  const thirdH = document.createElement("h5");
  thirdH.innerText = "Zabiegi specjalnie dla Ciebie";
  const thirdP = document.createElement("p");
  thirdP.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consequatur deleniti quibusdam cum maiores, iusto expedita voluptate magni itaque quaerat, sit tenetur dicta quam! Impedit est odio quos temporibus in.";
  thirddiv.append(thirdH, thirdP);
  carouselItem3.appendChild(thirdImg);
  carouselItem3.appendChild(thirddiv);

  carouselItemActive.after(carouselItem2);
  carouselItem2.after(carouselItem3);

  const rightButton = document.createElement("button");
  rightButton.classList.add("carousel-control-next");
  rightButton.setAttribute("type", "button");
  rightButton.setAttribute(
    "data-bs-target",
    "#carouselExampleControlsNoTouching"
  );
  rightButton.setAttribute("data-bs-slide", "next");

  div.appendChild(rightButton);

  const span1 = document.createElement("span");
  span1.classList.add("carousel-control-next-icon");
  span1.setAttribute("aria-hidden", "true");

  const span2 = document.createElement("span");
  span2.classList.add("visually-hidden");
  span2.innerText = "Next";

  rightButton.appendChild(span1);
  span1.after(span2);

  const leftButton = document.createElement("button");
  leftButton.classList.add("carousel-control-prev");
  leftButton.setAttribute("type", "button");
  leftButton.setAttribute(
    "data-bs-target",
    "#carouselExampleControlsNoTouching"
  );
  leftButton.setAttribute("data-bs-slide", "prev");
  div.appendChild(leftButton);

  const span3 = document.createElement("span");
  span3.classList.add("carousel-control-prev-icon");
  span3.setAttribute("aria-hidden", "true");

  const span4 = document.createElement("span");
  span4.classList.add("visually-hidden");
  span4.innerText = "Previous";

  leftButton.appendChild(span3);
  span3.after(span4);

  return div2;
}
