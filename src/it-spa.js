import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import { Home } from "./views/Home";
import { Nav } from "./navigation/Nav";
import { Carousel } from "./views/Carousel";
import { RunCarousel } from "./views/RunCarousel";
import { Spa } from "./views/Spa";
import { AboutUs } from "./views/AboutUs";
import { Heading } from "./views/Heading";
import { FacilitiesSection } from "./views/FacilitiesSection";
import { Footer } from "./views/Footer";
const main = document.querySelector("main");
main.before(Nav());
main.append(Spa());
main.append(AboutUs());
main.append(FacilitiesSection());
main.append(Home());

main.append(Heading());
main.append(Carousel());
RunCarousel;

const divFooter = document.querySelector(".text-muted");

divFooter.before(Footer());

document.body.addEventListener("navigate", (event) => {
  const Component = event.detail;

  main.innerHTML = "";
  main.append(Component());
});
